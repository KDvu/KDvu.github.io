$(document).ready(function(){	
	changeTabColor();
});

function openTab(content) {
    var i;
    var x = document.getElementsByClassName("tab-element");
	//Remove all the current elements shown
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
	
	//Display the elements of the selected tab
	if (content == "portfolio-wrapper"){
		document.getElementById(content).style.display = "block";
		
		//Change the background-color so the user knows what tab there are current looking at
		$(".tab#portfolio-tab").css('background-color','#F8F8FF');
		$(".tab#resume-tab").css('background-color','#B0C4DE');

		//Deactivate the portfolio tab since it is already being used
		$(".tab#portfolio-tab").unbind();
		//Reactivate the resume tab since it is not in use
		$(".tab#resume-tab").bind('click',changeTabColor);
		loadButtons();}
	else{
		document.getElementById(content).style.display = "block"; 
		
		//Same as above
		$(".tab#resume-tab").css('background-color','#F8F8FF');
		$(".tab#portfolio-tab").css('background-color','#B0C4DE');
		$(".tab#resume-tab").unbind();
		$(".tab#portfolio-tab").bind('click',changeTabColor);
	}
}

function changeTabColor(){
	$(".tab").hover(function(){
		$(this).css("background-color", "#F8F8FF");
		}, function(){
		$(this).css("background-color", "#B0C4DE");
	});
}