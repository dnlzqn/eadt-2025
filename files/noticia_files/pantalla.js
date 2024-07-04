/* window.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");
    jQuery(function(){
      jQuery('.field--name-field-imatges-tv').bxSlider({
        auto: true,
        mode: 'fade',
        captions: true,
        slideWidth: 600,
        pager: false,
        controls: false
      });
    });
  });
*/

(function ($, Drupal) {

  ////////////////////////////////////////////////////////////
  Drupal.behaviors.pantallaSlick = {
    attach: function(context, settings) {


        if( $('.field--name-field-pantalla-images').length > 0 ){

          let url = window.location.href;
          if (url.indexOf("pantalles/") > -1) {
            setInterval("location.reload(true)", 1800000); // Refresca cada 30min
            if (e.keyCode === 37) {
              // Previous page
              $('.slick-carousel').slick('slickPrev');
            } else if (e.keyCode === 39) {
              // Next page
              $('.slick-carousel').slick('slickNext');
            }
          }
          jQuery('.field--name-field-pantalla-images').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            fade: true,
            pauseOnHover: false,
            pauseOnFocus: false,
          });
      }

    }
  };

})(jQuery, Drupal);

/*window.addEventListener("DOMContentLoaded", (event) => {
  jQuery(function(){
    let url = window.location.href;
    if (url.indexOf("pantalles/") > -1) {
      setInterval("location.reload(true)", 1800000); // Refresca cada 30min
      if (e.keyCode === 37) {
        // Previous page
        $('.slick-carousel').slick('slickPrev');
      } else if (e.keyCode === 39) {
        // Next page
        $('.slick-carousel').slick('slickNext');
      }
    }
    jQuery('.field--name-field-pantalla-images').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      fade: true,
      pauseOnHover: false,
      pauseOnFocus: false,
    });
  });
});*/


