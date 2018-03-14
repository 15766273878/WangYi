var userName = document.getElementById("userName"); //获取用户名对象
var userPwd = document.getElementById("userPwd"); //获取密码对象
var confirmPwd = document.getElementById("confirmPwd"); //获取确认密码对象
var reg=/^1[345678]\d{9}$/;







var jianyan = document.getElementsByClassName("jianyan")[0];
//var code = document.getElementById("code");//获取验证码对象
var regExpManger = {
    userNameReg:/^([\u4e00-\u9fa5]|\w|-)+$/, //用户名正则表达式
    regNum : /\d+/,          
    regWord : /[a-zA-Z]+/,      
    regOther : /[^\da-zA-Z]+/,
    emailReg: /^\w+@\w+(\.com)+$/,
    mobilReg: /^[1]\d*$/
}

function checkUserName() {
	var span = userName.nextElementSibling.nextElementSibling;
	var v = userName.value;
	jianyan.style.display = "inline-block";
	if(v.length == 0) {
		span.innerText = "请输入用户名！";
		jianyan.style.backgroundPosition = "-390px -96px";
	} else if(v.length > 0 && v.length < 6) {
		span.innerText = "格式错误，仅支持汉字、字母、数字、-、_的组合，6-20个字符";
		jianyan.style.backgroundPosition = "-390px -96px";

	} else {
		jianyan.style.backgroundPosition = "-26px -94px";
		span.innerText = "";
	}
}
userName.onfocus = function() {
	var span = userName.nextElementSibling.nextElementSibling;
	span.innerText = "支持汉字、字母、数字、-、_组合，6-20个字符";
}
userName.onblur = checkUserName; //失去焦点

userPwd.onfocus = function() {
	var span = userPwd.nextElementSibling.nextElementSibling;
	span.innerText = "建议用数字、字母符号两种以上组合，6-20个字符";
}

var jianyan1=document.getElementsByClassName("jianyan")[1];
function checkPassword() {
	var psw = userPwd.value;
	jianyan1.style.display = "inline-block";
	var span = userPwd.nextElementSibling.nextElementSibling;
	if(psw.length==0) {
		span.innerText = "请输入密码！";
		jianyan1.style.backgroundPosition="-390px -96px";
	} else {
		/*验证密码长度和安全等级*/
		if(psw.length>=6&&psw.length<=20) {
			var level = 0;
			jianyan1.style.backgroundPosition = "-26px -94px";
			if(regExpManger.regNum.test(psw)) {
				level++;
			}
			if(regExpManger.regWord.test(psw)) {
				level++;
			}
			if(regExpManger.regOther.test(psw)) {
				level++;
			}
//			alert(level);
			switch(level) {
				case 1:
					span.innerHTML = "密码强度弱";
					break;
				case 2:
					span.innerHTML = "密码强度中";
					break;
				case 3:
					span.innerHTML = "密码强度强";
					break;
				default:
					span.innerHTML = "密码强度弱";
			}
			return true;
		} else {
			span.innerHTML = "密码长度不符合";
			return false;
		}
	}
}
userPwd.onblur = checkPassword; //失去焦点
userPwd.onkeyup = checkPassword; //按键弹起

var jianyan2=document.getElementsByClassName("jianyan")[2];
var b=false;
function confirmP(){
	var span = confirmPwd.nextElementSibling.nextElementSibling;
	var confirmValue=confirmPwd.value;
//	alert(userPwd);
	if(confirmPwd.value==""){
		jianyan2.style.display="inline-block";	
		span.innerText="您还没有输入密码";
		jianyan2.style.backgroundPosition="-390px -96px";
		b=false;
	}else if(confirmPwd.value==userPwd.value)
	{
		jianyan2.style.display="inline-block";	
		span.innerText="";
		jianyan2.style.backgroundPosition="-26px -94px";
		b=true;
		
	}else{
		jianyan2.style.backgroundPosition="-59px -94px";
		span.innerText="您两次输入的密码不一致！"
		b=false;
	}
}

confirmPwd.onblur = confirmP; //失去焦点
//confirmPwd.onkeyup = confirmP; //按键弹起

var a=false;
var mobile = document.getElementById("mobile"); //获取手机号对象
function checknNum(){
	var jianyan3=document.getElementsByClassName("jianyan")[3];
	var p=mobile.nextElementSibling.nextElementSibling;
	jianyan3.style.display = "inline-block";
	var phone=mobile.value;
	
	if (phone=='') {
        p.innerHTML="请输入手机号!";
        jianyan3.style.backgroundPosition="-390px -96px";
        a=false;
        
        
    }else if(reg.test(phone)){
//      p.style.color="green";
        p.innerHTML="";
        jianyan3.style.backgroundPosition="-26px -94px";
        document.getElementById("huoqu").style.backgroundColor="#4ba7e0";
        a=true;
        
        
    }else{
//      p.style.color="red";
        p.innerHTML="请输入正确的手机号码";
        jianyan3.style.backgroundPosition="-59px -94px";
        a=false;
    }
}
mobile.onblur=checknNum;
var dx=document.getElementById("dx");
//	alert(userName.value.length);
var zhuce=document.getElementById('zhuce');
zhuce.onclick=function all(){
	
	if(userName.value.length!=0&&userPwd.value.length!=0&&confirmPwd.value.length!=0&&mobile.value.length!=0&&dx.value.length!=0&&a&&b)
	{
//		zhuce.style.backgroundColor="red";
		return true;
	}else{
		return false;
	}
}

function checked(){
	if(userName.value.length!=0&&userPwd.value.length!=0&&confirmPwd.value.length!=0&&mobile.value.length!=0&&dx.value.length!=0&&a&&b)
	{
		zhuce.style.backgroundColor="orangered";
	}else{
		zhuce.style.backgroundColor="#df9797";
		
	}
}

userName.onkeyup=checked;
userPwd.onkeyup=checked;
confirmPwd.onkeyup=checked;
mobile.onkeyup=checked;
dx.onkeyup=checked;
