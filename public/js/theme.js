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
  btn.addEventListener('click', function () {
    document.documentElement.setAttribute('data-theme', cur() === 'dark' ? 'light' : 'dark');
    paint();
  });
  paint();
})();
