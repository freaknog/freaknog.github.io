if (location.pathname == '/') location.pathname = '/index.html';

function embed(x) {
  let e = document.createElement('iframe');
  e.src = "/embed/" + new URL(x.href).hash.replace('#', '') + ".html";
  x.parentElement.insertBefore(e, x);
  x.remove();
}