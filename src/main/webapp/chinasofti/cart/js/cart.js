var totalRecord,currentPage;
var undifined=undifined;
var oid=0;
$(document).ready(function () {
	getCartList(1);
});
function getCartList(pn){
	$.ajax({
		url:"CartList.do",
		data:{
			"userid":$("#userid").val().trim(),
			"pn":pn
		},
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
	var cartlist = result.obj.pageInfo.list;
	$.each(cartlist,function(index,item){
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
						var cartid=$("<td></td>").append(item.cartid).attr("align","center");
						var mealseriesname=result2.obj.series.seriesname;
						var mealseriesid=$("<td></td>").append(mealseriesname).attr("align","center");
						var mealname=$("<td></td>").append(mealname1).attr("align","center");
						var mealprice=$("<td></td>").append(mealprice1).attr("align","center");
						var count=$("<td></td>").append(item.count).attr("align","center");
						var delBtn = $("<td></td>").append($("<a></a>").append("删除").addClass("del").attr("del-id",item.cartid).attr("style","color:blue")).attr("align","center");
						var mealid=$("<td></td>").append(item.mealid).attr("style","display:none");
						$("<tr></tr>").attr("bgcolor","#FFFFFF").append(cartid)
						.append(mealseriesid)
						.append(mealname)
						.append(mealprice)
						.append(count)
						.append(delBtn)
						.append(mealid)
						.appendTo("#POST_LIST_TBODY_ID");
					}
				})
			}
		})
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
			getCartList(1);
		});
		prePageLi.click(function(){
			getCartList(result.obj.pageInfo.pageNum -1);
		});
	}
	var nextPageLi = $("<li></li>").append($("<a></a>").append("&raquo;"));
	var lastPageLi = $("<li></li>").append($("<a></a>").append("末页").attr("href","#"));
	if(result.obj.pageInfo.hasNextPage == false){
		nextPageLi.addClass("disabled");
		lastPageLi.addClass("disabled");
	}else{
		nextPageLi.click(function(){
			getCartList(result.obj.pageInfo.pageNum +1);
		});
		lastPageLi.click(function(){
			getCartList(result.obj.pageInfo.pages);
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
			getCartList(item);
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
	DELETE_CAET($(this).attr("del-id"));
});




function DELETE_CAET(cartId){
	$.ajax({
		url:"delcart.do",
		data:"cartid="+cartId,
		type:"POST",
		success:function(){
			getCartList(currentPage);
		}
	})
}
function ADD_ORDERS(){
	var userid=$("#userid").val().trim();
	var trs = document.getElementById('POST_LIST_TBODY_ID').getElementsByTagName('tr');
	var len = trs.length,totalprice=0,totalcount = 0,prices=0,total=0,counts=0;
	for(var i = 0; i < len; i++){
		var tds = trs[i].getElementsByTagName('td');
		var price=tds[3].innerHTML;
		var count=tds[4].innerHTML;
		var mealid=tds[6].innerHTML;
	    /*total=eval(prices=prices+"+"+price); totalcount= eval(counts=counts+"+"+count);*/
		total=eval(price+"*"+count);
		totalprice=eval(totalprice+"+"+total);
	}
	$.ajax({
		url:"addorder.do",
		data:{
			"userid":userid,
			"orderprice":totalprice
		},
		type:"POST",
		success:function(result){
			if(result.code==100){
				oid=result.obj.oid;
				for(var i = 0; i < len; i++){
					var tds = trs[i].getElementsByTagName('td');
					var mealid=tds[6].innerHTML;
					var price=tds[3].innerHTML;
					var count=tds[4].innerHTML;
					$.ajax({
						url:"addod.do",
						data:{
							"oid":oid,
							"mealid":mealid,
							"mealprice":price,
							"mealcount":count
						},
						type:"POST",
						success:function(result1){
							if(result1.code==100){
								$.ajax({
									url:"delusercart.do",
									data:"userid="+userid,
									type:"POST",
									success:function(result2){
										if(result2.code==100){
											$.MsgBox.Alert("消息","订单已生成");
											getCartList(1);
										}
									}
								})
							}
						}
					})
				}
				
			}
		}
	})
	
	
}
