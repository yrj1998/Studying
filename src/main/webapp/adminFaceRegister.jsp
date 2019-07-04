<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<base href="<%=basePath%>">
<title>管理员人脸注册</title>
<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">



<link rel="stylesheet" type="text/css" href="<%=path %>/static/comp/face/css/style.css" />
<link rel="stylesheet" href="<%=path %>/static/css/default/mask.css" />
<script type="text/javascript" src="<%=path %>/static/comp/face/js/jquery-1.4.4.min.js"></script>
<style>
body {
	height: 100%;
	background: #213838;
	overflow: hidden;
}

canvas {
	z-index: -1;
	position: absolute;
}
</style>


<script src="<%=path %>/static/comp/face/js/jquery.js"></script>
<script src="<%=path %>/static/comp/face/js/verificationNumbers.js"></script>
<script src="<%=path %>/static/comp/face/js/Particleground.js"></script>
<script src="<%=path %>/static/js/common/mask.js"></script>
<script>
$(document).ready(function() {
  //���ӱ�����Ч
  $('body').particleground({
    dotColor: '#5cbdaa',
    lineColor: '#5cbdaa'
  });
  //��֤��
  createCode();
  //�����ύ���Խӳ���ɾ������
  //$(".submit_btn").click(function(){
	 // localhost.href="index.jsp";
	  //});
});
</script>


<style type="text/css">
* {
	margin: 0;
	padding: 0;
}

body {
	height: 100vh;
	background-position: center;
	overflow: hidden;
}

h1 {
	color: #fff;
	text-align: center;
	font-weight: 100;
	margin-top: 40px;
}

#media {
	width: 100%;
	height: 250px;
	margin: 10px auto 0;
	border-radius: 30px;
	overflow: hidden;
	opacity: 0.7px;
}

#video {
	
}

#canvas {
	display: none;
}

#btn {
	width: 160px;
	height: 50px;
	background: #03a9f4;
	margin: 70px auto 0;
	text-align: center;
	line-height: 50px;
	color: #fff;
	border-radius: 40px;
}
</style>
</head>

<body>


		<dl class="admin_login">
			<dt>
				<strong>CSI餐厅小筑外卖网</strong><em></em> <strong>请把你的脸放摄像头面前</strong>
			</dt>
			<div id="media">
				<video id="video" width="100%" height="300" autoplay></video>
				<canvas id="canvas" width="530" height="300"></canvas>
			</div>
			<dd>
				<input type="button" onclick="query()" value="立即注册"
					class="submit_btn" />
			</dd>

		</dl>
		<script type="text/javascript" src="<%=path %>/static/js/alert.js"></script>
		<script type="text/javascript">
  		//var �Ƕ������
  		var video = document.getElementById("video"); //��ȡvideo��ǩ
  		var context = canvas.getContext("2d");
  		var con  ={
  			audio:false,
  			video:true,
  			video:{
  			width:1980,
  			height:1024,
  			
  			}
  		};	
  		
  		//���� ��ȡ�û�ý�����
  			navigator.mediaDevices.getUserMedia(con)
  			.then(function(stream){
  				try{
  					video.src = window.URL.createObjectURL(stream);
  				}catch(e){
  					video.srcObject=stream;
  				}
  				
  				video.onloadmetadate = function(e){
  					video.play();
  				
  				}
  			});
  	
  			
  			
  	
  			function query(){
  				
  				//����ý�����ݻ���convas������ȥ
  				context.drawImage(video,0,0,530,300);
  				var base = getBase64();
  
  				$.MsgBox.Alert("消息","注册成功");
			
				
				//window.parent.location.replace("../main.html");
			}
			function getBase64() {
				var imgSrc = document.getElementById("canvas").toDataURL(
						"image/png");
				
				return imgSrc.split("base64,")[1];

			};
		</script>

</body>
</html>