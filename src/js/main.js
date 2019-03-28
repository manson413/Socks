window.onload = function(){
	$('.socks-slider').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		prevArrow: '<button type="button" class="slick-arrow slick-prev"><svg class="icon-sprite svg-icon"><use xlink:href="img/symbol_sprite.svg#icon-angle-left-solid"></use></svg></button>',
		nextArrow: '<button type="button" class="slick-arrow slick-next"><svg class="icon-sprite svg-icon"><use xlink:href="img/symbol_sprite.svg#icon-angle-right-solid"></use></svg></button>'
	});
};