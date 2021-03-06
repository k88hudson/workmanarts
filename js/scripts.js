$(document).ready( function(){

	//hide iPhone chrome
	window.scroll = 0;

	var $container = $('.mini-gallery'),
		imgDir = "media/",
		imgPrefix = "img",
		imgFiletype = "jpg";
	
	$container.hide(); //show on imagesLoaded

	//details images
	$(".mini-gallery a").click(function(){
		$("#img-details #big-img").attr("src", imgDir + imgPrefix + $(this).attr("for") + "." + imgFiletype );
	});

	//isotope
	(function(){
		$container.imagesLoaded( function(){
			$container.fadeIn();
		    $container.isotope({
		      itemSelector: 'li',
		      getSortData: {
				index : function( $elem ){
						var index =  $elem.find("a").attr("for")
						return index;
					}
				}
		    });

		    $container.isotope( "reLayout" );

		  	// update columnWidth on window resize
			$(window).smartresize(function(){
			  $container.isotope({
			    masonry: { columnWidth: $container.width() / 3 }
			  });
			});

			//Details
			$(".img-container .learn-more").click(function(){

			})

			//Reload on page load
			$('#home').live('pageshow', function () {
			 		$container.isotope( "reLayout" );
			});

			//Sorting buttons
			$("#ideas-btn").click(function(){
				$container.isotope({ 
					sortBy: "index"
				});
			});
			$("#skull-btn").click(function(){
				$container.isotope("shuffle");
			});
	  });	

	}()); //isotope

}); //ready