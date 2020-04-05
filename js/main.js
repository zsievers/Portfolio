//////////////////////////////////////////////////////  //
//    EVENTS ON DOCUMENT READY                          //
//////////////////////////////////////////////////////  //

$(document).ready(function () {
    "use strict";

    ////  PRELOADING
	$(window).on('load', function(){
        $(".preloader-wrap").fadeOut(500); 
    })
    

    //// COLLAPSED MENU CLOSE ON CLICK
    $(document).on('click', '.navbar-collapse.in', function (e) {
        if ($(e.target).is('a')) {
            $(this).collapse('hide');
        }
    });

    //// FIXED NAVBAR
    $(window).scroll(function() {
        if ($(window).scrollTop() > 50) {
            $('.navbar').addClass('fixed');
        } else {
            $('.navbar').removeClass('fixed');
        }
    });

    /// Typed JS TRIGGER
	$(".s-header .middle-l h3 span").typed({
		strings: ["Web Designer", "UI/UX  Developer", "Husband", "Dog Dad"],
		loop: true,
		startDelay: 1e3,
		backDelay: 3e3
	});

	//// COUNT TO TRIGGER
	var eventFired = false,
        objectPositionTop = $('.facts').offset().top;
    $(window).on('scroll', function () {
        var currentPosition = $(document).scrollTop() + 400;
        if (currentPosition >= objectPositionTop && eventFired === false) {
            eventFired = true;
            $(".count").countTo({
                speed: 5000,
                refreshInterval: 80
            });
        }
    });

	//// ISOTOPE TRIGGER
	var $grid = $('.portfolio-content').isotope({
	  itemSelector: '.portfolio-item',
	  stagger: 30
	});
	$('.filter-portfolio').on( 'click', '.button', function() {
	  var filterValue = $(this).attr('data-filter');
	  $grid.isotope({ filter: filterValue });
	});
	// change is-checked class on buttons
	$('.button-group').each( function( i, buttonGroup ) {
	  var $buttonGroup = $( buttonGroup );
	  $buttonGroup.on( 'click', 'a', function() {
	    $buttonGroup.find('.is-checked').removeClass('is-checked');
	    $( this ).addClass('is-checked');
	  });
	});

	//// MASONRY
	$('.portfolio-content').isotope({
	  itemSelector: '.portfolio-caption img',
	  masonry: {
	    columnWidth: 0
	  }
	});
  
    //// MAGNIFIC POPUP TRIGGER
	$('.ss-pic').magnificPopup({
	  type: 'image'
	});

    //// PARSLEY TRIGGER
	$('.contact-forum').parsley();
	
    //// SCROLL SPY TRIGGER
 	$('body').scrollspy({
            target: '.navbar-collapse',
            offset: 195
    });

   	//// SMOTH SCROLL
    $.scrollIt({
        topOffset: -80
    });


});