$(document).ready(function () {

  var nav = document.querySelector('nav');

  window.addEventListener('scroll', function () {
    if (window.pageYOffset > 100) {
      $(nav).css('background-color', '#264653');
    } else {
      $(nav).css('background-color', 'initial');
    }
  });
})