jQuery( function ( $ ) {
    'use strict';
    // here for each comment reply link of wordpress
    $( '.comment-reply-link' ).addClass( 'btn btn-primary' );

    // here for the submit button of the comment reply form
    $( '#commentsubmit' ).addClass( 'btn btn-primary' );

    // The WordPress Default Widgets
    // Now we'll add some classes for the wordpress default widgets - let's go

    // the search widget
    $( '.widget_search input.search-field' ).addClass( 'form-control' );
    $( '.widget_search input.search-submit' ).addClass( 'btn btn-default' );
    $( '.variations_form .variations .value > select' ).addClass( 'form-control' );
    $( '.widget_rss ul' ).addClass( 'media-list' );

    $( '.widget_meta ul, .widget_recent_entries ul, .widget_archive ul, .widget_categories ul, .widget_nav_menu ul, .widget_pages ul, .widget_product_categories ul' ).addClass( 'nav flex-column' );
    $( '.widget_meta ul li, .widget_recent_entries ul li, .widget_archive ul li, .widget_categories ul li, .widget_nav_menu ul li, .widget_pages ul li, .widget_product_categories ul li' ).addClass( 'nav-item' );
    $( '.widget_meta ul li a, .widget_recent_entries ul li a, .widget_archive ul li a, .widget_categories ul li a, .widget_nav_menu ul li a, .widget_pages ul li a, .widget_product_categories ul li a' ).addClass( 'nav-link' );

    $( '.widget_recent_comments ul#recentcomments' ).css( 'list-style', 'none').css( 'padding-left', '0' );
    $( '.widget_recent_comments ul#recentcomments li' ).css( 'padding', '5px 15px');

    $( 'table#wp-calendar' ).addClass( 'table table-striped');

    // Adding Class to contact form 7 form
    $('.wpcf7-form-control').not(".wpcf7-submit, .wpcf7-acceptance, .wpcf7-file, .wpcf7-radio").addClass('form-control');
    $('.wpcf7-submit').addClass('btn btn-primary');

    // Adding Class to Woocommerce form
    $('.woocommerce-Input--text, .woocommerce-Input--email, .woocommerce-Input--password').addClass('form-control');
    $('.woocommerce-Button.button').addClass('btn btn-primary mt-2').removeClass('button');

    $('ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
        $(this).parent().siblings().removeClass('open');
        $(this).parent().toggleClass('open');
    });

    // Add Option to add Fullwidth Section
    function fullWidthSection(){
        var screenWidth = $(window).width();
        if ($('.entry-content').length) {
            var leftoffset = $('.entry-content').offset().left;
        }else{
            var leftoffset = 0;
        }
        $('.full-bleed-section').css({
            'position': 'relative',
            'left': '-'+leftoffset+'px',
            'box-sizing': 'border-box',
            'width': screenWidth,
        });
    }
    fullWidthSection();
    $( window ).resize(function() {
        fullWidthSection();
    });
    $(function () {
        $('.sticky_filter').on('click', function() {
           $('#sticky_filter').modal('show');   
        });
        $('[data-toggle="tooltip"]').tooltip({
            trigger: 'click'
        });
        
        
    });
    /*
   $("#price-range").slider({
        from: 0,
        to: 3054000,
        round: 0,
        format: {format: '##', locale: 'de'},
        dimension: '&nbsp;€',
        skin: "plastic"
    });
    */
     $(".type").click(function () {
        
        $(".type").removeClass("active");
        $(this).addClass("active");
        
    });
     $(".header-login a").click(function(){
        $(this).toggleClass("active");
        $(".header-login-form.login-form").toggle("slideDown");
        $(".header-login-form.forgot-form").hide();
    });

    var nav = $(".navbar-collapse");
    nav.find('li a').each(function() {
        if ($(this).next().length > 0) {
            $(this).parent('li').addClass('has-sub');
        }
    });

    $('.toggle').click(function(e) {
             e.preventDefault();

            var $this = $(this);

            if ($this.next().hasClass('show')) {
                $this.parent('li').removeClass('active');
                $this.next().removeClass('show');
                
                $this.next().hide(350);
            } else {
               
                $this.parent().parent().find('li .inner').removeClass('show');
                $this.parent().parent().find('li').removeClass('active');
                $this.parent().parent().find('li .inner').slideUp(350);
                $this.parent('li').addClass('active');
                //$this.next().slideDown('slow');
                $this.next().slideDown('slow').addClass('show');
                
                
            }
        });
    (function(a){a.createModal=function(b){defaults={title:"",message:"Your Message Goes Here!",closeButton:true,scrollable:false};var b=a.extend({},defaults,b);var c=(b.scrollable===true)?'style="max-height: 420px;overflow-y: auto;"':"";html='<div class="modal fade" id="myModal">';html+='<div class="modal-dialog modal-lg">';html+='<div class="modal-content">';html+='<div class="modal-header">';html+='<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>';if(b.title.length>0){html+='<h4 class="modal-title">'+b.title+"</h4>"}html+="</div>";html+='<div class="modal-body" '+c+">";html+=b.message;html+="</div>";html+='<div class="modal-footer">';if(b.closeButton===true){html+='<button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>'}html+="</div>";html+="</div>";html+="</div>";html+="</div>";a("body").prepend(html);a("#myModal").modal().on("hidden.bs.modal",function(){a(this).remove()})}})(jQuery);
    
    

    $(document).ready(function(){

        $(".home #landing-modal").modal('show');

        /*$('.js-selectbox').selectpicker({
          size: 4
        });*/

        social_share();

        $(".contact-block h3 .icon").click(function () {
            if ($(this).parent("h3").next(".form-filde").is(":visible"))
            {
                $(this).parent("h3").next(".form-filde").slideUp();
                $(this).removeClass("icon-icon-close");
                $(this).addClass("icon-arrow-down-form");
            } else
            {
                $(this).parent("h3").next(".form-filde").slideDown();
                $(this).removeClass("icon-arrow-down-form");
                $(this).addClass("icon-icon-close");
            }
        });
        $(".question-part h4").click(function () {
            if ($(this).next(".accordion-section-content").is(":visible"))
            {
                $(this).next(".accordion-section-content").slideUp(300);
                $(this).removeClass("active");
            } else
            {
                $(".question-part .accordion-section-content").slideUp(300);
                $(".question-part h4").removeClass("active");
                $(this).next(".accordion-section-content").slideDown();
                $(this).addClass("active");

            }
        });

        $('.view-pdf').on('click',function(){
            var pdf_link = $(this).attr('href');
            var iframe = '<div class="iframe-container"><iframe src="'+pdf_link+'"></iframe></div>'
            $.createModal({
            title:'My Title',
            message: iframe,
            closeButton:true,
            scrollable:false
            });
            return false;        
        }); 

        $('.pop_image').on('click', function() {
           $('.imagepreview').attr('src', $(this).attr('data-src'));
            $('#imagemodal').modal('show');   
        });
        

        
        
        /*End Tokenize*/

        $('#form1').on('shown.bs.modal', function () {
          $('#landing-modal').modal('hide');
          //$('body').addClass("modal-open");


          var item_length = $('.prop-modal-slider > div').length - 1;
          var slider = $('.prop-modal-slider').slick({
                arrows: false,
                autoplay: true,
                adaptiveHeight: true,
                autoplaySpeed: 4000,
                slide: 'div',
                infinite: false,
                touchMove: true,
                draggable: true,
                pauseOnHover: false,
                pauseOnFocus: false,
            });
                setTimeout(function () {
                    $('body').addClass("modal-open");              
                }, 1000);
                    
          
            // On before slide change
            slider.on('afterChange', function (event, slick, currentSlide, nextSlide) {
                //check the length of total items in .slide container
                //if that number is the same with the number of the last slider
                //Then pause the slider
                if (item_length === slider.slick('slickCurrentSlide')) {
                    //this should do the same thing -> slider.slickPause();
                    setTimeout(function () {
                        $('#form1').modal('hide');
                        $('body').removeClass("modal-open");
                    }, 4000);
                    slider.slickSetOption("autoplay", false, false);
                }
                ;
            });
        });
        
    });

    /*Scroll to top*/
    $(document).ready(function($){
        // browser window scroll (in pixels) after which the "back to top" link is shown
        var offset = 150,
            //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
            scroll_top_duration = 700,
            //grab the "back to top" link
            $back_to_top = $('.scroll-top');

        //hide or show the "back to top" link
        $(window).scroll(function(){
            ( $(this).scrollTop() > offset ) ? $back_to_top.show() : $back_to_top.hide();            
        });

        //smooth scroll to top
        $back_to_top.on('click', function(event){
            event.preventDefault();
            $('body,html').animate({
                scrollTop: 0 ,
                }, scroll_top_duration
            );
        });

    });
    /* open default tab*/
    
    $(document).ready(function () {
        var url = document.location.toString();
        if (url.match('#')) {
            $('.nav-tabs a[href="#' + url.split('#')[1] + '"]').tab('show');
        } 

        // Change hash for page-reload
        $('.nav-tabs a').on('shown.bs.tab', function (e) {
            window.location.hash = e.target.hash;
        });
    });
    
    /* Filter expand*/
    $(document).ready(function () {
        $('.filter_select').on('click', function() {
          
          if ($(".filter_panel").is(":visible"))
            {
                $(".filter_panel").slideUp();
                $(this).find("i.fa").removeClass("fa-minus");
                $(this).find("i.fa").addClass("fa-plus");
            } else
            {
                $(".filter_panel").slideDown();
                $(this).find("i.fa").removeClass("fa-plus");
                $(this).find("i.fa").addClass("fa-minus");
            }

        });
        
    });
       

    $( document ).ready( function( ) {
        $( '.tree li' ).each( function() {
            if( $( this ).children( 'ul' ).length > 0 ) {
                $( this ).addClass( 'parent' );     
            }
        });
     
        $( '.tree li.parent > a' ).click( function( ) {
            $( this ).parent().toggleClass( 'active' );
            $( this ).parent().children( 'ul' ).slideToggle( 'fast' );
        });

        $('.accordion.panel-group').on('hidden.bs.collapse', toggleIcon);
        $('.accordion.panel-group').on('shown.bs.collapse', toggleIcon);
        /*
        var istouch =getMobileOperatingSystem();
          if(istouch=="Yes"){
             $('.sticky_filter').tooltip('disable');
          }
          else{
             $('.sticky_filter').tooltip();
          }
		*/
     
    });
    //Count Uk Property for popup box start
    
    //Count Uk Property for popup box end


    //jQuery time
    var current_fs, next_fs, previous_fs; //fieldsets
    var left, opacity, scale; //fieldset properties which we will animate
    var animating; //flag to prevent quick multi-click glitches

    jQuery(".next").click(function(){
        if(animating) return false;
        animating = true;
        
        current_fs = jQuery(this).parent();
        next_fs = jQuery(this).parent().next();
        
        //activate next step on progressbar using the index of next_fs
        jQuery("#progressbar li").eq(jQuery("fieldset").index(next_fs)).addClass("active");
        
        //show the next fieldset
        next_fs.show(); 
        //hide the current fieldset with style
        current_fs.animate({opacity: 0}, {
            step: function(now, mx) {
                //as the opacity of current_fs reduces to 0 - stored in "now"
                //1. scale current_fs down to 80%
                scale = 1 - (1 - now) * 0.2;
                //2. bring next_fs from the right(50%)
                left = (now * 50)+"%";
                //3. increase opacity of next_fs to 1 as it moves in
                opacity = 1 - now;
                current_fs.css({
            'transform': 'scale('+scale+')',
            'position': 'absolute'
          });
                next_fs.css({'left': left, 'opacity': opacity});
            }, 
            duration: 800, 
            complete: function(){
                current_fs.hide();
                animating = false;
            }, 
            //this comes from the custom easing plugin
            easing: 'easeInOutBack'
        });
    });

    jQuery(".previous").click(function(){
        if(animating) return false;
        animating = true;
        
        current_fs = jQuery(this).parent();
        previous_fs = jQuery(this).parent().prev();
        
        //de-activate current step on progressbar
        jQuery("#progressbar li").eq(jQuery("fieldset").index(current_fs)).removeClass("active");
        
        //show the previous fieldset
        previous_fs.show(); 
        //hide the current fieldset with style
        current_fs.animate({opacity: 0}, {
            step: function(now, mx) {
                //as the opacity of current_fs reduces to 0 - stored in "now"
                //1. scale previous_fs from 80% to 100%
                scale = 0.8 + (1 - now) * 0.2;
                //2. take current_fs to the right(50%) - from 0%
                left = ((1-now) * 50)+"%";
                //3. increase opacity of previous_fs to 1 as it moves in
                opacity = 1 - now;
                current_fs.css({'left': left});
                previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity});
            }, 
            duration: 800, 
            complete: function(){
                current_fs.hide();
                animating = false;
            }, 
            //this comes from the custom easing plugin
            easing: 'easeInOutBack'
        });
    });

    jQuery(".submit").click(function(){
        return false;
    });
});
function toggleIcon(e) {
    jQuery(e.target)
        .prev('.panel-heading')
        .find(".more-less")
        .toggleClass('glyphicon-plus glyphicon-minus');
}
function social_share(){
    jQuery( ".share-btn" ).click(function(e) {
         jQuery('.networks-5').not(jQuery(this).next( ".networks-5" )).each(function(){
            jQuery(this).removeClass("active");
         });
     
            jQuery(this).next( ".networks-5" ).toggleClass( "active" );
    });
}
function getMobileOperatingSystem() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/iPad|iPhone|iPod|windows phone|android/.test(userAgent) && !window.MSStream) {
        return "Yes";
    }
    return "No";
}