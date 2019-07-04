/*少数不需要requersjs按需加载的工具类等*/

/** 打开页签（仅工作在多页签模式下） */
function openTabFromIframe(tabid,tabtitle,taburl,jtabDivId,isReload){
	var param={};
	param['id']=tabid;
	param['title']=tabtitle;
	param['url']=__contextPath + taburl;
	param['ajax']=false;
	var _jtabDivId = "jtabs-titlesid-xg"
	if(jtabDivId){
		_jtabDivId = jtabDivId;
	}
	/*
	var _parent = window.parent;
	if(!_parent){
		_parent=window;
	}
	//alert($("#"+_jtabDivId,_parent.document).html());
	$("#"+_jtabDivId,_parent.document).jtabs("add",param);
	*/
	if($F.Jtabs==undefined){//未开启多页签
		window.location.href=__contextPath + taburl;
	}else{
		$("#"+_jtabDivId).jtabs("add",param);
	}
	if(isReload=="active"){
		var loadId = "tab_"+tabid;
		var loadUrl = __contextPath+taburl
		var srcUrl = $("#"+loadId+" iframe").attr("src");
		if(loadUrl!=srcUrl){
			$("#"+loadId+" iframe").attr("src", loadUrl);	
		}
	}
}



/** 浏览器关闭或系统退出时干一些事情 */
/*
window.onbeforeunload = beforeClose;
window.onunload  = beforeClose;
function beforeClose(event){
	if (event.clientX<=0 && event.clientY<0) {
//		window.location = __contextPath + "/grant/role/list.d";
		// 测试是否可以调到
		$.get(__contextPath + "/logout.d");	
	}
	var y = window.event.clientY;//e.clientY：只有IE8支持
	if ((window.event.screenX - window.screenLeft) > (document.documentElement.scrollWidth - 20) && 
			window.event.clientY < 0 || window.event.altKey) {
		$.get(__contextPath + "/grant/role/list.d");	
	}
}
*/
