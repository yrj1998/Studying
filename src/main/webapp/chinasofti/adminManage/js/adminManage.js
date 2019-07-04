var everyPageDataCount=7;
var usersPageIndex=0;
var usersAllPage=0;
var totalRecord,currentPage;
var undifined=undifined;
var adminid=0;
$(document).ready(function () {
	getAdminList(1);
});

function getAdminList(pn){
	$.ajax({
		url:"adminManageList.do",
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
	var adminlist = result.obj.pageInfo.list;
	$.each(adminlist,function(index,item){
		var id=$("<td></td>").append(item.id).attr("align","center");
		var loginname=$("<td></td>").append(item.loginname).attr("align","center");
		var delBtn = $("<td></td>").append($("<a></a>").append("删除").addClass("del").attr("del-id",item.id).attr("style","color:blue")).attr("align","center");
		$("<tr></tr>").attr("bgcolor","#FFFFFF").append(id)
		.append(loginname)
		.append(delBtn)
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
			getAdminList(1);
		});
		prePageLi.click(function(){
			getAdminList(result.obj.pageInfo.pageNum -1);
		});
	}
	var nextPageLi = $("<li></li>").append($("<a></a>").append("&raquo;"));
	var lastPageLi = $("<li></li>").append($("<a></a>").append("末页").attr("href","#"));
	if(result.obj.pageInfo.hasNextPage == false){
		nextPageLi.addClass("disabled");
		lastPageLi.addClass("disabled");
	}else{
		nextPageLi.click(function(){
			getAdminList(result.obj.pageInfo.pageNum +1);
		});
		lastPageLi.click(function(){
			getAdminList(result.obj.pageInfo.pages);
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
			getAdminList(item);
		});
		ul.append(numLi);
	});
	//添加下一页和末页 的提示
	ul.append(nextPageLi).append(lastPageLi);
	//把ul加入到nav
	var navEle = $("<nav></nav>").append(ul);
	navEle.appendTo("#page_nav_area");
}


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
	if(loginName==""){
		$("#tishi").html("用户名不能为空");
		return;
	}
	if(loginName.length>20){
		$("#tishi").html("用户名最多20个字节");
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
	$.ajax({
		url:"addadmin.do",
		 data:{
			 "loginname":loginName,
			 "loginpwd":loginPwd,
		 },
		type:"POST",
		success:function(result){
			returnUserList();
		}
	}); 		
}
function returnUserList(){
	$("#addLoginName").val("");
	$("#addLoginPwd").val("");
	
	

	$("#tishi").html("");
	$("#USERS_LIST_DIV_ID").attr("style","display:block;");//隐藏div
	$("#USER_ADD_DIV_ID").attr("style","display:none;");//隐藏div
//	$("#MEAL_IMG_DIV_ID").attr("style","display:none;");//隐藏div
	getAdminList(totalRecord);
}
function returnUserList1(){
	$("#addLoginName").val("");
	$("#addLoginPwd").val("");
	
	

	$("#tishi").html("");
	$("#USERS_LIST_DIV_ID").attr("style","display:block;");//隐藏div
	$("#USER_ADD_DIV_ID").attr("style","display:none;");//隐藏div
//	$("#MEAL_IMG_DIV_ID").attr("style","display:none;");//隐藏div
	getAdminList(currentPage);
}


function returnordersList(){
	$("#MEAL_LIST_DIV_ID").attr("style","display:block;");//隐藏div
	$("#orderInfoDivId").attr("style","display:none;");//隐藏div
}

function users_delete(id){
	$.ajax({
		url:"deladmin.do",
		data:"id="+id,
		type:"POST",
		success:function(){
			returnUserList1();
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
		getAdminList(1);
		return false;
	}
	$.ajax({
		url:"searchadminbyname.do",
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
				getAdminList(1);
			}
			
		}
	})
}






