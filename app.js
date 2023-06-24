$(function() {
	let header = $("#header");
	let intro = $("#intro");
	let intro_Hight = intro.innerHeight();
	let scroll_Posion = $(window).scrollTop();
	let nav = $("#nav");
let nav_Toggle =$("#nav_toggle");

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
		nav.toggleClass("show");

	$("html, body").animate({
		scrollTop: block_Offset - 75
	}, 550);
		
	});

// Burger-Menu
$(nav_Toggle).on("click", function(event) {
	event.preventDefault();
	nav.toggleClass("show");

});

});