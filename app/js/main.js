$(function() {
  $('.menu-burger').on('click', function () {
    $('.menu__list').toggleClass('menu--active');
  });
  $('.filter-title').on('click', function () {
    $('.shop-filter__sort').toggleClass('shop-filter__sort--active');
  }); 



  $('.product-one__thumb').slick({
    asNavFor: '.product-one__big',
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    draggable: false
  });
  $('.product-one__big').slick({
    asNavFor: '.product-one__thumb',
    draggable: false,
    arrows: false
  });

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
    appendArrows: '.slider-navigation',
    prevArrow: '<div class="prev">-</div>',
    nextArrow: '<div class="next">-</div>',
    arrows: true,
  });

  $(".filter-link").click(function () {
    $(".filter-link").removeClass("filter-link--active");
    $(this).addClass("filter-link--active");
  });


  

$(function () {
  var containerEl1 = document.querySelector('[data-ref="container-1"]');
  var containerEl2 = document.querySelector('[data-ref="container-2"]');

  var config = {
    controls: {
      scope: 'local'
    }
  };

  var mixer1 = mixitup(containerEl1, config);
  var mixer2 = mixitup(containerEl2, config);
});

  




 
});