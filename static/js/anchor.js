jQuery(document).ready(function ($) {
	$('.home,.blog,.music,.movie,.me').click(function () {
		var name = $(this).attr('class');
		$('html,body').animate({
			scrollTop: $('.' + name + '-container').offset().top - 50
		}, {
			duration: 500,
			easing: "swing"
		});
	});
});