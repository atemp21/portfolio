$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
  
  $.scrollify({
    section: ".container-fluid",
    afterResize: scrollSnap()
  });

  scrollSnap();

  $(window).on('resize', scrollSnap());
})


function scrollSnap() {
  if ($(window).width() > 420) {
    $.scrollify.enable();
  }
  else{
    $.scrollify.disable();
  }
}