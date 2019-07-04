var everyPageDataCount=7;
var usersPageIndex=0;
var usersAllPage=0;
var totalRecord,currentPage;
var undifined=undifined;
var userid=0;
$(document).ready(function () {
	getUsersList(1);
});

function getUsersList(pn){
	$.ajax({
		url:"usersManageList.do",
		data:"pn="+pn,
		type:"GET",
		success:function(result){
			build_table(result);
			build_page_info(result);
			build_page_nav(result);
		}
	});
}

function build_table(result){
	$("#POST_LIST_TBODY_ID").empty();
	var userlist = result.obj.pageInfo.list;
	$.each(userlist,function(index,item){
		var loginname=$("<td></td>").append(item.loginname).attr("align","center");
		var truename=$("<td></td>").append(item.truename).attr("align","center");
		var email=$("<td></td>").append(item.email).attr("align","center");
		var phone=$("<td></td>").append(item.phone).attr("align","center");
		var address=$("<td></td>").append(item.address).attr("align","center");
		var editBtn = $("<td></td>").append($("<a></a>").append("编辑").addClass("edit").attr("edit-id",item.id).attr("style","color:blue")).append($("<a></a>").append("删除").addClass("del").attr("del-id",item.id).attr("style","color:blue")).attr("align","center");
		$("<tr></tr>").attr("bgcolor","#FFFFFF").append(loginname)
		.append(truename)
		.append(email)
		.append(phone)
		.append(address)
		.append(editBtn)
		.appendTo("#POST_LIST_TBODY_ID");
	});
}

//解析显示分页信息
function build_page_info(result){
	$("#page_info_area").empty();
	$("#page_info_area").append("当前"+result.obj.pageInfo.pageNum+"页,总"+
			result.obj.pageInfo.pages+"页,总"+
			result.obj.pageInfo.total+"条记录");
	totalRecord=result.obj.pageInfo.pages;
	currentPage = result.obj.pageInfo.pageNum;
}

function build_page_nav(result){
	//page_nav_area
	$("#page_nav_area").empty();
	var ul = $("<ul></ul>").addClass("pagination");
	//构建元素
	var firstPageLi = $("<li></li>").append($("<a></a>").append("首页").attr("href","#"));
	var prePageLi = $("<li></li>").append($("<a></a>").append("&laquo;"));
	if(result.obj.pageInfo.hasPreviousPage == false){
		firstPageLi.addClass("disabled");
		prePageLi.addClass("disabled");
	}else{
		//为元素添加点击翻页的事件
		firstPageLi.click(function(){
			getUsersList(1);
		});
		prePageLi.click(function(){
			getUsersList(result.obj.pageInfo.pageNum -1);
		});
	}
	var nextPageLi = $("<li></li>").append($("<a></a>").append("&raquo;"));
	var lastPageLi = $("<li></li>").append($("<a></a>").append("末页").attr("href","#"));
	if(result.obj.pageInfo.hasNextPage == false){
		nextPageLi.addClass("disabled");
		lastPageLi.addClass("disabled");
	}else{
		nextPageLi.click(function(){
			getUsersList(result.obj.pageInfo.pageNum +1);
		});
		lastPageLi.click(function(){
			getUsersList(result.obj.pageInfo.pages);
		});
	}
	//添加首页和前一页 的提示
	ul.append(firstPageLi).append(prePageLi);
	//1,2，3遍历给ul中添加页码提示
	$.each(result.obj.pageInfo.navigatepageNums,function(index,item){
		var numLi = $("<li></li>").append($("<a></a>").append(item));
		if(result.obj.pageInfo.pageNum == item){
			numLi.addClass("active");
		}
		numLi.click(function(){
			getUsersList(item);
		});
		ul.append(numLi);
	});
	//添加下一页和末页 的提示
	ul.append(nextPageLi).append(lastPageLi);
	//把ul加入到nav
	var navEle = $("<nav></nav>").append(ul);
	navEle.appendTo("#page_nav_area");
}


$(document).on("click",".edit",function(){
	users_edit($(this).attr("edit-id"));
	
});

$(document).on("click",".del",function(){
	users_delete($(this).attr("del-id"));
});

function ADD_USER(){
	$("#USERS_LIST_DIV_ID").attr("style","display:none;");//隐藏div
	$("#USER_ADD_DIV_ID").attr("style","display:block;");//隐藏div
}
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
	
	$.ajax({
		url:"adduser.do",
		 data:{
			 "loginname":loginName,
			 "loginpwd":loginPwd,
			 "truename":trueName,
			 "email":email,
		     "phone":phone,
		     "address":address
		 },
		type:"POST",
		success:function(result){
			returnUserList1();
		}
	});
	
	
	    		
}
function returnUserList(){
	$("#addLoginName").val("");
	$("#addLoginPwd").val("");
	$("#addTrueName").val("");
	$("#addEmail").val("");
	$("#addPhone").val("");
	$("#addAddress").val("");
	
	
	$("#editLoginName").val("");
	$("#editLoginPwd").val("");
	$("#editTrueName").val("");
	$("#editEmail").val("");
	$("#editPhone").val("");
	$("#editAddress").val("");
	$("#editLoginPwdHidder").val("");
	$("#editId").val("");

	
	$("#tishi1").html("");
	$("#tishi").html("");
	$("#USERS_LIST_DIV_ID").attr("style","display:block;");//隐藏div
	$("#USER_ADD_DIV_ID").attr("style","display:none;");//隐藏div
	$("#USER_EDIT_DIV_ID").attr("style","display:none;");//隐藏div
//	$("#MEAL_IMG_DIV_ID").attr("style","display:none;");//隐藏div
	getUsersList(currentPage);
}
function returnUserList1(){
	$("#addLoginName").val("");
	$("#addLoginPwd").val("");
	$("#addTrueName").val("");
	$("#addEmail").val("");
	$("#addPhone").val("");
	$("#addAddress").val("");
	
	
	$("#editLoginName").val("");
	$("#editLoginPwd").val("");
	$("#editTrueName").val("");
	$("#editEmail").val("");
	$("#editPhone").val("");
	$("#editAddress").val("");
	$("#editLoginPwdHidder").val("");
	$("#editId").val("");

	
	$("#tishi1").html("");
	$("#tishi").html("");
	$("#USERS_LIST_DIV_ID").attr("style","display:block;");//隐藏div
	$("#USER_ADD_DIV_ID").attr("style","display:none;");//隐藏div
	$("#USER_EDIT_DIV_ID").attr("style","display:none;");//隐藏div
//	$("#MEAL_IMG_DIV_ID").attr("style","display:none;");//隐藏div
	getUsersList(totalRecord);
}
function users_edit(id){
	userid=id;
	alert(userid);
	$("#USERS_LIST_DIV_ID").attr("style","display:none;");//隐藏div
	$("#USER_EDIT_DIV_ID").attr("style","display:block;");//隐藏div
	 $.ajax({
			url:"searchuserone.do",
			data:"id="+id,
			type:"POST",
			success:function(result){
				var data=result.obj.user;
				$("#editLoginName").val(data.loginname);
				$("#editLoginPwd").val(data.loginpwd);
				$("#editTrueName").val(data.truename);
				$("#editEmail").val(data.email);
				$("#editPhone").val(data.phone);
				$("#editAddress").val(data.address);
			}
	})
}

function returnordersList(){
	$("#MEAL_LIST_DIV_ID").attr("style","display:block;");//隐藏div
	$("#orderInfoDivId").attr("style","display:none;");//隐藏div
}
function edtiUserCheck(){
	var loginName=$("#editLoginName").val().trim();
	var loginPwd=$("#editLoginPwd").val().trim();
	var trueName=$("#editTrueName").val().trim();
	var email=$("#editEmail").val().trim();
	var phone=$("#editPhone").val().trim();
	var address=$("#editAddress").val().trim();
	if(loginName==""){
		$("#tishi1").html("用户名不能为空");
		return;
	}
	if(loginName.length>20){
		$("#tishi1").html("菜名最多20个字符");
		return;
	}
	
	if(loginPwd.length>6){
		$("#tishi1").html("密码最多6位");
		return;
	}
	
	if(trueName==""){
		$("#tishi1").html("真实姓名不能为空");
		return;
	}
	if(trueName.length>20){
		$("#tishi1").html("真实姓名做多20个字节");
		return;
	}
	
	if(email.trim()==""){
		$("#tishi1").html("电子邮箱不能为空");
		return;
	}

	var str=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
	if(!str.test(email)){
		$("#tishi1").html("电子邮箱格式不正确");
		return;
	}
	
	if(phone.trim()==""){
		$("#tishi1").html("手机号码不能为空");
		return;
	}
	
	var str=/^(13[0-9]|14[0-9]|15[0-9]|18[0-9])\d{8}$/i;
	if(!str.test(phone)){
		$("#tishi1").html("手机号码格式不正确");
		return;
	}
	
	if(address.trim()==""){
		$("#tishi1").html("送餐地址不能为空");
		return;
	}
	if(trueName.length>20){
		$("#tishi1").html("送餐地址做多50个字节");
		return;
	}
	if(loginPwd==""){
		loginPwd=$("#editLoginPwdHidder").val();
	}
	$.ajax({
		 url:"edituser.do",
		 data:{
			 "id":userid,
			 "loginname":loginName,
			 "loginpwd":loginPwd,
			 "truename":trueName,
			 "email":email,
		     "phone":phone,
		     "address":address
		 },
		 type:"POST",
		 success:function(result){
			 returnUserList();
		 }
	})
	    		
}
function users_delete(id){
	$.ajax({
		url:"deluser.do",
		data:"id="+id,
		type:"POST",
		success:function(){
			returnUserList();
		}
	})
}
function GOTO_USERS_NEXT_PAGE(){

	
}

function GOTO_USERS_TAIL_PAGE(){
	
}

function GOTO_USERS_PAGE(){
	var jumpVal=$("#JUMP_INPUT_ID").val().trim();
	if(jumpVal==""){
		$.MsgBox.Alert("消息","跳转页不能为空");
		return;
	}
	if(!(/^[0-9]+$/.test(jumpVal))){
		$.MsgBox.Alert("消息","页码必须为数字");
		return;
	}
	if(jumpVal<=0){
		$.MsgBox.Alert("消息","页码必须大于等于1");
		return;
	}
	if(jumpVal>usersAllPage){
		$.MsgBox.Alert("消息","页码超出上限");
		return;
	}
	
}


function GOTO_USERS_HOME_PAGE(){
	
}

function GOTO_USERS_PREVIOUS_PAGE(){
	
	 
}
function searchByUserName(){
	var loginname=$("#SEARCH_USER_NAMW").val().trim();
	if(loginname==""){
		alert("输入用户名不能为空");
		getUsersList(1);
		return false;
	}
	$.ajax({
		url:"searchuserbyname.do",
		data:"loginname="+loginname,
		type:"GET",
		success:function(result){
			if(result.obj.pageInfo.list.length){
				build_table(result);
				build_page_info(result);
				build_page_nav(result);
			}else{
				alert("不存在此用户");
				$("#SEARCH_USER_NAMW").empty();
				getUsersList(1);
			}
			
		}
	})
}






