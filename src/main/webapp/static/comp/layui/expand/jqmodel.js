/**
 * 平台弹出框
 */
layui.define(["jquery","layer"],function(exports){
	var $ = layui.jquery,layer = layui.layer;
	var f = function(){}
	$("body").on('click.bs.modal',"[modal-toggle='modal']",function ( e ) {
		e.preventDefault();
		var title = $(this).data("title");
		var url = $(this).data("href");
		var width = $(this).data("width");
		var height =$(this).data("height");
		if(width!=undefined)width = parseInt(width);
		else width =800;
		if(height!=undefined)height = parseInt(height);
		elseheight = 400;
		layer.open({
	        type: 2,title: title
	        ,area: [width+"px", height+"px"]
	        ,shade: 0.8,maxmin: true
	        ,content: url,zIndex: layer.zIndex //重点1
	        ,success: function(layero){
	          layer.setTop(layero); //重点2
	        }
	    });
	});
	exports("jqmodel",{});
});