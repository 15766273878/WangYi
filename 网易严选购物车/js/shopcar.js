//获取点击展开卡后图片的选中
var imgs=document.getElementsByClassName("choose_img");
var mores=document.getElementsByClassName("shop_color");
var oks=document.getElementsByClassName("ok");
//点开选项卡的更多次数
var more_times=0
//点击选项卡中图片的次数
var choose_times=0;

//选项卡中图片的点击事件
for(var i=0;i<imgs.length;i++){
	imgs[i].onclick=function(){
		
		if(choose_times%2==0){
			this.style.borderColor="#ba9a5c";
		    this.nextElementSibling.style.display="block";
		    this.parentElement.nextElementSibling.style.background="#c0ae8a";
		}
		else{
			this.style.borderColor="#dddddd";
		    this.nextElementSibling.style.display="none";
		    this.parentElement.nextElementSibling.style.background="#cccccc";
		}
		choose_times++;
	}
}

//选项卡的点击事件
for(var i=0;i<mores.length;i++){
	mores[i].onclick=function(){
		document.getElementsByClassName("choose_img2")[0].style.border="#dddddd";
		document.getElementsByClassName("choose_img2")[0].nextElementSibling.style.display="none";
		if(more_times%2==0){
			this.nextElementSibling.style.display="block";
		}
		else{
			this.nextElementSibling.style.display="none";
			
		}
		more_times++;
	}
}

for(var i=0;i<mores.length;i++){
	oks[i].onclick=function(){
		this.parentElement.style.display="none";
}
}
var twoImg=document.getElementById("music_erji").getElementsByTagName("img");
for(var i=0;i<twoImg.length;i++){
	twoImg[i].onclick=function(){
		var Tag=this.title;
		for(var j=0;j<twoImg.length;j++){
			twoImg[j].style.border="1px solid #dddddd";
			twoImg[j].nextElementSibling.style.display="none";
		}
		this.style.border="1px solid #ba9a5c";
		this.nextElementSibling.style.display="block";
		document.getElementById("text_change").innerText=Tag;
		if(Tag=="红色"){
			document.getElementsByClassName("second_li")[1].getElementsByTagName("img")[0].src="img/erji_red_big.png";
		}
		else{
			document.getElementsByClassName("second_li")[1].getElementsByTagName("img")[0].src="img/erji.png";
		}
	}
}

//删除的获取
var dels=document.getElementsByClassName("delete");
for(var i=0;i<dels.length;i++){
	dels[i].onclick=function(){
		if(confirm("您确定要删除吗？")){
			var ul=this.parentElement.parentElement;
		    ul.parentElement.removeChild(ul);
		}
	}
}
var del_alls=document.getElementsByClassName("delete_all");
for(var i=0;i<del_alls.length;i++){
	del_alls[i].onclick=function(){
		if(confirm("您确定要删除？")){
		for(var j=0;j<goods.length;j++){
			if(goods[j].checked==true){
				var ul=goods[j].parentElement.parentElement;
				ul.parentElement.removeChild(ul);
				j--;
			}
		}
	}
		allcheck.checked=false;
		for(var i=0;i<allcheck_bottom.length;i++){
			allcheck_bottom[i].checked=false;
		}
		countMoney();
		changeStyle();
  }
}
//数量加减的执行
var adds=document.getElementsByClassName("plus");
var minus=document.getElementsByClassName("minus");
for(var i=0;i<adds.length;i++){
	adds[i].onclick=function(){
		var inputTag=this.previousElementSibling;
		var inputValue=inputTag.value;
		if(inputValue>=50){
			alert("单品已达上限")
			return;
		}
		inputValue++;
		inputTag.value=inputValue;
		var strPrice=this.parentElement.previousElementSibling.innerText;
	    var price=parseFloat(strPrice.substr(1));
	    var money=price * inputValue;
	    var Moneyli=this.parentElement.nextElementSibling;
	    var label=Moneyli.getElementsByClassName("money")[0];
	    label.innerHTML=money.toFixed(2);
	    
	    countMoney();
	    enough();
	    changeStyle();
	}
}

for(var i=0;i<adds.length;i++){
	minus[i].onclick=function(){
		var inputTag=this.nextElementSibling;
		var inputValue=inputTag.value;
		if(inputValue<=1){
			alert("数量最少为1")
			return;
		}
		inputValue--;
		inputTag.value=inputValue;
		var strPrice=this.parentElement.previousElementSibling.innerText;
	    var price=parseFloat(strPrice.substr(1));
	    var money=price * inputValue;
	    var Moneyli=this.parentElement.nextElementSibling;
	    var label=Moneyli.getElementsByClassName("money")[0];
	    label.innerHTML=money.toFixed(2);
	    
	    countMoney();
	    enough();
	    changeStyle();
	}
}
//全选按钮
var allcheck=document.getElementsByClassName("mycheck_all_top")[0];
var allcheck_bottom=document.getElementsByClassName("mycheck_all");
var goods=document.getElementsByClassName("mycheck");
    allcheck.onclick=function(){
	for(var i=0;i<goods.length;i++){
		goods[i].checked=this.checked;
	 }
	for(var i=0;i<allcheck_bottom.length;i++){
		allcheck_bottom[i].checked=this.checked;
	  }
	countMoney();
	enough();
	changeStyle();
	
	}
//左下角的全选
    for(var i=0;i<allcheck_bottom.length;i++){
	    allcheck_bottom[i].onclick=function(){
		allcheck.checked=this.checked;
		for(var i=0;i<goods.length;i++){
		goods[i].checked=this.checked;
	      }
	   countMoney();
	   enough();
	   changeStyle();
	   
	   }
	}

//全选反选
for(var j=0;j<goods.length;j++){
	goods[j].onclick=function(){
		//需要的事情是什么?
		var count=0;//变量 统计checked=true的数量
		for(var k=0;k<goods.length;k++){
			if(goods[k].checked==true){
				count++;
			}
		}
		//如果  每一个商品前面的input框checked=true  
		if(count==goods.length){
			//全选的按钮=true
			allcheck.checked=true;
			for(var i=0;i<allcheck_bottom.length;i++){
		        allcheck_bottom[i].checked=true;
	            }
		}else{
			allcheck.checked=false;
			for(var i=0;i<allcheck_bottom.length;i++){
		      allcheck_bottom[i].checked=false;
	        }
		}	
		//方法调用
		countMoney();
		enough();
		changeStyle();
	}
}

function countMoney(){
	var money=0.0;
	for(var i=0;i<goods.length;i++){
		if(goods[i].checked==true){
			var ul=goods[i].parentElement.parentElement;
			var labelMoney=ul.getElementsByClassName("money")[0];
			var strMoney=labelMoney.innerText;
			money=money+parseFloat(strMoney);
		}
	}
	 var totleMoney=document.getElementsByClassName("totle_money");
	 for(var i=0;i<totleMoney.length;i++){
	 	totleMoney[i].innerHTML=money;
	 }
}

function changeStyle(){
	var count=document.getElementsByClassName("pay_all");
	var length=0;
	for(var i=0;i<goods.length;i++){
		if(goods[i].checked==true){
			length++;
		}
	}
	if(length==0){
		for(var i=0;i<count.length;i++){
			count[i].style.backgroundColor="#cccccc";
		    count[i].style.cursor="not-allowed";
		}
	}else{
		for(var i=0;i<count.length;i++){
		count[i].style.backgroundColor="#b4a078";
		count[i].style.cursor="pointer";
	    }
	}
}

function enough(){
	var hadbuy=document.getElementsByClassName("totle_money")[0].innerText;
	if(hadbuy>=110){
		document.getElementById("pay_more").style.display="none";
		document.getElementById("enough").style.display="none";
		document.getElementById("yuan").innerText="已";
	}else{
		hadbuy=110-hadbuy;
		document.getElementById("enough").innerHTML=hadbuy;
		document.getElementById("enough").style.display="block";
		document.getElementById("pay_more").style.display="block";
		document.getElementById("yuan").innerText="元";
	}
	
}
