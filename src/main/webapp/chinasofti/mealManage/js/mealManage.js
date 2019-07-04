var everyPageDataCount=7;
var mealPageIndex=0;
var mealAllPage=0;
var totalRecord,currentPage;
var undifined=undifined;
var meaid;
$(document).ready(function () {
	getMealList(1);
});
function getMealList(pn){
	$.ajax({
		url:"mealManageList.do",
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
	var meallist = result.obj.pageInfo.list;
	$.each(meallist,function(index,item){
		$.ajax({
			url:"searchone.do",
			data:"seriesId="+item.mealseriesid,
			type:"POST",
			success:function(result1){
				var meaid=$("<td></td>").append(item.meaid).attr("align","center");
				var mealseriesname=result1.obj.series.seriesname;
				var mealseriesid=$("<td></td>").append(mealseriesname).attr("align","center");
				var mealname=$("<td></td>").append(item.mealname).attr("align","center");
				var mealsummarize=$("<td></td>").append(item.mealsummarize).attr("align","center");
				var mealprice=$("<td></td>").append(item.mealprice).attr("align","center");
				var editBtn = $("<td></td>").append($("<a></a>").append("编辑").addClass("edit").attr("edit-id",item.meaid).attr("style","color:blue")).attr("align","center");
				var upBtn = $("<td></td>").append($("<a></a>").append("上传图片").addClass("up").attr("up-id",item.meaid).attr("style","color:blue")).attr("align","center");
				var delBtn = $("<td></td>").append($("<a></a>").append("删除").addClass("del").attr("del-id",item.meaid).attr("style","color:blue")).attr("align","center");
				$("<tr></tr>").attr("bgcolor","#FFFFFF").append(meaid)
				.append(mealseriesid)
				.append(mealname)
				.append(mealsummarize)
				.append(mealprice)
				.append(editBtn)
				.append(upBtn)
				.append(delBtn)
				.appendTo("#POST_LIST_TBODY_ID");
			}
		})
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


$(document).on("click",".edit",function(){
	meal_edit($(this).attr("edit-id"));
});
$(document).on("click",".up",function(){
	
	meal_edit_img($(this).attr("up-id"));
});
$(document).on("click",".del",function(){
	DELETE_MEAL($(this).attr("del-id"));
});

function addMealCheck(){
	var mealName=$("#ADD_MEAL_NAME").val().trim();
	var mealSummarize=$("#ADD_MEAL_SUMMARIZE").val().trim();
	var mealDescription=$("#ADD_MEAL_DESCRIPTION").val().trim();
	var mealPrice=$("#ADD_MEAL_PRICE").val().trim();
	var mealSeriesId=$("#ADD_MEALSERIES_NAME").val().trim();
	if(mealName==""){
		$("#tishi").html("菜名不能为空");
		return;
	}
	if(mealName.length>20){
		$("#tishi").html("菜名最多20个字符");
		return;
	}
	if(mealSummarize==""){
		$("#tishi").html("摘要不能为空");
		return;
	}
	if(mealSummarize.length>250){
		$("#tishi").html("摘要最多250个字符");
		return;
	}
	
	if(mealDescription==""){
		$("#tishi").html("介绍不能为空");
		return;
	}
	if(mealDescription.length>250){
		$("#tishi").html("介绍最多250个字符");
		return;
	}
	if(mealPrice.trim()==""){
		$("#tishi").html("价钱不能为空");
		return;
	}

	var str=/^(([1-9]\d{0,8})|0)(\.\d{2})?$/;
	if(!str.test(mealPrice)){
		$("#tishi").html("整数(8位)或保留小数点后两位如：88.10");
		return;
	}
	$.ajax({
		url:"addmeal.do",
		data:{
			"mealseriesid":mealSeriesId,
			"mealname":mealName,
			"mealsummarize":mealSummarize,
			"mealdescription":mealDescription,
			"mealprice":mealPrice
		},
		type:"POST",
		success:function(result){
			returnMealList();
		}
	});
}

function meal_edit_img(mealId){
	meaid=mealId;
	$("#MEAL_LIST_DIV_ID").attr("style","display:none;");//隐藏div
	$("#MEAL_IMG_DIV_ID").attr("style","display:block;");//隐藏div
	$.ajax({
		url:"searchimg.do",
		data:"meaid="+mealId,
		type:"GET",
		success:function(result){
			var img=result.obj.img;
			$("#finalImg").attr("src",img);
		}
	})	 
}
function meal_edit(mealId){
	
	 $("#MEAL_LIST_DIV_ID").attr("style","display:none;");//隐藏div
	 $("#MEAL_EDIT_DIV_ID").attr("style","display:block;");//隐藏div
	 
	 $.ajax({
			url:"searchmealone.do",
			data:"meaid="+mealId,
			type:"POST",
			success:function(result){
				var data=result.obj.meal;
				$("#EDIT_MEAL_HIDDE").val(data.meaid);
				$("#EDIT_MEALSERIES_NAME").val(data.mealseriesid);
				$("#EDIT_MEAL_NAME").val(data.mealname);
				$("#EDIT_MEAL_SUMMARIZE").val(data.mealsummarize);
				$("#EDIT_MEAL_DESCRIPTION").val(data.mealdescription);
				$("#EDIT_MEAL_PRICE").val(data.mealprice);
			}
	})
}
function editMealCheck(){
	var mealId=$("#EDIT_MEAL_HIDDE").val();
	var mealName=$("#EDIT_MEAL_NAME").val().trim();
	var mealSummarize=$("#EDIT_MEAL_SUMMARIZE").val().trim();
	var mealDescription=$("#EDIT_MEAL_DESCRIPTION").val().trim();
	var mealPrice=$("#EDIT_MEAL_PRICE").val().trim();
	var mealSeriesId=$("#EDIT_MEALSERIES_NAME").val().trim();
	alert(mealSeriesId);
	if(mealName==""){
		$("#tishi").html("菜名不能为空");
		return;
	}
	if(mealName.length>20){
		$("#tishi").html("菜名最多20个字符");
		return;
	}
	
	if(mealSummarize==""){
		$("#tishi").html("摘要不能为空");
		return;
	}
	if(mealSummarize.length>250){
		$("#tishi").html("摘要最多250个字符");
		return;
	}
	
	if(mealDescription==""){
		$("#tishi").html("介绍不能为空");
		return;
	}
	if(mealDescription.length>250){
		$("#tishi").html("介绍最多250个字符");
		return;
	}
	if(mealPrice.trim()==""){
		$("#tishi").html("价钱不能为空");
		return;
	}

	var str=/^(([1-9]\d{0,8})|0)(\.\d{2})?$/;
	if(!str.test(mealPrice)){
		$("#tishi").html("整数(8位)或保留小数点后两位如：88.10");
		return;
	}
	$.ajax({
		 url:"editmeal.do",
		 data:{
			 "meaid":mealId,
			 "mealseriesid":mealSeriesId,
			 "mealname":mealName,
			 "mealsummarize":mealSummarize,
		     "mealdescription":mealDescription,
		     "mealprice":mealPrice
		 },
		 type:"POST",
		 success:function(result){
			 returnMealList1();
		 }
	})
	    		
	
}

function DELETE_MEAL(mealId){
	$.ajax({
		url:"delmeal.do",
		data:"meaid="+mealId,
		type:"POST",
		success:function(){
			returnMealList1();
		}
	})
	
}
function returnMealList(){
	$("#ADD_MEAL_NAME").val("");
	$("#ADD_MEAL_SUMMARIZE").val("");
	$("#ADD_MEAL_DESCRIPTION").val("");
	$("#ADD_MEAL_PRICE").val("");
	$("#ADD_MEALSERIES_NAME").val("");
	
	
	$("#EDI_MEAL_NAME").val("");
	$("#EDI_MEAL_SUMMARIZE").val("");
	$("#EDI_MEAL_DESCRIPTION").val("");
	$("#EDI_MEAL_PRICE").val("");
	$("#EDI_MEALSERIES_NAME").val("");
	
	$("#mealIdHidd").val("");
	$("#EDIT_MEAL_HIDDE").val("");
	
	$("#tishi1").html("");
	$("#tishi").html("");
	$("#MEAL_LIST_DIV_ID").attr("style","display:block;");//隐藏div
	$("#MEAL_ADD_DIV_ID").attr("style","display:none;");//隐藏div
	$("#MEAL_EDIT_DIV_ID").attr("style","display:none;");//隐藏div
	$("#MEAL_IMG_DIV_ID").attr("style","display:none;");//隐藏div
	
	getMealList(totalRecord);
}

function returnMealList1(){
	$("#ADD_MEAL_NAME").val("");
	$("#ADD_MEAL_SUMMARIZE").val("");
	$("#ADD_MEAL_DESCRIPTION").val("");
	$("#ADD_MEAL_PRICE").val("");
	$("#ADD_MEALSERIES_NAME").val("");
	
	
	$("#EDI_MEAL_NAME").val("");
	$("#EDI_MEAL_SUMMARIZE").val("");
	$("#EDI_MEAL_DESCRIPTION").val("");
	$("#EDI_MEAL_PRICE").val("");
	$("#EDI_MEALSERIES_NAME").val("");
	
	$("#mealIdHidd").val("");
	$("#EDIT_MEAL_HIDDE").val("");
	
	$("#tishi1").html("");
	$("#tishi").html("");
	$("#MEAL_LIST_DIV_ID").attr("style","display:block;");//隐藏div
	$("#MEAL_ADD_DIV_ID").attr("style","display:none;");//隐藏div
	$("#MEAL_EDIT_DIV_ID").attr("style","display:none;");//隐藏div
	$("#MEAL_IMG_DIV_ID").attr("style","display:none;");//隐藏div
	
	getMealList(currentPage);
}


function ADD_MEAL(){
	 $("#MEAL_LIST_DIV_ID").attr("style","display:none;");//隐藏div
	 $("#MEAL_ADD_DIV_ID").attr("style","display:block;");//隐藏div
}


function GOTO_MEAL_NEXT_PAGE(){

	
}

function GOTO_MEAL_TAIL_PAGE(){
	
}

function GOTO_MEAL_PAGE(){
	
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
		url:"searchmeal.do",
		data:{
			"mealname":mealName,
			"mealseriesid":mealSeriesId
		},
		type:"GET",
		success:function(result){
			build_table(result);
			build_page_info(result);
			build_page_nav(result);
		}
	})
	
}


(window.onresize = function () {
    var win_height = $(window).height();
    var win_width = $(window).width();
    if (win_width <= 768){
        $(".tailoring-content").css({
            "top": (win_height - $(".tailoring-content").outerHeight())/2,
            "left": 0
        });
    }else{
        $(".tailoring-content").css({
            "top": (win_height - $(".tailoring-content").outerHeight())/2,
            "left": (win_width - $(".tailoring-content").outerWidth())/2
        });
    }
})();

//弹出图片裁剪框
$("#replaceImg").on("click",function () {
    $(".tailoring-container").toggle();
});
//图像上传
function selectImg(file) {
    if (!file.files || !file.files[0]){
        return;
    }
    var reader = new FileReader();
    reader.onload = function (evt) {
        var replaceSrc = evt.target.result;
        //更换cropper的图片
        $('#tailoringImg').cropper('replace', replaceSrc,false);//默认false，适应高度，不失真
    }
    reader.readAsDataURL(file.files[0]);
}
//cropper图片裁剪
$('#tailoringImg').cropper({
    aspectRatio: 1/1,//默认比例
    preview: '.previewImg',//预览视图
    guides: false,  //裁剪框的虚线(九宫格)
    autoCropArea: 0.5,  //0-1之间的数值，定义自动剪裁区域的大小，默认0.8
    movable: false, //是否允许移动图片
    dragCrop: true,  //是否允许移除当前的剪裁框，并通过拖动来新建一个剪裁框区域
    movable: true,  //是否允许移动剪裁框
    resizable: true,  //是否允许改变裁剪框的大小
    zoomable: false,  //是否允许缩放图片大小
    mouseWheelZoom: false,  //是否允许通过鼠标滚轮来缩放图片
    touchDragZoom: true,  //是否允许通过触摸移动来缩放图片
    rotatable: true,  //是否允许旋转图片
    crop: function(e) {
        // 输出结果数据裁剪图像。
    }
});
//旋转
$(".cropper-rotate-btn").on("click",function () {
    $('#tailoringImg').cropper("rotate", 45);
});
//复位
$(".cropper-reset-btn").on("click",function () {
    $('#tailoringImg').cropper("reset");
});
//换向
var flagX = true;
$(".cropper-scaleX-btn").on("click",function () {
    if(flagX){
        $('#tailoringImg').cropper("scaleX", -1);
        flagX = false;
    }else{
        $('#tailoringImg').cropper("scaleX", 1);
        flagX = true;
    }
    flagX != flagX;
});

//裁剪后的处理
$("#sureCut").on("click",function () {
    if ($("#tailoringImg").attr("src") == null ){
    	file="";
        return false;
    }else{
        var cas = $('#tailoringImg').cropper('getCroppedCanvas');//获取被裁剪后的canvas
        var base64url = cas.toDataURL('image/jpg'); //转换为base64地址形式
        
        $("#finalImg").prop("src",base64url);//显示为图片的形式
    
        base64url = base64url.substring(22); 
   
        file=base64url;
        
        //关闭裁剪框
        closeTailor();
    }
});
//关闭裁剪框
function closeTailor() {
    $(".tailoring-container").toggle();
}

function subphoto(){
	var mealId=meaid;
	var file=$("#finalImg")[0].src;
	if(file==""){
		$.MsgBox.Alert("消息","请选择头像！");
		return;
	} 
	if(file.length>2000000){
		$.MsgBox.Alert("消息","剪裁区域的图片过大，上传头像大小不能超过2M！现在大小约为："+Math.floor((file.length/1000000))+"M");
		return;
	}
	$.ajax({
		url:"upimg.do",
		data:{
			"meaid":mealId,
			"file":file
		},
		type:"POST",
		success:function(result){
			alert("上传成功")
			returnMealList1();
		}
	});
}



