$(document).ready(function() {


	var isRetina = window.devicePixelRatio > 1 ? true : false;
	var isMobile = (screen.width < 768) ? true : false;

 	$("#content, #content-mobile").fitVids();

 	if (isMobile){
 		$("#dl-menu").dlmenu();
 	}



    $('.more ul').height($(".more").height());


	 


	 $("a[rel^='prettyPhoto']").prettyPhoto({
	 	animation_speed: 'fast', /* fast/slow/normal */
	 	slideshow: 5000, /* false OR interval time in ms */
	 	autoplay_slideshow: false, /* true/false */
	 	opacity: 0.80, /* Value between 0 and 1 */
	 	show_title: false, /* true/false */
	 	allow_resize: true, /* Resize the photos bigger than viewport. true/false */
	 	allow_expand: false,
	 	default_width: 853,
	 	default_height: 480,
	 	counter_separator_label: '/', /* The separator for the gallery counter 1 "of" 2 */
	 	theme: 'dark_square', /* light_rounded / dark_rounded / light_square / dark_square / facebook */
	 	horizontal_padding: 20, /* The padding on each side of the picture */
	 	hideflash: false, /* Hides all the flash object on a page, set to TRUE if flash appears over prettyPhoto */
	 	wmode: 'opaque', /* Set the flash wmode attribute */
	 	autoplay: true, /* Automatically start videos: True/False */
	 	modal: false, /* If set to true, only the close button will close the window */
	 	overlay_gallery: true, /* If set to true, a gallery will overlay the fullscreen image on mouse over */
	 	keyboard_shortcuts: true, /* Set to false if you open forms inside prettyPhoto */
	 	ie6_fallback: true,
	 	deeplinking: false,
	 	social_tools: ''
	 });
	 


	$('ul.main-menu').supersubs({
	  minWidth:    12,   
	  maxWidth:    35,   
	  extraWidth:  1
	}).superfish({
		delay:       200,                           
		animation:   {opacity:'show',height:'show'}, 
		animationOut:  {opacity:'hide'},
		speed:       'normal',                         
		cssArrows:  true  
	});
	


	if (!isMobile){
	$('#slides').slidesjs({
		width: 1280,
		height: 421,
		pagination: {
		   active: false
		},
		navigation: {
	       active: false
	    },
		play: {
		 active: true,
		 auto: true,
		 interval: 5000,
		 swap: true,
		 pauseOnHover: true,
		 restartDelay: 2500
		},
		effect: {
		 slide: {
		  speed: 1400
		 },
		 fade: {
		  speed: 450,
		  crossfade: true
		 }
		}
	});
	};

	if (isMobile){
	 $('#slides-mobile').slidesjs({
	    width: 1280,
	    height: 421,
	    pagination: {
	        active: false
	    },
	    navigation: {
	       active: false
	    },
	    play: {
	      active: true,
	      auto: true,
	      interval: 5000,
	      swap: true,
	      pauseOnHover: true,
	      restartDelay: 2500
	    },
	    effect: {
	     slide: {
	      speed: 1400
	     },
	     fade: {
	      speed: 450,
	      crossfade: true
	     }
	    }
	  });
	};


	if (!isMobile){

	
	};



	


});