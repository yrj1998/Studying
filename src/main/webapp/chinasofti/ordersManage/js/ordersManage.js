var everyPageDataCount=7;
var mealPageIndex=0;
var mealAllPage=0;
var orderostate="";
var totalRecord,currentPage;
var undifined=undifined;
$(document).ready(function () {
	getOrderList(1);
});

function getOrderList(pn){
	$.ajax({
		url:"orderManageList.do",
		data:"pn="+pn,
		type:"GET",
		success:function(result){
			build_table(result);
			build_page_info(result);
			build_page_nav(result);
			build_select();
		}
	});
}

function build_table(result){
	$("#POST_LIST_TBODY_ID").empty();
	var orderlist = result.obj.pageInfo.list;
	$.each(orderlist,function(index,item){
		var oid=$("<td></td>").append(item.oid).attr("align","center");
		if(item.orderstate==0){
			orderostate="未处理";
		}else if(item.orderstate==1){
			orderostate="已处理";
		}else{
			orderostate="已作废";
		}
		var ordertime=$("<td></td>").append(item.ordertime).attr("align","center");
		var orderstate=$("<td></td>").append(orderostate).attr("align","center");
		var orderprice=$("<td></td>").append(item.orderprice).attr("align","center");
		var infoBtn = $("<td></td>").append($("<a></a>").append("详细信息").addClass("info").attr("info-id",item.oid).attr("style","color:blue")).attr("align","center");
		var handleBtn = $("<td></td>").append($("<a></a>").append("作废").append(" ").addClass("handle1").attr("handle1-id",item.oid).attr("style","color:blue")).append($("<a></a>").append("处理").addClass("handle2").attr("handle2-id",item.oid)).attr("align","center").attr("align","center");
		$("<tr></tr>").attr("bgcolor","#FFFFFF").append(oid)
		.append(ordertime)
		.append(orderstate)
		.append(orderprice)
		.append(infoBtn)
		.append(handleBtn)
		.appendTo("#POST_LIST_TBODY_ID");
	});
}

function build_select(){
	$.ajax({
		url:"searchmealseriesname.do",
		type:"GET",
		success:function(result){
			$("#SEARCH_SERIES_ID").empty();
			var serieslist = result.obj.list;
			var option1=$("<option></option>").attr("value",0).append("所有菜系");
			$.each(serieslist,function(index,item){
				var option=$("<option></option>").attr("value",item.seriesid).append(item.seriesname);
				$("#SEARCH_SERIES_ID").append(option1).append(option);
				
			});
			$.each(serieslist,function(index,item){
				var option=$("<option></option>").attr("value",item.seriesid).append(item.seriesname);
				$("#ADD_MEALSERIES_NAME").append(option1).append(option);
				
			});
			$.each(serieslist,function(index,item){
				var option=$("<option></option>").attr("value",item.seriesid).append(item.seriesname);
				$("#EDIT_MEALSERIES_NAME").append(option1).append(option);
				
			});
		}
	})
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
			getOrderList(1);
		});
		prePageLi.click(function(){
			getOrderList(result.obj.pageInfo.pageNum -1);
		});
	}
	var nextPageLi = $("<li></li>").append($("<a></a>").append("&raquo;"));
	var lastPageLi = $("<li></li>").append($("<a></a>").append("末页").attr("href","#"));
	if(result.obj.pageInfo.hasNextPage == false){
		nextPageLi.addClass("disabled");
		lastPageLi.addClass("disabled");
	}else{
		nextPageLi.click(function(){
			getOrderList(result.obj.pageInfo.pageNum +1);
		});
		lastPageLi.click(function(){
			getOrderList(result.obj.pageInfo.pages);
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
			getOrderList(item);
		});
		ul.append(numLi);
	});
	//添加下一页和末页 的提示
	ul.append(nextPageLi).append(lastPageLi);
	//把ul加入到nav
	var navEle = $("<nav></nav>").append(ul);
	navEle.appendTo("#page_nav_area");
}

$(document).on("click",".info",function(){
	orders_info($(this).attr("info-id"));
});
$(document).on("click",".handle1",function(){
	orders_handle($(this).attr("handle1-id"),2);
});
$(document).on("click",".handle2",function(){
	orders_handle($(this).attr("handle2-id"),1);
});

function orders_info(oid){
	$("#MEAL_LIST_DIV_ID").attr("style","display:none;");//隐藏div
	$("#orderInfoDivId").attr("style","display:block;");//隐藏div
	$.ajax({
		url:"order_user.do",
		data:"oid="+oid,
		type:"GET",
		success:function(result){
			var userid=result.obj.userid;
			$.ajax({
				url:"order_userinfo.do",
				data:"id="+userid,
				type:"GET",
				success:function(result1){
					$("#orderInfoUserListDivId").empty();
					var user = result1.obj.user;
					var loginname=$("<td></td>").append(user.loginname).attr("align","center");
					var truename=$("<td></td>").append(user.truename).attr("align","center");
					var email=$("<td></td>").append(user.email).attr("align","center");
					var phone=$("<td></td>").append(user.phone).attr("align","center");
					var address=$("<td></td>").append(user.address).attr("align","center");
					$("<tr></tr>").attr("bgcolor","#FFFFFF").append(loginname)
					.append(truename)
					.append(email)
					.append(phone)
					.append(address)
					.appendTo("#orderInfoUserListDivId");
				}
			})
		}
	});
	$.ajax({
		url:"orders_info.do",
		data:"oid="+oid,
		type:"GET",
		success:function(result){
			$("#orderInfoListDivId").empty();
			var odlist=result.obj.odlist;
			$.each(odlist,function(index,item){
				$.ajax({
					url:"searchcartmealone.do",
					data:"mealid="+item.mealid,
					type:"POST",
					success:function(result1){
						var mealseriesid1=result1.obj.meal.mealseriesid;
						var mealname1=result1.obj.meal.mealname;
						var mealprice1=result1.obj.meal.mealprice;
						$.ajax({
							url:"searchcartseries.do",
							data:"seriesid="+mealseriesid1,
							type:"GET",
							success:function(result2){
								var mealseriesname=result2.obj.series.seriesname;
								var mealseriesid=$("<td></td>").append(mealseriesname).attr("align","center");
								var mealname=$("<td></td>").append(mealname1).attr("align","center");
								var mealprice=$("<td></td>").append(mealprice1).attr("align","center");
								var count=$("<td></td>").append(item.mealcount).attr("align","center");
								$("<tr></tr>").attr("bgcolor","#FFFFFF")
								.append(mealseriesid)
								.append(mealname)
								.append(mealprice)
								.append(count)
								.appendTo("#orderInfoListDivId");
							}
						})
					}
				})
			});
		}
	});	
}


function returnordersList(){
	$("#MEAL_LIST_DIV_ID").attr("style","display:block;");//隐藏div
	$("#orderInfoDivId").attr("style","display:none;");//隐藏div
	getOrderList(currentPage);
}
function orders_handle(oid,orderState){
	$.ajax({
		url:"updatastate.do",
		data:{
			"oid":oid,
			"orderstate":orderState
		},
		type:"POST",
		success:function(result){
			returnordersList();
		}
	})
}
function GOTO_MEAL_NEXT_PAGE(){

	
	
}

function GOTO_MEAL_TAIL_PAGE(){
	
}

function GOTO_MEAL_PAGE(){
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
	if(jumpVal>mealAllPage){
		$.MsgBox.Alert("消息","页码超出上限");
		return;
	}
	
}


function GOTO_MEAL_HOME_PAGE(){
	
}

function GOTO_MEAL_PREVIOUS_PAGE(){
	
	 
}
function searchByOrderOid(){
	var oid=$("#SEARCH_OID").val().trim();
	var orderstate=$("#SEARCH_ORDER_STATE").val().trim();
	if(oid==""){
		alert("输入订单号不能为空");
		getOrderList(1);
		return false;
	}
	$.ajax({
		url:"searchorder.do",
		data:{
			"oid":oid,
			"orderstate":orderstate
		},
		type:"GET",
		success:function(result){
			if(result.obj.pageInfo.list.length){
				build_table(result);
				build_page_info(result);
				build_page_nav(result);
			}else{
				alert("没有此订单！");
				getOrderList(1);
			}
			
		}
		
	})
}






