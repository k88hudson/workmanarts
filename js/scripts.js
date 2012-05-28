$(document).ready( function(){

	//hide iPhone chrome
	window.scroll = 0;

	var $container = $('.mini-gallery'),
			imgDir = "media/",
			imgPrefix = "img",
			imgFiletype = "jpg";

	$container.hide();	

	//details images
	$(".mini-gallery a").click(function(){
		$("#img-details #big-img").attr("src", imgDir + imgPrefix + $(this).attr("for") + "." + imgFiletype );
	});

	//isotope
	(function(){
		
		$container.fadeIn();
		$container.imagesLoaded( function(){
	    $container.isotope({
	      itemSelector: 'li'
	    });

		  // update columnWidth on window resize
			$(window).smartresize(function(){
			  $container.isotope({
			    masonry: { columnWidth: $container.width() / 3 }
			  });
			});

			//Reload on page load
			$('#home').live('pageshow', function () {
			 		$container.isotope( "reLayout" );
			});

	  });	

	}()); //isotope

});