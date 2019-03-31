$(document).ready(function(){

	new WOW().init();
	
	$('.socks-slider').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		prevArrow: '<button type="button" class="slick-arrow slick-prev"><svg class="icon-sprite svg-icon"><use xlink:href="img/symbol_sprite.svg#icon-angle-left-solid"></use></svg></button>',
		nextArrow: '<button type="button" class="slick-arrow slick-next"><svg class="icon-sprite svg-icon"><use xlink:href="img/symbol_sprite.svg#icon-angle-right-solid"></use></svg></button>',
		responsive: [
		{
			breakpoint: 1299,
			settings: {
				slidesToShow: 3
			}
		},
		{
			breakpoint: 991,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				arrows: false,
				dots: true
			}
		}
		]
	});

	$('.send-contacts-btn').click(function(){

		$('.input-block').removeClass('error');

		var formId = $(this).closest('form').attr('id');
		var str = $('#'+formId).serialize();
		var formArr = $('#'+formId).serializeArray();
		var errorCounter = 0;
		for(var key in formArr){
			if(formArr[key].value === ''){
				errorCounter++;
				$('#'+formId+' input[name='+formArr[key].name+']').parent().addClass('error');
			}
		}
		if(errorCounter === 0 && formArr === 0){
			sendAjaxForm(str, 'send.php');
		}
		return false;
	});

//hide preloader
$('.preloader-wrapper').fadeOut(100);
$('body').removeClass('fixed');

});

function sendAjaxForm(data, url, formId){
	$.ajax({
		url: url,
		type: "POST",
		dataType: "text",
		data: data,
		success: function(result) {
			$('#'+formId)[0].reset();
			if($('#'+formId).closest('.modal')){
				var modalId = $('#'+formId).closest('.modal').attr('id');
				$('#'+modalId).modal('hide');
			}
			$('#thanks-modal').modal('show');
		},
		error: function() {
			console.log('Ошибка. Данные не отправлены.');
		}
	});
}