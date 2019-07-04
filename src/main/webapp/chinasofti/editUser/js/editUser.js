var userid=0;
$(document).ready(function () {
	users_edit()
});



function users_edit(){
	$.ajax({
		url:"searchuser1.do",
		data:"id="+$("#userid").val().trim(),
		type:"POST",
		success:function(result){
			var data=result.obj.user;
			$("#editTrueName").val(data.truename);
			$("#editEmail").val(data.email);
			$("#editPhone").val(data.phone);
			$("#editAddress").val(data.address);
		}
	})
}


function edtiUserCheck(){
	var trueName=$("#editTrueName").val().trim();
	var email=$("#editEmail").val().trim();
	var phone=$("#editPhone").val().trim();
	var address=$("#editAddress").val().trim();
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
	$.ajax({
		url:"editUser.do",
		data:{
			"id":$("#userid").val().trim(),
			"truename":trueName,
			"email":email,
			"phone":phone,
			"address":address
		},
		type:"POST",
		success:function(result){
			  $.MsgBox.Alert("消息","修改成功");
		}
	})
}






