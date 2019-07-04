/*
作者：sjm
时间：2018-05-18
描述：开发时根据实际情况注释掉或更改
*/
var context=""

/**
 * 配置layui的路径
 */

layui.config({
	
	dir : context + 'static/comp/layui/',
	version : false,
	debug : false,
	base : context + 'static/comp/layui/expand/'
})
//.extend({
//    jqmodel: 'jqmodel',
//    jqtab: 'jqtab'
//})
;
layui.context = context;
