function adminSubPassword(){
	var newPassword=$("#newPassword").val();
	var newPasswordCon=$("#newPasswordCon").val()
	var oldPassword=$("#oldPassword").val()
	if(typeof (newPassword) == 'undefined' || newPassword.trim()==""  ){
		$("#tishi").html("新密码不能为空");
		return;
	}

	if(typeof (newPasswordCon) == 'undefined' || newPasswordCon.trim()==""){
		$("#tishi").html("确认密码不能为空");
		return;
	}
	if(newPassword.trim()!=newPasswordCon.trim()){
		$("#tishi").html("新密码与确认密码必须保持一致");
		return;
	}
	
	if(typeof (oldPassword) == 'undefined' || oldPassword.trim()==""  ){
		$("#tishi").html("当前密码不能为空");
		return;
	}
	
	$.ajax({
		url:"editadminPwd.do",
		data:{
			"id":$("#adminid").val().trim(),
			"loginpwd":newPassword
		},
		type:"POST",
		success:function(){
			window.parent.location.replace("adminlogin.jsp");
		}
	})
}
function userSubPassword(){
	
	var newPassword=$("#newPassword").val();
	var newPasswordCon=$("#newPasswordCon").val()
	var oldPassword=$("#oldPassword").val()
	
	
	if(typeof (newPassword) == 'undefined' || newPassword.trim()==""  ){
		$("#tishi").html("新密码不能为空");
		return;
	}

	if(typeof (newPasswordCon) == 'undefined' || newPasswordCon.trim()==""){
		$("#tishi").html("确认密码不能为空");
		return;
	}
	if(newPassword.trim()!=newPasswordCon.trim()){
		$("#tishi").html("新密码与确认密码必须保持一致");
		return;
	}
	
	if(typeof (oldPassword) == 'undefined' || oldPassword.trim()==""  ){
		$("#tishi").html("当前密码不能为空");
		return;
	}
	$.ajax({
		url:"edituserPwd.do",
		data:{
			"id":$("#userid").val().trim(),
			"loginpwd":newPassword
		},
		type:"POST",
		success:function(){
			window.parent.location.replace("userlogin.jsp");
		}
	})
}
