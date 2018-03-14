window.onload=function(){
	var html=document.documentElement;
	var width=html.getBoundingClientRect().width;
	html.style.fontSize = width/15+ "px";
}
