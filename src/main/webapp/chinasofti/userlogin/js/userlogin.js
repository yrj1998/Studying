var uk ="_uk_",pk="_pk_",rk="_rk_";
$(function(){
	layui.use("layer");
	$("#loginName").focus();
	$("#loginName").val($.localStorage.get(uk));
	$("#loginPwd").val($.localStorage.get(pk));
	if($.localStorage.get(rk)){
		$("#rememberPwd").attr("checked",true);
	}
});
function subLogin(){
    var $msg = $("#message"),$usrname=$("#loginName"),$pwd=$("#loginPwd"),$rememberPwd = $("#rememberPwd");
    var usrname = $usrname.val()||"";

    if(usrname.trim().length==0){
        $("#tishi").html("用户名不能为空");
        return ;
    }
    var pwd = $pwd.val()||"";
    if(pwd.trim().length==0){
    	$("#tishi").html("密码不能为空!");
        return ;
    }
    if($rememberPwd.is(':checked')){
    	$.localStorage.set(uk, usrname);
    	$.localStorage.set(pk, pwd);
    	$.localStorage.set(rk, true);
    }else{
    	$.localStorage.remove(uk);
    	$.localStorage.remove(pk);
    	$.localStorage.remove(rk);
    }
    
    $.ajax({
    	url:"userlogin.do",
    	data:{
    		"loginname":usrname,
    		"loginpwd":pwd
    	},
    	type:"POST",
    	success:function(result){
    		if(result.code==100){
    			window.location.replace("main.jsp?menuUserName="+usrname.trim()+"&admin=1");
    		}else{
    			alert("用户名或密码错误，请重新登陆");
    			window.location.replace("userlogin.jsp");
    		}
    	}
    })
}


if(window !=top){
	top.location.href=location.href;
}


