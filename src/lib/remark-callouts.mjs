import { visit } from 'unist-util-visit';

// Turn `:::note` / `:::info` / `:::tip` / `:::warning` container directives
// into <aside class="callout callout-<name>">, replacing the old Wyam
// Bootstrap `.alert .alert-info` boxes. Reusable for future posts.
const KINDS = new Set(['note', 'info', 'tip', 'warning']);

export function remarkCallouts() {
  return (tree) => {
    visit(tree, (node) => {
      if (node.type === 'containerDirective' && KINDS.has(node.name)) {
        const data = node.data || (node.data = {});
        data.hName = 'aside';
        data.hProperties = { className: ['callout', `callout-${node.name}`] };
      }
    });
  };
}
