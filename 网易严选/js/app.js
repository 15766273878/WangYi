var email=document.getElementById("email");
var p=document.getElementsByClassName("mess")[0];
var pass=document.getElementById("pass");
//if(email.value.length==0)
//{
//	email.nextElementSibling.style.display="block";
//}
var isEmail=false;
var isPass=false;
email.onblur=function(){
	if(email.value.length==0)
	{
		p.innerText="请输入账号";
		isEmail=false;
	}else{
	email.nextElementSibling.style.display="block";
	p.innerText="";
	isEmail=true;
	}
	check();
}
pass.onblur=function(){
	if(pass.value.length==0)
	{
		p.innerText="请输入密码";
		isPass=false;
	}else{
	pass.nextElementSibling.style.display="block";
	p.innerText="";
	isPass=true;
	}
	check();
}
var btn=document.getElementsByClassName("btn");
var divL=document.getElementsByClassName("lun")[0];
for(var i=0;i<btn.length;i++)
{
	btn[i].onclick=function(){
	divL.style.display="none";
}
}



var clearE=document.getElementsByClassName("x")[0];
var clearP=document.getElementsByClassName("x1")[0];
clearE.onclick=function(){
	email.value="";
	email.nextElementSibling.style.display="none";
	isEmail=false;
	check();
}
clearP.onclick=function(){
	pass.value="";
	pass.nextElementSibling.style.display="none";
		isPass=false;
	check();
}
function check(){
	if(isEmail&&isPass){
		document.getElementById("sb").style.color="white";
		return true;
	}else{
		document.getElementById("sb").style.color="#cb7a7a";
		return false;
	}
}


$('.lun').Marquee({
				distance: 750, //一次滚动的距离
				// 		duration:20,//缓动效果，单次移动时间，越小速度越快，为0时无缓动效果
				time: 3, //停顿时间，单位为秒
				direction: 'left', //滚动方向，'left','right','up','down'
			});
			
var bt1=document.getElementById("bt1");
var All=document.getElementsByClassName("All")[0];
bt1.onclick=function(){
	All.style.display="none";
}
setTimeout(function(){
	$(".All").fadeOut(500);
},4000)

