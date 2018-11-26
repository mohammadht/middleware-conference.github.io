;(function () {

    "use strict"; // use strict to start

	/* ---------------------------------------------
	 Preeloader
	 --------------------------------------------- */
	$(window).load(function() {
	    $('.status').delay(100).fadeOut('slow');
	    $('.preloader').delay(500).fadeOut('slow');
	    $('body').delay(500).css({
	        'overflow': 'visible'
	    });
	})



	/* ---------------------------------------------
	 POPUP
	--------------------------------------------- */
	$('.popup-video').magnificPopup({
	  mainClass: 'mfp-with-zoom',
	  type: 'iframe'
	});

	$('.tab-image-pop').magnificPopup({
		mainClass: 'mfp-with-zoom',
		type: 'image'
	  });

	$('.rev-video-pop').magnificPopup({
	  mainClass: 'mfp-with-zoom',
	  type: 'iframe'
	});


	/* ---------------------------------------------
	 // HEADER AND SLIDER
	--------------------------------------------- */
	var header, bannerRevSlider;

	// Home slider height fix
	function homeSliderHeightFix() {
		$('#fullscreenhero').height( $(window).height() );
	}

	$(document).ready(function($){


	// Navigation
	$("#navigation1").navigation({
		effect: "slide"
	});

	// Sticky Nav
  	$(window).scroll(function() {
	    var scroll = $(window).scrollTop();

	    if (scroll >= 100) {
	        $("#top-nav").addClass("stick");
	    } else {
	        $("#top-nav").removeClass("stick");
	    }
	});

	// Revolution Slider
	var eventupRevSlider = $('[data-action="eventup_revslider"]'),
		eventupRevSliderArrow = {
			style : '',
			enable : false,
		};

		var eventupRevSliderBullet = {
			enable : true
		};


		eventupRevSlider.each(function () {

			var revSliderWrapID = $(this);

			if( revSliderWrapID.attr('id') == 'rev_slider_home' ) {
				eventupRevSliderBullet = {
					enable : false,
				}
			}

			if( revSliderWrapID.attr('id') == 'rev_slider_home3' ) {
				eventupRevSliderBullet = {
					enable : false,
				}
			}

			if( revSliderWrapID.attr('id') == 'rev_slider_home3' ) {
				eventupRevSliderArrow = {
					enable : true,
				}
			}

		    if( revSliderWrapID.revolution == undefined ){
		        revslider_showDoubleJqueryError(revSliderWrapID);
		    } else {

		        bannerRevSlider = revSliderWrapID.show().revolution({
		            sliderType:"standard",
		            jsFileLocation:"assets/libs/revolution/js/",
		            sliderLayout:"fullscreen",
		            responsiveLevels: [1240,1024,778,485],
		            gridwidth: [1400,1170,778,480],
		            gridheight: [800,700,1050,500],
		            delay: 6000,
		            shuffle: "off",

		            navigation: {
		                keyboardNavigation: "on",
		                onHoverStop: "off",
						arrows:{
							style: eventupRevSliderArrow.style,
							enable: eventupRevSliderArrow.enable,
							rtl:false,
							hide_onmobile:false,
							hide_onleave:true,
							hide_delay:200,
							hide_delay_mobile:1200,
							hide_under:0,
							hide_over:9999,
							tmp:'',
							left:{
								container:"slider",
								h_align:"left",
								v_align:"center",
								h_offset:30,
								v_offset:0
							},
							right:{
								container:"slider",
								h_align:"right",
								v_align:"center",
								h_offset:30,
								v_offset:0
							}
						},
		                bullets: {
		                    style: "",
		                    enable: eventupRevSliderBullet.enable,
		                    hide_onmobile: false,
		                    hide_onleave: false,
		                    hide_delay: 200,
		                    hide_delay_mobile: 1200,
		                    hide_under: 0,
		                    hide_over: 9999,
		                    tmp: '<span class="tp-bullet-image"></span><span class="tp-bullet-title"></span>',
		                    direction: "horizontal",
		                    space: 10,
		                    h_align: "center",
		                    v_align: "middle",
		                    h_offset: 0,
		                    v_offset: 50
		                }
		            },

		            lazyType: "none",
	            	scrolleffect: {
						blur:"off",
						maxblur:"20",
						on_slidebg:"on",
						direction:"top",
						multiplicator:"2",
						multiplicator_layers:"2",
						tilt:"10",
						disable_on_mobile:"off",
					},
					parallax: {
						type:"scroll",
						origo:"slidercenter",
						speed:400,
						levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,55],
					},
		            shadow: 0,
		            spinner: "spinner2",
		            autoHeight: "on",
		            disableProgressBar: "off",
		            hideThumbsOnMobile: "off",
		            hideSliderAtLimit: 0,
		            hideCaptionAtLimit: 0,
		            hideAllCaptionAtLilmit: 0,
		            debugMode: false,
		            fallbacks: {
		                simplifyAll: "off",
		                nextSlideOnWindowFocus: 'off',
		                disableFocusListener: false
		            }
		        });

		    }
		});


	    // Speaker Gallery
	    $('#speaker-gallery').cubeportfolio({
	        filters: '',
	        loadMore: '#loadMore-speaker',
	        loadMoreAction: 'click',
	        layoutMode: 'grid',
	        mediaQueries: [{
	            width: 1500,
	            cols: 3
	        }, {
	            width: 1100,
	            cols: 3
	        }, {
	            width: 800,
	            cols: 3
	        }, {
	            width: 480,
	            cols: 2,
	            options: {
	                caption: ''
	            }
	        }, {
	            width: 320,
	            cols: 1,
	            options: {
	                caption: ''
	            }
	        }],
	        defaultFilter: '*',
	        animationType: 'rotateSides',
	        gapHorizontal: 10,
	        gapVertical: 10,
	        gridAdjustment: 'responsive',
	        caption: '',
	        displayType: 'sequentially',
	        displayTypeSpeed: 100,

	        // lightbox
	        lightboxDelegate: '.cbp-lightbox',
	        lightboxGallery: true,
	        lightboxTitleSrc: 'data-title',
	        lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',

	        // singlePageInline
	        singlePageInlineDelegate: '.cbp-singlePageInline',
	        singlePageInlinePosition: 'below',
	        singlePageInlineInFocus: true,
	        singlePageInlineCallback: function(url, element) {
	            // to update singlePageInline content use the following method: this.updateSinglePageInline(yourContent)
	            var t = this;

	            $.ajax({
	                    url: url,
	                    type: 'GET',
	                    dataType: 'html',
	                    timeout: 30000
	                })
	                .done(function(result) {

	                    t.updateSinglePageInline(result);

	                })
	                .fail(function() {
	                    t.updateSinglePageInline('AJAX Error! Please refresh the page!');
	                });
	        },
	    });

	    // Gallery
	    $('#eventup-gallery').cubeportfolio({
	        loadMore: '#eventup-gallery-loadMore',
	        loadMoreAction: 'click',
	        layoutMode: 'mosaic',
	        sortToPreventGaps: true,
	        mediaQueries: [{
	            width: 1500,
	            cols: 5
	        }, {
	            width: 1100,
	            cols: 4
	        }, {
	            width: 800,
	            cols: 3
	        }, {
	            width: 480,
	            cols: 2,
	            options: {
	                caption: ''
	            }
	        }, {
	            width: 320,
	            cols: 1,
	            options: {
	                caption: ''
	            }
	        }],
	        defaultFilter: '*',
	        animationType: 'quicksand',
	        gapHorizontal: 0,
	        gapVertical: 0,
	        gridAdjustment: 'responsive',
	        caption: 'zoom',
	        displayType: 'sequentially',
	        displayTypeSpeed: 100,

	        // lightbox
	        lightboxDelegate: '.cbp-lightbox',
	        lightboxGallery: true,
	        lightboxTitleSrc: 'data-title',
	        lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',
	    });


	    $('#eventup-testimonialsTwoWrap').cubeportfolio({
	        layoutMode: 'slider',
	        drag: true,
	        auto: true,
	        autoTimeout: 5000,
	        autoPauseOnHover: true,
	        showNavigation: false,
	        showPagination: true,
	        rewindNav: false,
	        scrollByPage: false,
	        gridAdjustment: 'responsive',
	        mediaQueries: [{
	            width: 0,
	            cols: 1,
	        }],
	        gapHorizontal: 0,
	        gapVertical: 0,
	        caption: '',
	        displayType: 'default',
	    });

	});


    /* ---------------------------------------------
     Features Box
    --------------------------------------------- */
    $(function() {
        $('.single-upcoming-event').matchHeight();
        $('.blog-post-wrapper').matchHeight();
        $('.single-feedback .box').matchHeight();
        $('#blog-section .blog-content').matchHeight();
        $('.single-pricing').matchHeight();
        $('.price-three').matchHeight();
        $('.team-member').matchHeight();
        $('.clienttwo').matchHeight();
    });


     /* ---------------------------------------------
        Counter One
    --------------------------------------------- */
    $('#counter-section, #counter-section_2, #counter-section-3').on('inview', function(event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $(this).find('.timer').each(function () {
                var $this = $(this);
                $({ Counter: 0 }).animate({ Counter: $this.text() }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.ceil(this.Counter));
                    }
                });
            });
            $(this).off('inview');
        }
    });


    /* ---------------------------------------------- /*
        Google Map
    /* ---------------------------------------------- */
    var mapLocation = new google.maps.LatLng(24.847085,89.370848);

    var $mapis = $('#map');

    if ($mapis.length > 0) {

        var map;
        map = new GMaps({
            streetViewControl : true,
            overviewMapControl: true,
            mapTypeControl: true,
            zoomControl : true,
            panControl : true,
            scrollwheel: false,
            center: mapLocation,
            el: '#map',
            zoom: 16,
        });

        var image = new google.maps.MarkerImage('./assets/img/map-icon.png');

        map.addMarker({
            position: mapLocation,
            icon: image,
            title: 'Eventup',
            // infoWindow: {
            //     content: '<p>You Can Put Address Info Here.</p>'
            // }
        });

    }


    /* ---------------------------------------------
        Flicker & Twitter
    --------------------------------------------- */
    $('.flickr-feed').socialstream({
        socialnetwork: 'flickr',
        limit: 20,
        username: 'Mrky1',
        overlay: true,
        apikey: false
    });


	$('body').imagesLoaded();

     /* ---------------------------------------------
     One Page Navigation
     --------------------------------------------- */
    $('.main-navigation').onePageNav({
        currentClass: 'nav-active',
        changeHash: true,
    });


	 /* ---------------------------------------------
     Navigation
     --------------------------------------------- */
    $(window).resize(function () {

        "use strict";

        var ww = $(window).width();

        /* COLLAPSE NAVIGATION ON MOBILE AFTER CLICKING ON LINK */
        if (ww < 480) {
            $('.main-navigation a').on('click', function () {
                $(".navbar-toggle").click();
            });
        }
    });


})(jQuery);
