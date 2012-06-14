$(document).ready( function(){

  //hide iPhone chrome
  window.scroll = 0;

  var $container = $('#gallery-container'),
      imgDir = "media/",
      imgPrefix = "img",
      imgFiletype = "jpg",
      viewData;
  
  $container.hide(); //show on imagesLoaded

  $.Mustache.load( "../templates/template.html")
    .done(function( data ) {  
      console.log( data );
      $.getJSON( "../data.json", function(viewData){
          console.log( $.Mustache.templates() );
          $container.mustache( 'artwork', viewData );

          //details images
          $(".mini-gallery a").click(function(){
            $("#img-details #big-img").attr("src", imgDir + imgPrefix + $(this).attr("for") + "." + imgFiletype );
          });

        $container.imagesLoaded( function(){
          $container.fadeIn();
          $container.isotope({
            itemSelector: 'li',
            getSortData: {
                index : function( $elem ){
                var index =  $elem.find("a").attr("for");
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

        });

        //Reload on page load
        $('#home').live('pageshow', function () {
            $container.isotope( "reLayout" );
        });

    
      }); //images loaded

     });
    });

});
