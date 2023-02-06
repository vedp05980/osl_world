// (function ($, Drupal) {
//     'use strict';
  
//     Drupal.behaviors.backTotop = {
//         attach: function attach() {
//             $(window).scroll(function() {

//                 let position = $(this).scrollTop();
//                 if (position >= 100) {
//                     console.log("hello");
//                     $('.navigation_bar').addClass('costum-navbar');
//                 } else {
//                     $('.navigation_bar').removeClass('costum-navbar');
//                 }

//             });
//         }
//     };
//   })(jQuery, Drupal);

  const blogblock = ($) => {
    $(document).ready(function () {
        $(window).scroll(function() {
  
            let position    =   $(this).scrollTop();
              if (position >= 100) {
                $('.navigation_bar').addClass('costum-navbar');
              } else {
                $('.navigation_bar').removeClass('costum-navbar');
              }
            
          });
    });
};
blogblock(jQuery);
