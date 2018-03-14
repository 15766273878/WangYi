var close=document.getElementsByClassName("close")[0];
close.onclick=function(){
	var div=close.parentElement;
	div.parentElement.removeChild(div);
}