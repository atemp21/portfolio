$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
  
  $.scrollify({
    section: ".container-fluid",
    afterResize: scrollSnap()
  });

  scrollSnap();

  $(window).on('resize', scrollSnap());

  //GSAP TWEENS
  TweenMax.from("#social-links", 2, {opacity:0, delay:4});
  TweenMax.from(".container-fluid", 2,{opacity:0, delay:4 });
  TweenMax.from("#email",2,{opacity:0, delay:4});
  TweenMax.from("#resume",2,{opacity:0,delay:3.5});
})


function scrollSnap() {
  if ($(window).width() > 420) {
    $.scrollify.enable();
  }
  else{
    $.scrollify.disable();
  }
}