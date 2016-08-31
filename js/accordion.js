$(function(){
	var dom = document.getElementsByClassName("accordion");

	for (i = 0; i < dom.length; i++) {
		dom[i].onclick = function(){
			this.classList.toggle("active");
			this.nextElementSibling.classList.toggle("show");
		}
	}
})
