/**
 * @Time:2018-03-16
 * @Author:guanying.xu
 * @Function:自动给元素设置高度.
 * @Parameter:num为缓冲参数，即需要减去的高度.className为自定义的类名
 * @
 */

var boxBody = {
		
	    setHeight:function(num,className){
	    	if(num==""||num==false){
	    		num = 0;
			}else{
				num = num;
			}
			    var winH = window.innerHeight;
			    winH = parseInt(winH)-parseInt(num);
			    $("."+className).css("height",winH);	  
			}
};



$(document).ready(function(){
	boxBody.setHeight(50,"bHeightF");
	boxBody.setHeight(85,"bHeightE");
	
});
$(window).on("resize",function() {
	boxBody.setHeight(50,"bHeightF");
	boxBody.setHeight(85,"bHeightE");
});


