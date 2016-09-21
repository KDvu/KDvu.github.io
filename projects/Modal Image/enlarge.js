window.onload = function(){ 
	var enlarged = document.getElementById("enlarged-image");

	var img = document.getElementById("image");
	var img2 = document.getElementById("image2");
	var caption = document.getElementById("caption");

	img.onclick = function(){
		enlarged.style.display="block";
		img2.src=this.src;
		caption.innerHTML=this.alt;
	}
	
	enlarged.onclick = function(){
		enlarged.style.display="none";
	}
};
