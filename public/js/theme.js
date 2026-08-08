// Theme toggle. Served as a static file (script-src 'self') so no inline
// script / 'unsafe-inline' is needed. Initial theme comes from CSS
// prefers-color-scheme; this only wires the manual override button.
(function () {
  var btn = document.getElementById('themeToggle');
  if (!btn) return;
  function cur() {
    var s = document.documentElement.getAttribute('data-theme');
    return s ? s : (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  }
  function paint() { btn.textContent = cur() === 'dark' ? '☀ paper' : '☾ espresso'; }
  // Keep the giscus comment iframe in step with the manual toggle. giscus
  // loads with preferred_color_scheme (matches the page's initial OS theme);
  // this only pushes the override when the reader flips the switch.
  function syncGiscus() {
    var frame = document.querySelector('iframe.giscus-frame');
    if (!frame) return;
    frame.contentWindow.postMessage(
      { giscus: { setConfig: { theme: cur() } } },
      'https://giscus.app'
    );
  }
  btn.addEventListener('click', function () {
    document.documentElement.setAttribute('data-theme', cur() === 'dark' ? 'light' : 'dark');
    paint();
    syncGiscus();
  });
  paint();
})();
