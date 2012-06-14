$(document).ready( function(){

	//hide iPhone chrome
	window.scroll = 0;

	var $container = $('#gallery-container'),
			imgDir = "media/",
			imgPrefix = "img",
			imgFiletype = "jpg",
			viewData;
	
	//$container.hide(); //show on imagesLoaded

	var artworks = {
		artworks: [
        {
          "src" : "Alan_Parker_toronto_island.jpg",
          "title": "Toronto Island Summer Idyl",
          "description": "",
          "medium": "oil",
          "size": "48\" x 36\"",
          "date": "2011-04-10",
          "price": "300.00"
        },
        {
          "src" : "Alan-Parker_fountain.jpg",
          "title": "Fountain",
          "description": "",
          "medium": "oil",
          "size": "36\" x 30\"",
          "date": "2010-08-19",
          "price": "300.00"
        },
        {
          "src" : "Alan-Parker-Over-Cloud-Winter.jpg",
          "title": "Over Cloud, Winter",
          "description": "",
          "medium": "oil",
          "size": "36\" x 30\"",
          "date": "2011-01-17",
          "price": "300.00"
        },
        {
          "src" : "Alan-Parker-Shining-Dawn.jpg",
          "title": "Shining Dawn",
          "description": "",
          "medium": "oil",
          "size": "48\" x 36\"",
          "date": "2011-11-10",
          "price": "300.00"
        },
        {
          "src" : "Alan-Parker-Winter-Late-Afternoon.jpg",
          "title": "Winter, Late Afternoon",
          "description": "",
          "medium": "oil",
          "size": "36\" x 30\"",
          "date": "2012-04-10",
          "price": "300.00"
        }
      ]
	};
	//Load mustchache!!!
  $.Mustache.load( "../templates/template.html")
    .done(function() {  
      $("#gallery-container").mustache( "artists", artworks );
  });

  /*
	$.Mustache.load( "../templates/template.html")
		.done(function( data ) { 	
			$.getJSON( "../data.json", function(viewData){

					$container.mustache( '#artwork', artworks, { method: 'html' } );
					//details images
					$(".mini-gallery a").click(function(){
						$("#img-details #big-img").attr("src", imgDir + imgPrefix + $(this).attr("for") + "." + imgFiletype );
					});
				});
		});
*/


	//isotope
	/*
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
*/


var sampleData = {
  "artists": [
    {
      "firstName" : "Alan",
      "lastName" : "Parker",
      "mediums" : "Oil on canvas",
      "bio": "Alan Parker began his art career with life and death at sea as his recurring subject, but he has moved on to focusing more on people and their relationships with events and other people in Canada. One thing always portrayed in all of his artworks, however, is the ocean. Parker uses many different mediums, including drawings, watercolors and prints.  He also did many monotypes, which just so happens to be our current project in class.  This is done by making one unique print by painting on a glass plate and pressing paper onto it.",
      "artworks" : [
        {
          "src" : "Alan_Parker_toronto_island.jpg",
          "title": "Toronto Island Summer Idyl",
          "description": "",
          "medium": "oil",
          "size": "48\" x 36\"",
          "date": "2011-04-10",
          "price": "300.00"
        },
        {
          "src" : "Alan-Parker_fountain.jpg",
          "title": "Fountain",
          "description": "",
          "medium": "oil",
          "size": "36\" x 30\"",
          "date": "2010-08-19",
          "price": "300.00"
        },
        {
          "src" : "Alan-Parker-Over-Cloud-Winter.jpg",
          "title": "Over Cloud, Winter",
          "description": "",
          "medium": "oil",
          "size": "36\" x 30\"",
          "date": "2011-01-17",
          "price": "300.00"
        },
        {
          "src" : "Alan-Parker-Shining-Dawn.jpg",
          "title": "Shining Dawn",
          "description": "",
          "medium": "oil",
          "size": "48\" x 36\"",
          "date": "2011-11-10",
          "price": "300.00"
        },
        {
          "src" : "Alan-Parker-Winter-Late-Afternoon.jpg",
          "title": "Winter, Late Afternoon",
          "description": "",
          "medium": "oil",
          "size": "36\" x 30\"",
          "date": "2012-04-10",
          "price": "300.00"
        }
      ]
    },
    {
      "firstName" : "Annette",
      "lastName" : "Seip",
      "mediums" : "Oil on canvas",
      "bio": "Annette Seip is an artist who uses her unique style and beliefs, and spoke out against what most people think is not appropriate or what people think women could not do.  She proved them wrong and made herself known for her outspoken personality.  She was a proud feminist and strong willed, independent person who expressed her strong beliefs through her art in a very unique way.",
      "artworks" : [
        {
          "src" : "Annette-Seip-CN-Sunset.jpg",
          "title": "CN Sunset",
          "description": "",
          "medium": "digital photo",
          "size": "30\" x 20\"",
          "date": "2011-05-20",
          "price": "150.00"
        },
        {
          "src" : "Annette-Seip-Dancing-Water.jpg",
          "title": "Dancing Water",
          "description": "",
          "medium": "digital photo",
          "size": "11\" x 14\"",
          "date": "2010-11-16",
          "price": "100.00"
        },
        {
          "src" : "Annette-Seip-Night-Rail.jpg",
          "title": "Night Rail",
          "description": "",
          "medium": "digital photo",
          "size": "30\" x 20\"",
          "date": "2011-11-27",
          "price": "150.00"
        },
        {
          "src" : "Annette-Seip-Reflecting-Pebbles.jpg",
          "title": "Reflecting Pebbles",
          "description": "",
          "medium": "digital photo",
          "size": "24\" x 16\"",
          "date": "2011-01-13",
          "price": "150.00"
        },
        {
          "src" : "Annette-Seip-Winter-Blues.jpg",
          "title": "Winter Blues",
          "description": "",
          "medium": "digital photo",
          "size": "24\" x 12\"",
          "date": "2012-04-30",
          "price": "120.00"
        }
      ]
    },
    {
      "firstName" : "Eduardo",
      "lastName" : "Hatch",
      "mediums" : "Oil on canvas",
      "bio": "Hatch's art cannot be defined or placed in any one specific category; he is at once a minimalist, an expressionist, an op-artist, a color field painter and an abstractionist. His works consist of many different colors and shapes, all of which he arranges in an intricate and delicate sequence to form an overall effect of \"pure color experience.\"",
      "artworks" : [
        {
          "src" : "Eduardo-Hatch-Gallo-Fino.jpg",
          "title": "Gallo Fino",
          "description": "",
          "medium": "acrylic and ink",
          "size": "72\" x 48\"",
          "date": "2012-04-17",
          "price": "900.00"
        },
        {
          "src" : "Eduardo-Hatch-Gallo.jpg",
          "title": "Gallo",
          "description": "",
          "medium": "acrylic and ink",
          "size": "48\" x 42\"",
          "date": "2010-03-29",
          "price": "540.00"
        },
        {
          "src" : "Eduardo-Hatch-Mujer.jpg",
          "title": "Mujer",
          "description": "",
          "medium": "acrylic and ink",
          "size": "24\" x 30\"",
          "date": "2011-11-07",
          "price": "300.00"
        },
        {
          "src" : "Eduardo-Hatch-Paisage-En-Azul.jpg",
          "title": "Paisage En Azul",
          "description": "",
          "medium": "acrylic",
          "size": "20\" x 16\"",
          "date": "2012-01-18",
          "price": "240.00"
        },
        {
          "src" : "Eduardo-Hatch-Perpetuum-Mobile.jpg",
          "title": "Perpetuum Mobile",
          "description": "",
          "medium": "acrylic and ink",
          "size": "72\" x 48\"",
          "date": "2011-02-10",
          "price": "900.00"
        }
      ]
    },
    {
      "firstName" : "Kent",
      "lastName" : "Simard",
      "mediums" : "Oil on canvas",
      "bio": "Kent Simard's style of art was mainly abstract but he did realistic works too. For medium, he used oil, water color, pencil, ink, and print. When he would draw abstract, he would paint his experiences derived from music. He'd replicate color, volume, and rhythm into his artwork to create color, interprations of music and sound, with lines circling across the page and jumping out at you.",
      "artworks" : [
        {
          "src" : "Kent-Simard-An-Eagle.jpg",
          "title": "An Eagle",
          "description": "",
          "medium": "acrylic on board",
          "size": "24\" x 20\"",
          "date": "2011-08-13",
          "price": "180.00"
        },
        {
          "src" : "Kent-Simard-Moon-and-Rings-of-the-Planet-Uranus.jpg",
          "title": "Moon and Rings of the Planet Uranus",
          "description": "",
          "medium": "acrylic on board",
          "size": "24\" x 20\"",
          "date": "2010-10-29",
          "price": "180.00"
        },
        {
          "src" : "Kent-Simard-Planet-Saturn.jpg",
          "title": "Planet Saturn",
          "description": "",
          "medium": "acrylic on board",
          "size": "24\" x 20\"",
          "date": "2011-05-18",
          "price": "180.00"
        },
        {
          "src" : "Kent-Simard-Raindrops.jpg",
          "title": "Raindrops",
          "description": "",
          "medium": "acrylic on board",
          "size": "24\" x 20\"",
          "date": "2011-12-20",
          "price": "180.00"
        },
        {
          "src" : "Kent-Simard-Solar-System.jpg",
          "title": "Solar System",
          "description": "",
          "medium": "acrylic on board",
          "size": "24\" x 20\"",
          "date": "2012-03-11",
          "price": "180.00"
        }
      ]
    },
    {
      "firstName" : "Michael",
      "lastName" : "Morbach",
      "mediums" : "Oil on canvas",
      "bio": "Michael Morbach started drawing and painting classes accompanied by his father, an enthusiastic portrait and landscape painter. During this time, Helder was included in a few group shows. After completing his education, he spent a year on the Southwest Coast of Ireland, painting and taking photos.",
      "artworks" : [
        {
          "src" : "Michael-Morbach-Diagonal.jpg",
          "title": "Diagonal",
          "description": "",
          "medium": "acrylic on canvas",
          "size": "24\" x 30\"",
          "date": "2011-04-10",
          "price": "200.00"
        },
        {
          "src" : "Michael-Morbach-Square-Still-Life.jpg",
          "title": "Still Life",
          "description": "",
          "medium": "acrylic on canvas",
          "size": "12\" x 8\"",
          "date": "2010-08-19",
          "price": "100.00"
        },
        {
          "src" : "Michael-Morbach-Still-Life-24x20.jpg",
          "title": "Still Life",
          "description": "",
          "medium": "acrylic on canvas",
          "size": "24\" x 20\"",
          "date": "2011-01-17",
          "price": "150.00"
        },
        {
          "src" : "Michael-Morbach-Still-Life-36x37.jpg",
          "title": "Still Life",
          "description": "",
          "medium": "acrylic on canvas",
          "size": "36\" x 37\"",
          "date": "2011-11-10",
          "price": "200.00"
        },
        {
          "src" : "Michael-Morbach-Untitled-1.jpg",
          "title": "Untitled 1",
          "description": "",
          "medium": "acrylic on canvas",
          "size": "54\" x 36\"",
          "date": "2012-04-10",
          "price": "300.00"
        }
      ]
    }
    

  ],
  "events": [
    {
      "title": "Rendezvous with Madness",
      "startDate": "2012-11-09",
      "endDate": "2012-11-17",
      "venue": "Workman Arts",
      "venueAddress": "651 Dufferin Street Toronto, ON",
      "ticketPrice": "$10/screening or “pay what you can” (suggested $2 minimum)",
      "description": "MENTAL ILLNESS AND ADDICTION are fundamental parts of our human experience and they have always been difficult to present and discuss in the public arena. Fear and stigma routinely make accurate representations and presentations next to impossible. The vehicle through which mental illness and addiction are most often presented publicly is mainstream film. Through these films the public can, in most instances, sit back and watch from a safe distance. Audiences are secure in the belief that they are watching the experiences of others and remain divorced from the realities of society.",
      "trailers": [
        {
          "filmTitle": "22 Mei (22nd of May)",
          "director": "Koen Mortier",
          "year": "2010",
          "country": "Belgium",
          "srcVimeo": "http://vimeo.com/15055205",
          "srcYoutube": "http://www.youtube.com/watch?v=A03HtQ5ivO8"
        },
        {
          "filmTitle": "Art Works",
          "director": "Julie Pasila",
          "year": "2011",
          "country": "Canada",
          "srcVimeo": "http://vimeo.com/35172192",
          "srcYoutube": ""
        },
        {
          "filmTitle": "Beauty Plus Pity",
          "director": "Emily Vey Duke & Cooper Battersby",
          "year": "2009",
          "country": "Canada",
          "srcVimeo": "http://vimeo.com/9111754",
          "srcYoutube": ""
        },
        {
          "filmTitle": "Blunderkind",
          "director": "Zak Mechanic",
          "year": "2011",
          "country": "USA",
          "srcVimeo": "http://vimeo.com/13306290",
          "srcYoutube": "www.youtube.com/watch?v=BQGEnlGnaK8"
        },
        {
          "filmTitle": "Collect Call",
          "director": "Christopher Mills",
          "year": "2010",
          "country": "Canada",
          "srcVimeo": "http://vimeo.com/41297666",
          "srcYoutube": "http://www.youtube.com/watch?v=LRnulrnIYgY"
        },
        {
          "filmTitle": "Distilled Love",
          "director": "Joe Kicak",
          "year": "2010",
          "country": "Canada",
          "srcVimeo": "",
          "srcYoutube": "http://www.youtube.com/watch?v=Pgg5sSHZ9-M"
        },
        {
          "filmTitle": "Exercises in Faith: Bird",
          "director": "Julieta Maria",
          "year": "2010",
          "country": "Canada",
          "srcVimeo": "",
          "srcYoutube": "http://www.youtube.com/watch?v=YYWkQeYYjNo"
        },
        {
          "filmTitle": "Finding Kind",
          "director": "Lauren Parsekian",
          "year": "2010",
          "country": "USA",
          "srcVimeo": "",
          "srcYoutube": "http://www.youtube.com/watch?v=n-TMjHX7BFo"
        },
        {
          "filmTitle": "Golden Room",
          "director": "Michael Stecky",
          "year": "2008",
          "country": "Canada",
          "srcVimeo": "",
          "srcYoutube": "http://www.youtube.com/watch?v=aur0dsYgpBQ"
        },
        {
          "filmTitle": "How to Care for Introverts",
          "director": "Leslie Supnet",
          "year": "2010",
          "country": "Canada",
          "srcVimeo": "http://vimeo.com/11757919",
          "srcYoutube": ""
        },
        {
          "filmTitle": "Isolerad (Corridor)",
          "director": "Johan Lundborg & Johan Storm",
          "year": "2010",
          "country": "Sweden",
          "srcVimeo": "",
          "srcYoutube": "http://www.youtube.com/watch?v=JyJnRsYNldc"
        },
        {
          "filmTitle": "Latzuf (Floating)",
          "director": "Inbal Gibroltert",
          "year": "2010",
          "country": "Israel",
          "srcVimeo": "",
          "srcYoutube": "http://www.youtube.com/watch?v=O0ua3zMslPQ"
        },
        {
          "filmTitle": "Monster Flu",
          "director": "Brian Wiebe",
          "year": "2010",
          "country": "USA",
          "srcVimeo": "",
          "srcYoutube": "http://www.youtube.com/watch?v=Cd1oDwbdA2U"
        },
        {
          "filmTitle": "Nowhere Elsewhere",
          "director": "Annick Blanc",
          "year": "2010",
          "country": "Canada",
          "srcVimeo": "",
          "srcYoutube": "http://www.youtube.com/watch?v=6U85oRq6R8o"
        },
        {
          "filmTitle": "People in White",
          "director": "Tellervo Kalleinen & Oliver Kochta-Kalleinen",
          "year": "2011",
          "country": "Netherlands/Finland",
          "srcVimeo": "",
          "srcYoutube": "http://www.youtube.com/watch?v=bhCVaWjldEQ"
        },
        {
          "filmTitle": "Sisters & Brothers",
          "director": "Carl Bessai",
          "year": "2011",
          "country": "Canada",
          "srcVimeo": "",
          "srcYoutube": "http://www.youtube.com/watch?v=i5OhRrmJghg"
        },
        {
          "filmTitle": "The Fire Theft",
          "director": "Isabelle Hayeur",
          "year": "2010",
          "country": "Canada",
          "srcVimeo": "http://vimeo.com/13462590",
          "srcYoutube": ""
        },
        {
          "filmTitle": "U.F.O.",
          "director": "Burkhard Fiege",
          "year": "2010",
          "country": "Germany",
          "srcVimeo": "",
          "srcYoutube": "http://www.youtube.com/watch?v=JORjr06qU_Y"
        },
        {
          "filmTitle": "Wee Requiem",
          "director": "Jenn E Norton",
          "year": "2010",
          "country": "Canada",
          "srcVimeo": "",
          "srcYoutube": "http://www.youtube.com/watch?v=ZL-MADbaojM"
        },
        {
          "filmTitle": "Yelling to the Sky",
          "director": "Victoria Mahoney",
          "year": "2011",
          "country": "USA",
          "srcVimeo": "",
          "srcYoutube": "http://www.youtube.com/watch?v=njt0muCyAdc"
        }
      ]
    },
    {
      "title": "5 in Focus",
      "startDate": "2012-05-03",
      "endDate": "2012-05-23",
      "venue": "Gladstone Hotel",
      "venueAddress": "1214 Queen West – Second Floor, Toronto, Ontario",
      "ticketPrice": "Free, Part of Scotiabank CONTACT Photography Festival",
      "description": "Five photographers turn the lens on themselves to bring into view personal and unshielded aspects of self, be they physical, emotional, psychological or spiritual. Through self-conscious self-exposure, participating artists will reveal their hidden insecurities and personal obsessions as they create a collaborative installation that aims to surge past stereotypes, exploring such questions as what and who defines a personal success or failure, mental health and when does a drive become an obsession and an obsession an addiction? A collective of five Workman Arts photographers will present individual new works responding to the theme which the group will curate within an assigned exhibition room. The project will be facilitated by Workman Arts Visual Arts Manager, Chris Mitchell.",
      "photographers": [
        {
          "filmTitle": "Yelling to the Sky",
          "director": "Victoria Mahoney",
          "year": "2011",
          "country": "USA",
          "srcVimeo": "",
          "srcYoutube": "http://www.youtube.com/watch?v=njt0muCyAdc"
        }
      ]
    },
    {
      "title": "5 in Focus",
      "startDate": "2012-05-03",
      "endDate": "2012-05-23",
      "venue": "Gladstone Hotel",
      "venueAddress": "1214 Queen West – Second Floor, Toronto, Ontario",
      "ticketPrice": "Free, Part of Scotiabank CONTACT Photography Festival",
      "description": "Five photographers turn the lens on themselves to bring into view personal and unshielded aspects of self, be they physical, emotional, psychological or spiritual. Through self-conscious self-exposure, participating artists will reveal their hidden insecurities and personal obsessions as they create a collaborative installation that aims to surge past stereotypes, exploring such questions as what and who defines a personal success or failure, mental health and when does a drive become an obsession and an obsession an addiction? A collective of five Workman Arts photographers will present individual new works responding to the theme which the group will curate within an assigned exhibition room. The project will be facilitated by Workman Arts Visual Arts Manager, Chris Mitchell.",
      "photographers": [
        {
          "firstName" : "Mark",
          "lastName" : "Belvedere",
          "website" : "http://www.markbelvedere.com",
          "bio": "Mark Belvedere is a New York-born, Toronto-based artist working in photography and mixed media. His work centres primarily on topics of spiritual, psychological and political identity, both individual and collective. Recurring themes are power and vulnerability, confidence and hesitancy, isolation and belonging, and the sway between them. Alongside his fine art practice, Mark has worked as an editorial and commercial photographer since 1999. His work has been exhibited at Gallery 44, Propeller Centre for the Visual Arts, Red Head Gallery, Scotiabank Nuit Blanche and CONTACT Photography Festival."
        },
        {
          "firstName" : "Catherine",
          "lastName" : "Jones",
          "website" : "http://www.marmiteontoast.com",
          "bio": "Catherine Jones is a Toronto-based photographer and collage artist committed to both traditional darkroom and digital techniques. Her work explores themes of trauma, memory and the body. Through the use of found text and imagery, anatomical drawings and childhood photographs, she investigates the fragmentation that is a key component of trauma and memory. She has exhibited in Toronto, Ireland and New York City."
        },
        {
          "firstName" : "Ralph",
          "lastName" : "Martin",
          "website" : "http://www.ralphmartinphotography.com",
          "bio": "Ralph Martin is Toronto born and raised, a photographer, writer, digital artist and curator. His theme is our world. He picks up stray ideas, concepts and bits of the physical world then transforms them into luminous layers, colours, tonal variation and contrast. His work encourages close study and delivers with emotional punch, subject matter twists, serene beauty and gentle humanity."
        },
        {
          "firstName" : "Marta",
          "lastName" : "McKenzie",
          "website" : "http://www.martamckenzie.com",
          "bio": "Marta McKenzie, aka Martallica, is a Toronto based artist. Her black and white drawings and photographs represent the marginalized, the poetic and transcendental and all things reflecting internal complexity. Martallica holds a BFA from York University where she studied lithography, etching and screen-printing. Her work has been displayed in galleries and spaces such as the Gladstone Hotel, Propeller Gallery, Quinn West, Sleeping Giant Gallery, F13, Starving Artist and Hart House Gallery, U. of T. As well, a short film featuring her drawings was screened in The Rendezvous with Madness Festival in 2010."
        },
        {
          "firstName" : "Annette",
          "lastName" : "Seip",
          "website" : "http://www.aseipphotography.com",
          "bio": "Annette Seip after many years in the field of science graduating with an MSc from McMaster, turned her talents to photography and digital art. Her award winning photography studies the relationship between order and chaos, isolation and connectedness, light and darkness. She has exhibited in several juried and solo art shows in Mississauga and Toronto, including Britain Street Gallery, Queen Gallery, Propeller Centre for the Visual Arts, Visual Arts Mississauga, Scotiabank Nuit Blanche, CONTACT Photography Festival, and he Royal Ontario Museum and Cooper’s Fine Art Gallery for Touched by Fire. R.M. Vaughan described Annette’s \"Ice Diamond\" in the Globe and Mail as …\"a photograph so dappled with liquid light, it could be mistaken for a Mary Pratt painting.\""
        }
      ]
    },
    {
      "title": "Mad Couture Catwalk",
      "startDate": "2012-04-13",
      "endDate": "2012-04-13",
      "startTime": "19:00",
      "endTime": "22:00",
      "venue": "Weston Family Learning Centre, Art Gallery of Ontario",
      "venueAddress": "317 Dundas Street West, Toronto, ON M5T 1G4",
      "ticketPrice": "General Public $25, AGO Members $20, Students $15",
      "description": "A unique performance and party will launch Workman Arts’ 25th Anniversary prior to the one-day symposium Extraordinary Artists: The Convergence of Art and Mental Illness in the 21st Century. This runway-style presentation of wearable couture by Workman artists will challenge norms, shift boundaries and inspire dialogue about mental illness and creativity. Ticket price includes presentation and reception. Participating artists have been selected through a formal adjudication of proposals and will be supported through professional training workshops facilitated by artist/educator Elena Soni, who is working with the artists to best showcase their practice on the garments. The presentation will engage viewers and participants in a dialogue about where art ends and functionality begins. The audience will be treated to an experimental installation/performance in the form of a fashion show. This project will challenge norms, shift boundaries, and engage dialogue about the lives of the creators predicated by mental health and addiction issues and of those who dare don a work of art rather than a garment accepted as normal. Mad Couture Catwalk will include eleven artist \"collections\" in total.",
      "photographers": [
        {
        }
      ]
    },
    {
      "title": "Being Scene",
      "startDate": "2012-05-30",
      "endDate": "2012-07-29",
      "venue": "Hart House, University of Toronto",
      "venueAddress": "7 Hart House Circle, Toronto ON",
      "ticketPrice": "Free",
      "description": "BEING SCENE is an annual juried exhibition produced by Workman Arts for the Center for Addiction and Mental Health. For over a decade, as part of its mandate, BEING SCENE has successfully introduced the general public to the work of thousands of artists who have lived experience with mental illness and addiction, presenting a cross-cultural portrait of the healing power of art in order to build a more respectful and realistic understanding of those recovering from mental illness and addiction. Since its inception in 2000 BEING SCENE has partnered with some of the city’s leading artistic and cultural figures. Among those who have been instrumental in helping BEING SCENE grow into its incredible success are the late artist and educator Lupe Rodriguez, Gillian McIntyre of the AGO, Mary Sue Rankin of the Edward Day Gallery, David Liss of MOCCA and Anna Hudson of Canadian Art. As a result BEING SCENE has evolved to occupy a significant role in Toronto’s cultural landscape, and work originally exhibited primarily on CAMH grounds has gone on to hang at other venues such as the Lieutenant Governor’s Suite at Queen’s Park in Toronto, and the National Arts Centre in Ottawa.",
      "photographers": [
        {
        }
      ]
    }
  ]
};

}); //ready
