jQuery(document).ready(function() {

    jQuery('.slider-nav').slick({
        slidesToShow: 2,
        infinite: true,
        prevArrow: false,
        nextArrow: false,
        dots: true,
        slidesToScroll: 1
            // asNavFor: '.slider-for',

        // dots: true,
        // focusOnSelect: true
    });
    jQuery('.slider-digital').slick({
        slidesToShow: 5,
        infinite: true,
        prevArrow: false,
        nextArrow: false,
        dots: true,
        slidesToScroll: 1
    });
});