$(document).ready(function(){
  
  // scrolled header
  $(document).scroll(function () {
    var $nav = $("header");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    
    var $mobile_menu = $(".menu");
    $mobile_menu.toggleClass('scrolled', $(this).scrollTop() > $mobile_menu.height());
  });

  // mobile menu
  $(".menu-icon").click(function(){
    $(this).next().slideToggle();
  });
  $(".menu li").click(function() {
    if ($(window).width() <= 1024){
      $(".menu").slideToggle();
    }
  });

  // smoothscroll
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      
     var height_header = $("header").height();
     var offset = -height_header;
    
      if ($(target).data("offset") !== undefined)
      offset = parseInt($(target).data("offset"));
    
      if (target.length) {
          $('html, body').animate({
              scrollTop: target.offset().top + offset
          }, 1000);
        }
    }
  });

  // swipebox
  $('.swipebox').swipebox({
    hideBarsDelay : 1000000 }
  );
  $('button').click(function() {
    $(this).toggleClass('expanded').siblings('div').slideToggle();
  });

  // slick slider
  $('.partners-slider').slick({
  	slidesToShow: 1,
    inifinite: true,
    autoplay: true,
    cssEase: 'linear',
    dots: true,
    speed: 2000,
    arrows : false,
    rtl: true
  });

});