$(function() {
  $('.top-slider__inner').slick({
    arrows: false,
    dots: true
  });

  $(".product__main-link").click(function () {
    $(".product__main-link").removeClass("product__main-link--active");
    $(this).addClass("product__main-link--active");
  });

  var mixer = mixitup('.product-items');
});