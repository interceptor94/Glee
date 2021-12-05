$(function() {






  $(".star").rateYo({
    starWidth: "13px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00", 
    readOnly: true
  });

  $(".shop-filter__price-input").ionRangeSlider({
    prefix: "$",
    onStart: function (data){
      $('.form-from').text(data.from);
      $('.form-to').text(data.to);
    },
    onChange: function (data) {
      $('.form-from').text(data.from);
      $('.form-to').text(data.to);
    },
  });


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