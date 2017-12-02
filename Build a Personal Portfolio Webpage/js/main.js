$(window).scroll(function(){
	$currentHeight = $(window).scrollTop();
	$aboutSection = $("#scrollNav").height()
	$portfolioSection = $aboutSection + $("#about").height();
	$contactSection = $portfolioSection + $("#portfolio").height();

	if($currentHeight > $contactSection) {
		$("#contact-sec").addClass("active");
		$("#portfolio-sec").removeClass("active");
	} else if($currentHeight > $portfolioSection) {
		$("#portfolio-sec").addClass("active");
		$("#contact-sec").removeClass("active");
		$("#about-sec").removeClass("active");
	} else if($currentHeight > $aboutSection) {
		$("#about-sec").addClass("active");
		$("#portfolio-sec").removeClass("active");
	}
});
