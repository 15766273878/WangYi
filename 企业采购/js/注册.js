window.onload=function(){
	 // 根节点  html节点
		var html=document.documentElement;
			  // 获取整个html元素在客户端设备上的宽度
			  var width=html.getBoundingClientRect().width;
			  // 将整个width均分成多少份：15  
			   html.style.fontSize=width/15+"px";
}
