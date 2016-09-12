//This function is executed when the submit button is clicked
function appendNumbers(){
	//Enable roll lottery button
    document.getElementById("button_roll").disabled = false;
	
	//MAX NUMBER IS 84, otherwise the page formats gets ruined
	var max = $('#txt_number').val(); //
	
	if(max >100){
		alert("This number is too big");
		return;
	}
	
	var counter = 0;
	
	$('.number_box').remove();
	$('br').remove();
	for(i=1;i<=max;i++){
		counter++;
		$('#main').append("<div class='number_box'> <span class='number' id='"+i+"'>" + i + " </span></div>");
		if(counter%24== 0)
			$('#main').append("</br>");
	}
}

//This function is executed when the 'Roll lottery' button is clicked
function rollLottery(){
	var max = $('#txt_number').val();
	var num = getRandom(5,5);
	var num_id = 0;
			
	for(i=0; i<5;i++){
		num_id = Math.floor(getRandom(1, max));
	
		changeColor("#" + num_id, "red" );
	
		setInterval(changeColor, 1500, "#" + num_id, "white" );
		
	}
	
	num_id = Math.floor(getRandom(1, max));
	changeColor("#" + num_id,"red");
	
	setTimeout(printMessage, 3000, num_id + " is the winner!");

}

function printMessage(message){
		alert(message);
}

function changeColor(id, color){
	$(id).parent().css("background-color", color);
}


function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}