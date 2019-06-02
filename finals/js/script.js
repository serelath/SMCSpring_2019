$(document).ready(function() {
checkWinState();	

function checkWinState() {
	if($(window).width() <= 1200) {
	   $('.dropdown').click(function() {
			$('.dropdown-menu').toggle();
		});
	} else {
		$('.dropdown').hover(function() {
			$('.dropdown-menu').css('display', 'flex');
		}, function() {
			$('.dropdown-menu').css('display', 'none');
		})
	}
}
$(window).resize(function () {
    checkWinState();
});
	
})