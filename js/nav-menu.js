$(document).ready(function(){
   $(window).resize(function(){
      // This will fire each time the window is resized:
      if($(window).width() > 768){
         $('.nav-menu').show();
      } else {
         $('.nav-menu').hide();
      };

      $('#nav-icon').removeClass('open');
   });

   $('#nav-icon').click(function(){
      $('.nav-menu').delay(100).slideToggle(100);
   }).resize(); // This will simulate a resize to trigger the initial run.
});
