$(function(){

    $('.banner-slider').slick({
        dots: true,
        prevArrow: '<button class="banner-slider-btn banner-slider-btnprev"><img src="images/left.svg" alt=""></button>',
        nextArrow: '<button class="banner-slider-btn banner-slider-btnnext"><img src="images/right.svg" alt=""></button>',
    });
   
     $('.tabs-item').on('click', function(e){
        e.preventDefault();

        $('.tabs-item').removeClass('tab-active');
        $('.search-content-item').removeClass('search-active');
        $(this).addClass('tab-active');
        $($(this).attr('href')).addClass('search-active')
    });

});
