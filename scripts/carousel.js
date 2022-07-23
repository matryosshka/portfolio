!$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    margin: 20,
    loop: true,
    nav: true,
    autoHeight: false,
    
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items:2,
        nav: false
      },
      1200: {
        items: 3
      }
    },
    responsiveBaseElement: '.achievement__content',
    navContainer: '.myNav'
  });
});