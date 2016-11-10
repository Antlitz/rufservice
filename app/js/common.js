$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});
var swiper = new Swiper('.chimneys-slider1', {
	allowSwipeToNext: false,
	allowSwipeToPrev: false,
	loop: true,
	roundLengths: true,
	slideClass: 'slide',
	wrapperClass: 'slider-wrapper',
    slidesPerView: 4,
    paginationClickable: true,
    spaceBetween: 1,
    breakpoints: {
    	992: {
    		slidesPerView: 3,
    		allowSwipeToNext: true,
			allowSwipeToPrev: true
    	},
    	740: {
    		slidesPerView: 2
    	},
    	480: {
    		slidesPerView: 1
    	}
    }
});