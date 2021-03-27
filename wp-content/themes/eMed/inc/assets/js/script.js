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
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
        ],
    });
    jQuery("#services li a[href^='#']").on('click', function(e) {
        // prevent default anchor click behavior
        e.preventDefault();
        // store hash
        var hash = this.hash;
        // animate
        jQuery('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 1000, function() {
            window.location.hash = hash;
        });
    });
});