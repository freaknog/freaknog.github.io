if (location.pathname == '/') location.pathname = '/index.html';

function uk() {
  let e = document.createElement('iframe');
  e.src = "/ass/ultrakill.html";
  document.querySelector('#ultrapilled').appendChild(e);
  document.querySelector('#ultrabutton').remove();
}