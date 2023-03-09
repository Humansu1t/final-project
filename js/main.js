$(function(){

    $('.banner-slider').slick({
        dots: true,
        prevArrow: '<button class="banner-slider-btn banner-slider-btnprev"><img src="images/left.svg" alt=""></button>',
        nextArrow: '<button class="banner-slider-btn banner-slider-btnnext"><img src="images/right.svg" alt=""></button>',
    });
   
    $('.tab').on('click', function(e){
        e.preventDefault();

        $('.tab').removeClass('tab-active');
        $('.tabs-content').removeClass('tabs-content-active');
        $(this).addClass('tab-active');
        $($(this).attr('href')).addClass('tabs-content-active')
    });


    $('.favs').on('click', function(){
        $(this).toggleClass('favs-active')

    });

    $('.product-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button class="product-slider-btn product-slider-btnprev"><img src="images/left-black.svg" alt=""></button>',
        nextArrow: '<button class="product-slider-btn product-slider-btnnext"><img src="images/right-black.svg" alt=""></button>',
    });


});
