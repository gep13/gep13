import { visit, SKIP } from 'unist-util-visit';

// Turn `:::note` / `:::info` / `:::tip` / `:::warning` container directives
// into <aside class="callout callout-<name>">, replacing the old Wyam
// Bootstrap `.alert .alert-info` boxes. Reusable for future posts.
const KINDS = new Set(['note', 'info', 'tip', 'warning']);

export function remarkCallouts() {
  return (tree, file) => {
    const src = String(file.value);
    visit(tree, (node) => {
      // Styled callouts: only container directives we recognise.
      if (node.type === 'containerDirective' && KINDS.has(node.name)) {
        const data = node.data || (node.data = {});
        data.hName = 'aside';
        data.hProperties = { className: ['callout', `callout-${node.name}`] };
        return; // keep visiting children (nested text may contain colons too)
      }
      // remark-directive also parses inline `:name` / `::name` as text/leaf
      // directives — which wrongly eats prose like times ("22:21" -> `:21`).
      // We only use `:::` container callouts, so turn any text/leaf directive
      // back into its exact original source text.
      if (node.type === 'textDirective' || node.type === 'leafDirective') {
        if (node.position) {
          const { start, end } = node.position;
          node.value = src.slice(start.offset, end.offset);
        } else {
          node.value = (node.type === 'leafDirective' ? '::' : ':') + (node.name || '');
        }
        node.type = 'text';
        delete node.children; delete node.attributes; delete node.name; delete node.data;
        return SKIP;
      }
    });
  };
}
