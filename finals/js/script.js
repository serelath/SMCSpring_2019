$(document).ready(function() {
	
// shop nav
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
	
// shop nav end
	
// cart
$('.cart-btn').click(function() {
	$('.popup').addClass('popupIn');
	$('.popupbg').addClass('popupIn');
});
$('.popupbg').click(function() {
	$('.popup').removeClass('popupIn').addClass('popupOut');
	$('.popupbg').removeClass('popupIn').addClass('popupOut');
	setTimeout(function(){ 
		$('.popup').removeClass('popupOut');
	$('.popupbg').removeClass('popupOut'); }, 200);
});
})