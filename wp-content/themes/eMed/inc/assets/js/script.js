jQuery(document).ready(function() {

    jQuery('.slider-nav').slick({
        slidesToShow: 2,
        infinite: true,
        prevArrow: false,
        nextArrow: false,
        dots: true,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                    adaptiveHeight: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });
    jQuery('.slider-digital').slick({
        slidesToShow: 5,
        infinite: true,
        prevArrow: false,
        nextArrow: false,
        dots: true,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    adaptiveHeight: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    });
});