$(document).ready(function(){
	switchHeader()

	//thx to: https://qna.habr.com/q/88507
	$("body").on('click', '[href*="#"]', function(e){
		var fixed_offset = $("header").height();
		$('html,body')
			.stop()
			.animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 500);

		e.preventDefault();
	});

	//thx to: https://webkab.ru/prokrutka-stranicy-jquery-uznat-polozhenie/
	//thx to: https://qna.habr.com/q/215411
	//https://webkab.ru/dejstvie-pri-poyavlenii-elementa-na-ekrane-jquery/
	var windowHeight = $(window).height();

	$(window).on("scroll", function() {
    	switchHeader();	
    });
})

function switchHeader() {
	if ($(window).scrollTop() > 50) {
		$('header').addClass('green');
	}
	else {
		$('header').removeClass('green');
	}
}