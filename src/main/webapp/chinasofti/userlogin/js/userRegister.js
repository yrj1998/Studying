function addUserCheck(){
	var loginName=$("#addLoginName").val().trim();
	var loginPwd=$("#addLoginPwd").val().trim();
	var trueName=$("#addTrueName").val().trim();
	var email=$("#addEmail").val().trim();
	var phone=$("#addPhone").val().trim();
	var address=$("#addAddress").val().trim();
	if(loginName==""){
		$("#tishi").html("用户名不能为空");
		return;
	}
	if(loginName.length>20){
		$("#tishi").html("菜名最多20个字符");
		return;
	}
	
	if(loginPwd==""){
		$("#tishi").html("密码不能为空");
		return;
	}
	if(loginPwd.length>6){
		$("#tishi").html("密码最多6位");
		return;
	}
	
	if(trueName==""){
		$("#tishi").html("真实姓名不能为空");
		return;
	}
	if(trueName.length>20){
		$("#tishi").html("真实姓名做多20个字节");
		return;
	}
	
	if(email.trim()==""){
		$("#tishi").html("电子邮箱不能为空");
		return;
	}

	var str=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
	if(!str.test(email)){
		$("#tishi").html("电子邮箱格式不正确");
		return;
	}
	
	if(phone.trim()==""){
		$("#tishi").html("手机号码不能为空");
		return;
	}
	
	var str=/^(13[0-9]|14[0-9]|15[0-9]|18[0-9])\d{8}$/i;
	if(!str.test(phone)){
		$("#tishi").html("手机号码格式不正确");
		return;
	}
	
	if(address.trim()==""){
		$("#tishi").html("送餐地址不能为空");
		return;
	}
	if(trueName.length>20){
		$("#tishi").html("送餐地址做多50个字节");
		return;
	}
	
	  $.MsgBox.Alert("消息","注册成功请关闭本窗口进行登录！");

}