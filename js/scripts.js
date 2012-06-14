$(document).ready( function(){

  //hide iPhone chrome
  window.scroll = 0;

  var imgDir = "media/",
      imgPrefix = "img",
      imgFiletype = "jpg",
      viewData;
  
  //Hide gallery initially
  $("#gallery-container").hide();

  $.Mustache.load( "../templates/template.html")
    .done(function( data ) {
      $.getJSON( "../data.json", function(viewData){

          $.each( viewData.artists, function( i, artist ) {
            artist.artistindex = i;
             $.each( artist.artworks, function( j, artwork ) {
                artwork.artindex = j;
              });
          });


          var $container;
          console.log( $.Mustache.templates() );
          $("#gallery-container").mustache( 'gallery', viewData );

          $container = $('.mini-gallery');
          //details images
          $("a", $container).click(function(){
    
            var theArtist = viewData.artists[ +$(this).attr("data-artist") ],
                theArtwork = theArtist.artworks[ +$(this).attr("data-artwork") ],
                imgDetailsData = { artist: theArtist, artwork: theArtwork };

                $("#img-details-container").mustache("artwork", imgDetailsData, {method:"html"});
                
                $(".img-container").click(function(){
                    $(this).css("max-height", "auto");
                 });

                $(".author-details-btn").click(function(){
                  $("#author-details-container").mustache( "author", theArtist, {method: "html"});

                });
            
          });

         $("#events-container").mustache("events", viewData, {method:"html"});
      
         //$("#trailers-container").mustache("trailers", viewData.events[0], {method:"html"});
      
        $container.imagesLoaded( function(){
          $("#gallery-container").fadeIn();
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
