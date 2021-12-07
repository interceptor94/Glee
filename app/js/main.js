$(function() {
  // $('.product-one__thumb').slick({
  //   asNavFor: '.product-one__big',
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   vertical: true,
  //   draggable: false
  // });
  // $('.product-one__big').slick({
  //   asNavFor: '.product-one__thumb',
  //   draggable: false,
    
  // });
  $(".star").rateYo({
    starWidth: "13px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00", 
    readOnly: true
  });
  $('.shop-filter__price-input').ionRangeSlider({
    prefix: "$",
    onStart: function (data){
      $('.form-from').text(data.from);
      $('.form-to').text(data.to);
    },
    onChange: function (data) {
      $('.form-from').text(data.from);
      $('.form-to').text(data.to);
    }
  });

  $('.top-slider__inner').slick({
    arrows: false,
    dots: true
  }); 

  $(".filter-link").click(function () {
    $(".filter-link").removeClass("filter-link--active");
    $(this).addClass("filter-link--active");
  });
});