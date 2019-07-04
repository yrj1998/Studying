function ajaxLoading(msg,msgMaginTop){
	//信息提示
	var default_msg = '正在处理，请稍后。。。';
	//信息布局位置向上内边距
	var default_msgMaginTop= -45;
	var _msg = '';
	var _msgMaginTop=0;
	// 判断参数
	if (msg == 'undefined') {
		_msg = default_msg;
	} else {
		_msg = msg;
	}	
	if (msgMaginTop == 'undefined') {
		_msgMaginTop = default_msgMaginTop;
	} else {
		_msgMaginTop = msgMaginTop;
	}	
	//$("<div class=\"datagrid-mask\"></div>").css({display:"block",width:"100%",height:$(window).height()}).appendTo("body");
	$("<div class=\"datagrid-mask\"></div>").css({display:"block",width:"100%",height:"100%"}).appendTo("body");
	$("<div class=\"datagrid-mask-msg\"><img src=\" /order/static/css/default/images/pagination_loading.gif \" width='50px' height='50px'/></div>").html(_msg).appendTo("body").css({display:"block",left:($(document.body).outerWidth(true) ) / 2,top:(document.body.offsetHeight + _msgMaginTop) / 2});
}
 
function ajaxLoadEnd(){
	$(".datagrid-mask").remove();
	$(".datagrid-mask-msg").remove();
}
