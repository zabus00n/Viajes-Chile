$(document).ready(function () {

  // Navbar background color change

  var nav = document.querySelector('nav');

  window.addEventListener('scroll', function () {
    if (window.pageYOffset > 100) {
      $(nav).css('background-color', '#264653');
    } else {
      $(nav).css('background-color', 'initial');
    }
  });

  // Smooth Scroll

  $("a").click(function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      var gato = this.hash;

      $("html, body").animate({
        scrollTop: $(gato).offset().top
      }, 800, function () {
        window.location.hash = gato;
      });
    }
  });

  // Popovers (enabled everywhere)

  var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
  })

})