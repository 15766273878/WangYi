$(function(){
				var index=0;//当前显示的li的下标
				var length=$(".tupian ul li").length;
				var timer=null;
				
				function startMove(){
					if(index==length-1){
						index=-1;
					}
					index++;
					$(".tupian ul li").eq(index).fadeIn().siblings().fadeOut();
					$(".list ul li").eq(index).addClass("active").siblings().removeClass("active");
				}
				//启动定时器
				timer=setInterval(startMove,2000);
				// 给左右箭头添加事件
				$(".left,.right").hover(function(){
					//console.log("index:"+index);
					clearInterval(timer);
				},function(){
					timer=setInterval(startMove,2000);
				});
				// 添加左边的点击
				$(".left").click(function(){
					index--;
					if(index==-1){
						index=length-1;
					}
					$(".tupian ul li").eq(index).fadeIn().siblings().fadeOut();
					$(".list ul li").eq(index).addClass("active").siblings().removeClass("active");
				});
				
				$(".right").click(function(){
					startMove();
				});
				//给每一个li加事件
				var tempIndex=0;
				$(".list ul li").hover(function listThis(){
					clearInterval(timer);
					console.log("1111");
					tempIndex=$(this).index();
					console.log(tempIndex);
					$(".list ul li").eq(tempIndex).addClass("active").siblings().removeClass("active");
					$(".tupian ul li").eq(tempIndex).fadeIn().siblings().fadeOut();
				},function(){
					clearInterval(timer);
					index=tempIndex;
					timer=setInterval(startMove,2000);
				});
			});