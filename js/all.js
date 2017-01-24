$(document).ready(function(){

	// 點選至頂效果
	$('.scroll-top a').click(function(event) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop:0}, 500)
	});
})