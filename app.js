$(function() {
	let header = $("#header");
	let intro = $("#intro");
	let intro_Hight = intro.innerHeight();
	let scroll_Posion = $(window).scrollTop();

	$(window).on("scroll load resize", function() {
		let intro_Hight = intro.innerHeight();

		scroll_Posion = $(this).scrollTop();
		
		if( scroll_Posion >= intro_Hight ) {
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");

		}
	});
});