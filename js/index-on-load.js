$(document).ready(function(){
	/*var buttons;
	buttons = $('div.button');
	buttons.fadeIn(1500);*/
	//$('div.button').fadeIn(1500);
	//$('div.button').animate({height: "30px"});

	loadButtons();
})

function loadButtons(){
	/*$('#portfolio-wrapper').each(function(i){
		$(this).hide().delay(500*i).fadeIn(1500);
		//animate({height: "30px"});
	});
	
	$('button.accordion').delay(1500).fadeIn(1500);*/
	
	$('#portfolio-wrapper').children().each(function(i){
		$(this).hide().delay(400*i).fadeIn(1500);
	});	
}