$(function() {

	var $window = $(window),
		$document = $(document),
		$body = $('body');




	/* about link click */

	$('.about-click').click(function(e) {
		e.preventDefault();
		$(this).toggleClass('active').find('span').fadeToggle(500);
		$('#about').slideToggle(500);
		console.log('hi');
	});


	






});