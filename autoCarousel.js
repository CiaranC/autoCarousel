
		var autoCarousel = function(){
			if($('.autoCarousel').length > 0){

				var slides = [];
				$('.autoCarousel img').each(function(){
					slides.push($(this));
				});

				var counter = 0;
				var sliderFinished = false;
				var changeSlide = setInterval(function(){
					if (counter === slides.length-1) {
							slides[counter].fadeOut(1000);
							slides[0].fadeIn(1000);
							counter = 0;
					}else{
						slides[counter+1].fadeIn(1000);
						slides[counter].fadeOut(1000);
						counter++;
					}
				},5000);//time between slides
			}
		};autoCarousel();