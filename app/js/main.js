$(function() {
  $('.top-slider__inner').slick({
    arrows: false,
    dots: true
  });

  $(".filter-link").click(function () {
    $(".filter-link").removeClass("filter-link--active");
    $(this).addClass("filter-link--active");
  });

  var mixer = mixitup('.product-items');
  var mixer = mixitup('.design-items');


});