$(function() {
	let header = $("#header");
	let intro = $("#intro");
	let intro_Hight = intro.innerHeight();
	let scroll_Posion = $(window).scrollTop();

	// Fixed Header
	$(window).on("scroll load resize", function() {

		scroll_Posion = $(this).scrollTop();
		
		if( scroll_Posion >= intro_Hight ) {
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		};

	});	
		// Smooth Scroll
	$("[data-scroll]").on("click", function(event) {
		event.preventDefault();

		let block_ID = $(this).data("scroll");
		let block_Offset = $(block_ID).offset().top;

	$("html, body").animate({
		scrollTop: block_Offset - 75
	}, 550);
		
	});

});