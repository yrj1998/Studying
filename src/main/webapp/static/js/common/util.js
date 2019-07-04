layui.use("layer");
var shadeIndex=null;
/**
 * 显示遮罩
 */
function showShade(){
	shadeIndex = layui.layer.load(2, { shade: [0.7,'#000']});
}
/**
 * 关闭层
 */
function hideShade(){
	if(shadeIndex!=null){
		layui.layer.close(shadeIndex);
		shadeIndex = null;
	}
}
/**
 * 显示提示信息
 * @param title
 * @param msg
 */
function showMsg(title,msg){
	
}

/**
 * 显示警告信息
 * @param title
 * @param msg
 */
function showWarn(title,msg){
	
}

/**
 * 显示错误信息
 * @param title
 * @param msg
 */
function showError(title,msg){
	
}