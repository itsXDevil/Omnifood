$(document).ready (function() {

  /* For the sticky navigation */
    $('.js--section-features').waypoint(function(direction) {
        if(direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '140px'
      });    

     /* Scroll on bottom */
     $('.js--scroll-to-plans').click (function () {
         $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
     });

     $('.js--scroll-to-start').click (function () {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    });
        


});