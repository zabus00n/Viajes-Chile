$(document).ready(function () {

  var nav = document.querySelector('nav');

  window.addEventListener('scroll', function () {
    if (window.pageYOffset > 100) {
      nav.classList.add('bg-light', 'shadow');
      $("a").removeClass('text-white');
      $("a").css('color', 'black');
    } else {
      nav.classList.remove('bg-light', 'shadow');
      $("a").css('color', 'white');
    }
  });
})