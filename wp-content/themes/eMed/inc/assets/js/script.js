jQuery(document).ready(function() {
    //Toggle Script
    jQuery('.navbar-toggler').on('click', function() {
        jQuery(this).toggleClass('active');
        jQuery('body').toggleClass('navigation-open');
    });

    // jQuery('.navbar-toggler').on('click', function() {
    //     jQuery('.navbar-toggler').removeClass('active');
    //     jQuery('body').removeClass('navigation-open');
    // });
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
        }, 300, function() {
            window.location.hash = hash;
        });
    });
    jQuery('.testimonial-slider').slick({
        slidesToShow: 1,
        infinite: true,
        prevArrow: false,
        nextArrow: false,
        dots: true,
        slidesToScroll: 1,
    });
    jQuery( ".show_testimonial_video" ).on( "click", function() {
        var video_url = jQuery(this).attr('data-url');
        jQuery(".emed_video_url iframe").attr('src', video_url);
        jQuery('#videoTestimonial').modal('show');
    });
});