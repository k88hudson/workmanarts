$(document).ready( function(){
	var imgDir = "media/",
			imgPrefix = "img",
			imgFiletype = "jpg";

	//details images
	$(".mini-gallery a").click(function(){
		$("#img-details #big-img").attr("src", imgDir + imgPrefix + $(this).attr("for") + "." + imgFiletype );
	});

	//isotope
	(function(){
		var $container = $('.mini-gallery');
		$container.hide();
		$container.fadeIn();
		$container.imagesLoaded( function(){
	    $container.isotope({
	      itemSelector: 'li'
	    });
	  });
	}()); //isotope

});