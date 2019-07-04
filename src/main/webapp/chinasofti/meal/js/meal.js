var everyPageDataCount=7;
var mealPageIndex=0;
var mealAllPage=0;
var totalRecord,currentPage;
/*var undifined=undifined;*/
$(document).ready(function () {
	getMealList(1);
});
function getMealList(pn){
	$.ajax({
		url:"mealManage.do",
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
	$("#tbody").empty();
	var meallist = result.obj.pageInfo.list;
	$.each(meallist,function(index,item){
		var mealimage=$("<div></div>").append($("<img>").attr("src",item.mealimage).attr("style","whith:80px;height:80px")).append("       ");
		var mealname=$("<tr></tr>").append($("<td></td>").append("菜名:"+item.mealname));
		var mealprice=$("<tr></tr>").append($("<td></td>").append("价格:"+item.mealprice));
		var mealsummarize=$("<tr></tr>").append($("<td></td>").append("摘要:"+item.mealsummarize));
		var btn=$("<tr></tr>")
		.append($("<td></td>").append("数量:").append(" ")
				.append($("<select></select>").attr("id","my10").append($("<option></option>").attr("value","1").append("1"))
						.append($("<option></option>").attr("value","2").append("2"))
						.append($("<option></option>").attr("value","3").append("3"))
						.append($("<option></option>").attr("value","4").append("4"))
						.append($("<option></option>").attr("value","5").append("5"))
						.append($("<option></option>").attr("value","6").append("6"))
						.append($("<option></option>").attr("value","7").append("7"))
						.append($("<option></option>").attr("value","8").append("8"))
						.append($("<option></option>").attr("value","9").append("9"))
						.append($("<option></option>").attr("value","10").append("10")))
				.append("     ").append($("<td></td>").append($("<button></button>").append("加入购物车").addClass("btn btn-info addcart").attr("addcart-id",item.meaid))));
		var hr=$("<hr>")
		$("#tbody").append(mealimage)
		.append(mealname)
		.append(mealprice)
		.append(mealsummarize)
		.append(btn)
		.append(hr)
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
			getMealList(1);
		});
		prePageLi.click(function(){
			getMealList(result.obj.pageInfo.pageNum -1);
		});
	}
	var nextPageLi = $("<li></li>").append($("<a></a>").append("&raquo;"));
	var lastPageLi = $("<li></li>").append($("<a></a>").append("末页").attr("href","#"));
	if(result.obj.pageInfo.hasNextPage == false){
		nextPageLi.addClass("disabled");
		lastPageLi.addClass("disabled");
	}else{
		nextPageLi.click(function(){
			getMealList(result.obj.pageInfo.pageNum +1);
		});
		lastPageLi.click(function(){
			getMealList(result.obj.pageInfo.pages);
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
			getMealList(item);
		});
		ul.append(numLi);
	});
	//添加下一页和末页 的提示
	ul.append(nextPageLi).append(lastPageLi);
	//把ul加入到nav
	var navEle = $("<nav></nav>").append(ul);
	navEle.appendTo("#page_nav_area");
}

$(document).on("click",".addcart",function(){
	/*alert($("#userid").val().trim());
	alert($(this).parents("td").find("select").val().trim());*/
//	var count=document.getElementById("my10");
//	var item=count.selectedIndex;
//	alert(count[item].text);
	addShoppingCart($(this).attr("addcart-id"),$("#userid").val().trim(),$(this).parents("td").find("select").val().trim());
});



function addShoppingCart(mealId,userid,count){
	$.ajax({
		url:"addShoppingCart.do",
		data:{
			"mealid":mealId,
			"userid":userid,
			"count":count
		},
		type:"POST",
		success:function(){
			$.MsgBox.Alert("消息","已加入购物车");
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
function searchByMealName(){
	var mealName=$("#SEARCH_MEAL_NAME").val().trim();
	var mealSeriesId=$("#SEARCH_SERIES_ID").val().trim();
	if(mealName==""){
		alert("输入菜名不能为空");
		getMealList(1);
		return false;
	}
	$.ajax({
		url:"searchusermeal1.do",
		data:{
			"mealname":mealName,
			"mealseriesid":mealSeriesId
		},
		type:"GET",
		success:function(result){
			if(result.obj.pageInfo.list.length){
				build_table(result);
				build_page_info(result);
				build_page_nav(result);
			}else{
				alert("没有此菜品！");
				getMealList(1);
			}
		}
	})
}




