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

  $('.product-tabs__top-item').on('click', function (e) {
    
    e.preventDefault();
    $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
    $(this).addClass('product-tabs__top-item--active');

    $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
    $($(this).attr('href')).addClass('product-tabs__content-item--active');

  });

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

  $('.slider-product__inner').slick({
    
    slidesToShow: 4,
    slidesToScroll: 1,
  
  });

  $(".filter-link").click(function () {
    $(".filter-link").removeClass("filter-link--active");
    $(this).addClass("filter-link--active");
  });
});