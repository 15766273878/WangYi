//客户服务隐藏模块的实现
//HTML和JS代码完全分离
//用JS来给元素添加鼠标事件onmouseover() onmouseout()
var father=document.getElementById("father");
father.onmouseover=function(){
	document.getElementById("son").style.display='block';
}
father.onmouseout=function(){
	document.getElementById("son").style.display='none';
}
var father1= document.getElementById("father1"); // div中id为father的对象
		 //给某个元素加事件
		 father1.onmouseover=function (){
		   	document.getElementById('son1').style.display='block'
		   }
		 father1.onmouseout= function (){
		  	document.getElementById('son1').style.display='none'
		  }
		  