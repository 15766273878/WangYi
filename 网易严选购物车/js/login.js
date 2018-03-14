//var ke=document.getElementsByClassName("ke");
//var up=document.getElementById("up");
//alert("555");
//ke[0].onmouseover=function (){
//	document.getElementsByClassName("kehu")[0].style.display="block";
//	up.className="icon-chevron-down";
//}
$(document).ready(function(){
  	$(".ke").hover(
  		function(){
  			var $div = $(".ke");
  			t=setInterval(function(){$(".kehu").slideDown(500)},200);
			up.className="icon-chevron-down";
  		},
  			function(){
  				clearInterval(t);
  				$(".kehu").slideUp(500),
				up.className="icon-chevron-up";}
  	);
  	
  	
  	
  	$("#app").hover(
  		function(){
  		var $div = $("#app");
  		t=setInterval(function(){$(".app").fadeIn(500)},200);
  		},
  		function(){
  			clearInterval(t);
  			$(".app").fadeOut(500);
  		} 

  	);
  	
  	
  	$("#fk1").click(function(){
	$(".tan").fadeIn(800);
	});
	$("#off").click(function(){
	$(".tan").fadeOut(800);
	});
	
	
//	$(".ju1").hover(
//		function(){
//		var $div = $(".ju1");
//		t=setInterval(function(){$(".jb1").fadeIn(300)},250);
//		},
//		function(){
//			clearInterval(t);
//			$(".jb1").fadeOut(300);
//		} 
//	);
//	$(".ju2").hover(
//		function(){
//		var $div = $(".ju2");
//		t=setInterval(function(){$(".jb2").fadeIn(300)},250);
//		},
//		function(){
//			clearInterval(t);
//			$(".jb2").fadeOut(300);
//		} 
//	);
	
//	$(".ju").hover(
//		function(){$(".ju_box").fadeIn(300)},
//		function(){$(".ju_box").fadeOut(200)}
//		);
});



//ke[0].onmouseout=function (){
//	document.getElementsByClassName("kehu")[0].style.display="none";
//	up.className="icon-chevron-up";
//}


//var ju=document.getElementsByClassName("ju");
//for(var i=0;i<ju.length;i++){
//	
//ju[i].onmouseover=function show(){
//	this.getElementsByTagName("ul")[0].style.display="block";
//}
//ju[i].onmouseout=function hide(){
//	this.getElementsByTagName("ul")[0].style.display="none";
//}
//}



 function check(){
 	if(isUse&&isPwd){
		return true;
	}
 	else{
		return false;
	}
 }
var ju=document.getElementsByClassName("ju");
for(var i=0;i<ju.length;i++){
	ju[i].onmouseover=function(){
		this.getElementsByClassName("ju_box")[0].style.display="block";
	}
}
for(var i=0;i<ju.length;i++){
	ju[i].onmouseout=function(){
		this.getElementsByClassName("ju_box")[0].style.display="none";
	}
}
var sou=document.getElementById("sou");
var more=document.getElementsByClassName("search_more")[0];
sou.onclick=function(){
	more.style.display="block";
}
sou.onblur=function(){
	more.style.display="none";
}

var ss1=document.getElementsByClassName("sp1")[0];
var ss2=document.getElementsByClassName("sp1")[1];
ss1.onclick=function(){
	use.value="";
	ss1.style.display="none";
}
ss2.onclick=function(){
	pwd.value="";
	ss2.style.display="none";
}