$(function(){

    $('.banner-slider').slick({
        dots: true,
        prevArrow: '<button class="banner-slider-btn banner-slider-btnprev"><img src="images/left.svg" alt=""></button>',
        nextArrow: '<button class="banner-slider-btn banner-slider-btnnext"><img src="images/right.svg" alt=""></button>',
        responsive: [{

        
            breakpoint: 969,
            settings: {
                arrows: false
            }
        }
        ]
    });
   
    $('.tab').on('click', function(e){
        e.preventDefault();

        $($(this).siblings()).removeClass('tab-active');
        $($(this).closest('.tabs-wrapper').siblings().find('div')).removeClass('tabs-content-active');

        $(this).addClass('tab-active');
        $($(this).attr('href')).addClass('tabs-content-active')

        $('.product-slider').slick('setPosition')
        $('.pop-product-slider').slick('setPosition')
    });

    $('.menu-btn').on('click', function () {
        $('.menu-mobile-list').toggleClass('mobile-list-active')
    });

    $('.favs').on('click', function(){
        $(this).toggleClass('favs-active')

    });

    $('.product-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button class="product-slider-btn product-slider-btnprev"><img src="./images/left-black.svg" alt=""></button>',
        nextArrow: '<button class="product-slider-btn product-slider-btnnext"><img src="./images/right-black.svg" alt=""></button>',
        prevArrow: '<button class="product-slider-btn product-slider-btnprev"><img src="../images/left-black.svg" alt=""></button>',
        nextArrow: '<button class="product-slider-btn product-slider-btnnext"><img src="../images/right-black.svg" alt=""></button>',
        responsive: [{
            breakpoint: 1301,
            settings: {
                arrows: false,
                dots: true
            }
        },
        {
            breakpoint: 1201,
            settings: {
                slidesToShow: 3,
                arrows: false,
                dots: true
            }
        },
        {
            breakpoint: 870,
            settings: {
                slidesToShow: 2,
                arrows: false,
                dots: true
            }
        },
        {
            breakpoint: 590,
            settings: {
                slidesToShow: 1,
                arrows: false,
                dots: true
            }
        }
        ]
    });
    $('.footer-topDrop').on('click', function () {
        $(this).next().slideToggle();
        $(this).toggleClass('footer-topDrop-active');
      });
    
    $('.filter-style').styler();

    $('.product-more').on('click', function () {
        $(this).prev().slideToggle('.opne-active');
      });

    $('.filter-item-drop').on('click', function(){
        $(this).toggleClass('filter-item-drop-active');
        $(this).next().slideToggle('200')
    });
    $('.filter-extra').on('click', function(){
        $(this).toggleClass('filter-item-drop-active');
        $(this).next().slideToggle('200')
    });

    $('.js-range-slider').ionRangeSlider({
        type:"double",
        min: 100000,
        max: 500000,
    });

    $('.filter-btngrid').on('click',function(){
        $(this).addClass('catalog-filter-active')
        $('.filter-btnline').removeClass('catalog-filter-active')
        $('.product-item-wrapper').removeClass('wrapper-line')
    });

    $('.filter-btnline').on('click',function(){
        $(this).addClass('catalog-filter-active')
        $('.filter-btngrid').removeClass('catalog-filter-active')
        $('.product-item-wrapper').addClass('wrapper-line')
    });

   

    $('.aside-btn').on('click', function () {
        $(this).next().slideToggle();
      });

      $(".rate-yo").rateYo({
        rating: 4,
        ratedFill:"#1c62cd",
        spacing: "7px",
        normalFill: "#c4c4c4"
      });

      $('.pop-product-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button class="product-slider-btn product-slider-btnprev"><img src="../images/left-black.svg" alt=""></button>',
        nextArrow: '<button class="product-slider-btn product-slider-btnnext"><img src="../images/right-black.svg" alt=""></button>',
        responsive: [{
            breakpoint: 1301,
            settings: {
                arrows: false,
                dots: true
            }
        },
        {
            breakpoint: 1201,
            settings: {
                slidesToShow: 3,
                arrows: false,
                dots: true
            }
        },
        {
            breakpoint: 870,
            settings: {
                slidesToShow: 2,
                arrows: false,
                dots: true
            }
        },
        {
            breakpoint: 590,
            settings: {
                slidesToShow: 1,
                arrows: false,
                dots: true
            }
        }
        ]
    });
 

    
  
});
