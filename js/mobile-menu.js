$(function(){
  $('.menu-btn').on('click', function(e) {
    e.preventDefault;
    $(this).toggleClass('menu-btn_active');
    $('.mobile-nav-menu').toggleClass('active');
  });
  $('.mobile-nav-menu__link').on('click', function(e) {
    e.preventDefault;
    $('.mobile-nav-menu').removeClass('active');
    $('.menu-btn').removeClass('menu-btn_active');
  })
})