var close=document.getElementsByClassName("close")[0];
close.onclick=function(){
	var div=close.parentElement;
	div.parentElement.removeChild(div);
}
//给复选框精灵图加上选择事件
var choose=document.getElementsByClassName("circle");
for(var i=0;i<choose.length;i++){
	choose[i].checked=false;
	choose[i].onclick=function(){
		if(this.checked==false){
			this.style.backgroundPositionY="644px";
			this.checked=true;
			countNum();
	        countMoney();
	        ifenough();
	        ifAll();
	        pay_change();
		}
		else if(this.checked==true){
			this.style.backgroundPositionY="-895px";
			this.checked=false;
			countNum();
	        countMoney();
	        ifenough();
	        ifAll();
	        pay_change();
		}
	}
}

//全选
var times=0;
var select_all=document.getElementsByClassName("select_all")[0];
select_all.onclick=function(){
	if(times%2==0){
		select_all.checked=true;
		this.style.backgroundPositionY="644px";
	}else{
		select_all.checked=false;
		this.style.backgroundPositionY="-895px";
	}
	for (var i=0;i<choose.length;i++) {
		choose[i].checked=this.checked;
	}
	times++;
	judge();
	countNum();
	countMoney();
	ifenough();
	pay_change();
}
//反全选
function ifAll(){
	var length=0;
	for(var i=0;i<choose.length;i++){
	if(choose[i].checked==true){
		length++;
	}
	if(length==choose.length){
		select_all.checked=true;
		select_all.style.backgroundPositionY="644px";
	}
	else{
		select_all.checked=false;
		select_all.style.backgroundPositionY="-895px";
	}
}
}


//通过所有按钮的bool设置打钩状态
function judge(){
	for(var i=0;i<choose.length;i++){
		if(choose[i].checked==false){
			choose[i].style.backgroundPositionY="-895px";
		}
		else{
			choose[i].style.backgroundPositionY="644px";
		}
	}
}

function countNum(){
	var totle_num=0;
	for(var i=0;i<choose.length;i++){
		if(choose[i].checked==true){
			var li=choose[i].parentElement;
			var str_num=li.getElementsByClassName("num")[0].innerText;
			var num=parseFloat(str_num);
			totle_num=totle_num+num;
		}
	}
	document.getElementById("totle_num").innerHTML=totle_num;
	document.getElementsByClassName("circle_num")[0].innerHTML=totle_num;
}

function countMoney(){
	var totle_money=0.00;
	for(var i=0;i<choose.length;i++){
		if(choose[i].checked==true){
			var li=choose[i].parentElement;
			var str_price=li.getElementsByClassName("price")[0].innerText;
			var price=parseFloat(str_price.substr(1));
			var str_num=li.getElementsByClassName("num")[0].innerText;
			var num=parseFloat(str_num);
			var money=price*num;
			totle_money=totle_money+money;
		}
	}
	document.getElementById("totle_money").innerHTML=totle_money.toFixed(2);
}

//加减按钮的实现
var less=document.getElementsByClassName("less");
for(var i=0;i<less.length;i++){
	less[i].onclick=function(){
		var inputTag=this.previousElementSibling.value;
	
		if(1<inputTag&&inputTag<=50){
			this.previousElementSibling.previousElementSibling.style.color="darkgray";
		    this.previousElementSibling.previousElementSibling.style.borderColor="darkgray";
			inputTag--;
		}
		if(inputTag<=1){
			this.previousElementSibling.value="1";
		    this.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML="1";
		    this.style.color="#eeeeee";
		    this.style.borderColor="#eeeeee";
			return
		}
		if(inputTag>50){
			this.previousElementSibling.value="50";
		    this.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML="50";
			return
		}
		this.previousElementSibling.value=inputTag;
		this.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML=inputTag;
		countNum();
	    countMoney();
	    ifenough();
	}
}

var more=document.getElementsByClassName("more");
for(var i=0;i<more.length;i++){
	more[i].onclick=function(){
		var inputTag=this.nextElementSibling.value;
		if(inputTag<1){
			this.nextElementSibling.value="1";
		    this.previousElementSibling.innerHTML="1";
			return
		}
		if(inputTag>=1&&inputTag<50){
			inputTag++;
			this.nextElementSibling.nextElementSibling.style.color="darkgray";
		    this.nextElementSibling.nextElementSibling.style.borderColor="darkgray";
		}
		if(inputTag>=50){
			this.nextElementSibling.value="50";
		    this.previousElementSibling.innerHTML="50";
		    this.style.color="#eeeeee";
		    this.style.borderColor="#eeeeee";
		    return
		}
		this.nextElementSibling.value=inputTag;
		this.previousElementSibling.innerHTML=inputTag;
		countNum();
	    countMoney();
	    ifenough();
	}
}

//判断是否满足包邮
function ifenough(){
	var totle_money=document.getElementById("totle_money").innerText;
	if(totle_money>=110){
		document.getElementById("ok").innerHTML="已";
		document.getElementById("more_enough").innerHTML="";
		document.getElementById("money").innerHTML="";
		document.getElementById("enough_tips").style.display="block";
		document.getElementById("pay_more").innerHTML="已经";
		document.getElementById("enough").innerHTML="";
		document.getElementById("yuan").innerHTML="";
	}
	if(0<totle_money&&totle_money<110){
		var more_enough_str=0.00;
		more_enough_str=110-totle_money;
		more_enough=more_enough_str.toFixed(2);
		document.getElementById("more_enough").innerHTML=more_enough;
		document.getElementById("ok").innerHTML="再购";
		document.getElementById("money").innerHTML="元";
		document.getElementById("enough_tips").style.display="block";
		document.getElementById("pay_more").innerHTML="再加";
		document.getElementById("enough").innerHTML=more_enough;
		document.getElementById("yuan").innerHTML="元";
	}
	if(totle_money==0){
		document.getElementById("enough_tips").style.display="none"
		document.getElementById("enough").innerHTML="110";
		document.getElementById("pay_more").innerHTML="再加";
		document.getElementById("yuan").innerHTML="元";
	}
}

function pay_change(){
	var checked_num=0;
	for(var i=0;i<choose.length;i++){
		if(choose[i].checked==true){
			checked_num++;
		}
	}
	if(checked_num>0){
			document.getElementById("pay").style.background="#b4282d";
			document.getElementById("delete").style.background="#b4282d";
		}
	else{
			document.getElementById("pay").style.background="#cccccc";
			document.getElementById("delete").style.background="#cccccc";
		}
}

var edit=document.getElementById("edit_button");
var edit_times=0;
edit.onclick=function(){
	if(edit_times%2==0){
		document.getElementsByClassName("edit")[0].style.display="block";
	}
	else{
		document.getElementsByClassName("edit")[0].style.display="none";
	}
	edit_times++;
}

//删除功能的实现
var del=document.getElementById("delete");
del.onclick=function(){
	for(var i=0;i<choose.length;i++){
		if(choose[i].checked==true){
			document.getElementsByClassName("warn_background")[0].style.display="block";
			document.getElementsByClassName("warnning")[0].style.display="block";
			var cancel=document.getElementsByClassName("cancel")[0];
			var del=document.getElementsByClassName("delete")[0];
			cancel.onclick=function(){
				document.getElementsByClassName("warn_background")[0].style.display="none";
			    document.getElementsByClassName("warnning")[0].style.display="none";
			}
			del.onclick=function(){
			   document.getElementsByClassName("warn_background")[0].style.display="none";
			   document.getElementsByClassName("warnning")[0].style.display="none";
			   for(var i=0;i<choose.length;i++){
		          if(choose[i].checked==true){
		          	var li=choose[i].parentElement;
		          	li.parentElement.removeChild(li);
		          	i--;
			    }
		    }
	    }
    } 
 }
}
