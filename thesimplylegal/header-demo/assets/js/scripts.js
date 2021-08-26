$(document).ready(function() {
  "use strict";
  //Toggle Script
  jQuery('.header-toggle').on('click', function () {
  jQuery(this).toggleClass('active');
  jQuery('body').toggleClass('navigation-open');
  });
  
  jQuery('.close-icon').on('click', function () {
  jQuery('.header-toggle').removeClass('active');
  jQuery('body').removeClass('navigation-open');
  });
  
  jQuery('.dropdown-arrow').on('click', function() {
    var element = jQuery(this).parent('.menu-item-has-children');
    if (element.hasClass('open')) {
      
      element.removeClass('open');
      element.find('.btn-prev').remove();
      element.find('.menu-item-has-children').removeClass('open');
      element.find('.sub-menu').removeClass('open');
      
    } else {
      var name = element.find('a').html();
      element.addClass('open');
      element.children('.sub-menu').addClass('open');
      element.find('.btn-prev').remove();
      element.children('.sub-menu').prepend('<li class="btn-prev"><a href="javascript:void(0)">'+name+'</a></li>')
      element.siblings('.menu-item-has-children').children('.sub-menu').removeClass('open');
      element.siblings('.menu-item-has-children').removeClass('open');
      element.siblings('.menu-item-has-children').find('.menu-item-has-children').removeClass('open');
      element.siblings('.menu-item-has-children').find('.sub-menu').removeClass('open');
      
      jQuery('.sub-menu .btn-prev').click(function() {
      jQuery(this).parent().removeClass('open');
      jQuery(this).parent().parent().removeClass('open');
      });
    }
  });
 
	 $(".box-img, .box-dcs").hover(function () {
		$('.box-images').addClass('green-line-hover');
		$('.box-dcs').addClass('green-line-hover');
	}, function () {
		$('.box-images').removeClass('green-line-hover');
		$('.box-dcs').removeClass('green-line-hover');

	});
});