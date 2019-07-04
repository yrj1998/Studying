var everyPageDataCount=7;
var mealseriesPageIndex=0;
var mealseriesAllPage=0;
var totalRecord,currentPage;
var undifined=undifined;
$(document).ready(function () {
	getMealseriesList(1);
});

function getMealseriesList(pn){
	$.ajax({
		url:"mealseriesManageList.do",
		data:"pn="+pn,
		type:"GET",
		success:function(result){
			build_series_table(result);
			build_page_info(result);
			build_page_nav(result);
		}
	});
}
function build_series_table(result){
	$("#POST_LIST_TBODY_ID").empty();
	var serieslist = result.obj.pageInfo.list;
	$.each(serieslist,function(index,item){
		var seriesId=$("<td></td>").append(item.seriesid).attr("align","center");
		var seriesname=$("<td></td>").append(item.seriesname).attr("align","center");
		var editBtn = $("<td></td>").append($("<a></a>").append("编辑").addClass("edit").attr("edit-id",item.seriesid).attr("style","color:blue")).attr("align","center");
		var delBtn = $("<td></td>").append($("<a></a>").append("删除").addClass("del").attr("del-id",item.seriesid).attr("style","color:blue")).attr("align","center");
		$("<tr></tr>").attr("bgcolor","#FFFFFF").append(seriesId)
		.append(seriesname)
		.append(editBtn)
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
			getMealseriesList(1);
		});
		prePageLi.click(function(){
			getMealseriesList(result.obj.pageInfo.pageNum -1);
		});
	}
	var nextPageLi = $("<li></li>").append($("<a></a>").append("&raquo;"));
	var lastPageLi = $("<li></li>").append($("<a></a>").append("末页").attr("href","#"));
	if(result.obj.pageInfo.hasNextPage == false){
		nextPageLi.addClass("disabled");
		lastPageLi.addClass("disabled");
	}else{
		nextPageLi.click(function(){
			getMealseriesList(result.obj.pageInfo.pageNum +1);
		});
		lastPageLi.click(function(){
			getMealseriesList(result.obj.pageInfo.pages);
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
			getMealseriesList(item);
		});
		ul.append(numLi);
	});
	//添加下一页和末页 的提示
	ul.append(nextPageLi).append(lastPageLi);
	//把ul加入到nav
	var navEle = $("<nav></nav>").append(ul);
	navEle.appendTo("#page_nav_area");
}
function addMealseriesCheck(){
	var mealseriesName=$("#ADD_MEALSERIES").val().trim();
	
	if(mealseriesName==""){
		$("#tishi").html("菜系名称不能为空");
		return;
	}
	if(mealseriesName.length>10){
		$("#tishi").html("菜系名称最多10个字符");
		return;
	}
	
	$.ajax({
		url:"addSeries.do",
		data:"seriesname="+mealseriesName,
		type:"POST",
		success:function(result){
			 returnMealseriesList();
		}
	});
}

$(document).on("click",".edit",function(){
		mealseries_edit($(this).attr("edit-id"));
});
$(document).on("click",".del",function(){
	DELETE_MEALSERIES($(this).attr("del-id"));
});

function mealseries_edit(seriesId){
	$.ajax({
		url:"searchone.do",
		data:"seriesId="+seriesId,
		type:"POST",
		success:function(result){
			var data=result.obj.series;
			$("#EDIT_MEALSERIES").val(data.seriesname);
		}
	})
	    		$("#MEALSERIES_LIST_DIV_ID").attr("style","display:none;");//隐藏div
	    		 $("#MEALSERIES_EDIT_DIV_ID").attr("style","display:block;");//隐藏div
	    	
	

}
function editMealseriesCheck(){
	var seriesName=$("#EDIT_MEALSERIES").val()
	var seriesId=$(".edit").attr("edit-id");
	if(seriesName==""){
		$("#tishi1").html("菜系名称不能为空");
		return;
	}
	if(seriesName.length>10){
		$("#tishi1").html("菜系名称最多10个字符");
		return;
	}
	
	
	$.ajax({
		url:"editseries.do",
		data:{
			"seriesid":seriesId,
			"seriesname":seriesName
		},
		type:"POST",
		success:function(result){
			returnMealseriesList1();
		}
	})
}

function DELETE_MEALSERIES(seriesId){
	$.ajax({
		url:"delseries.do",
		data:"seriesid="+seriesId,
		type:"POST",
		success:function(){
			returnMealseriesList1();
		}
	})
	
}
function returnMealseriesList(){
	$("#ADD_MEALSERIES").val("");
	$("#EDIT_MEALSERIES").val("");
	$("#EDIT_MEALSERIES_HIDDE").val("");
	
	$("#tishi1").html("");
	$("#tishi").html("");
	$("#MEALSERIES_LIST_DIV_ID").attr("style","display:block;");//隐藏div
	$("#MEALSERIES_ADD_DIV_ID").attr("style","display:none;");//隐藏div
	$("#MEALSERIES_EDIT_DIV_ID").attr("style","display:none;");//隐藏div
	getMealseriesList(totalRecord);
}

function returnMealseriesList1(){
	$("#ADD_MEALSERIES").val("");
	$("#EDIT_MEALSERIES").val("");
	$("#EDIT_MEALSERIES_HIDDE").val("");
	
	$("#tishi1").html("");
	$("#tishi").html("");
	$("#MEALSERIES_LIST_DIV_ID").attr("style","display:block;");//隐藏div
	$("#MEALSERIES_ADD_DIV_ID").attr("style","display:none;");//隐藏div
	$("#MEALSERIES_EDIT_DIV_ID").attr("style","display:none;");//隐藏div
	getMealseriesList(currentPage);
}

function ADD_MEALSERIES(){
	 $("#MEALSERIES_LIST_DIV_ID").attr("style","display:none;");//隐藏div
	 $("#MEALSERIES_ADD_DIV_ID").attr("style","display:block;");//隐藏div
}


function GOTO_MEALSERIES_NEXT_PAGE(){


}

function GOTO_MEALSERIES_TAIL_PAGE(){
	
}

function GOTO_MEALSERIES_PAGE(){
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
	if(jumpVal>mealseriesAllPage){
		$.MsgBox.Alert("消息","页码超出上限");
		return;
	}
	
}


function GOTO_MEALSERIES_HOME_PAGE(){

}

function GOTO_MEALSERIES_PREVIOUS_PAGE(){

	 
}
function searchBySeriesName(){
	var seriesname=$("#SEARCH_MEALSERIES_NAME").val().trim();
	if(seriesname==""){
		alert("输入菜品名称不能为空");
		getMealseriesList(1);
		return false;
	}
	$.ajax({
		url:"searchseries.do",
		data:"seriesname="+seriesname,
		type:"GET",
		success:function(result){
			build_series_table(result);
			build_page_info(result);
			build_page_nav(result);
		}
	})
}




