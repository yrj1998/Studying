<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
    
<%
    String path=request.getContextPath();
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<html>
	<head>
	    <meta charset="UTF-8">
	    <title>CSI餐厅小筑外卖网</title>
		<meta name="renderer" content="webkit|ie-stand"/>
		<meta content="IE=edge" http-equiv="X-UA-Compatible"/>
		<meta name="description" content="">
		<meta name="keywords" content="">
		<meta name="generator" content="" />
		<meta content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' name='viewport'>
		
		<link rel="stylesheet" href="<%=path %>/static/css/default/bootstrap/bootstrap.css" />
		<!-- Font Awesome Icons -->
		
		<link rel="stylesheet" href="<%=path %>/static/css/default/simple-line-icons/css/simple-line-icons.css"/>
		
		<!-- Ionicons -->
		
		<!-- Skins. Choose a skin from the css/skins
	     folder instead of downloading all of them to reduce the load. -->
	     
		<!-- Castle 1.0 -->
		
		<!-- Theme style -->

		<link href="<%=path %>/static/comp/layui/css/layui.css" rel="stylesheet" type="text/css" />
		<link href="<%=path %>/static/comp/scrollbar/perfect-scrollbar.css" rel="stylesheet" type="text/css" />
		
			
	    <link rel="stylesheet" href="<%=path %>/static/css/default/mask.css" />
		  
		
		<link href="<%=path %>/static/loginUI/css/font-awesome.css" rel="stylesheet"/>
		<link href="<%=path %>/static/loginUI/css/animate.min.css" rel="stylesheet"/>
		<link href="<%=path %>/static/loginUI/css/ionicons.css" rel="stylesheet" type="text/css" />
		<link href="<%=path %>/static/loginUI/css/_all-skins.css" rel="stylesheet" type="text/css" />
		<link href="<%=path %>/static/loginUI/css/castle.css" rel="stylesheet" type="text/css" />
		<link href="<%=path %>/static/loginUI/css/castle-main.css" rel="stylesheet" type="text/css" />
		<link href="<%=path %>/static/loginUI/css/fontsize.css" rel="stylesheet" type="text/css" />
		<link href="<%=path %>/static/loginUI/css/theme.css" rel="stylesheet"/>
		<link href="<%=path %>/static/loginUI/css/cover.css" rel="stylesheet"/>
		<link href="<%=path %>/static/loginUI/css/step.css" rel="stylesheet"/>
		<link href="<%=path %>/static/loginUI/css/loginUI.css" rel="stylesheet" type="text/css">
		<!--  
		<script language="JavaScript">
		var context="/order",__contextPath="/order",__extendOptions="main/options",__jsPath="/order/gdsp/js",__scriptPath="/order/gdsp/script";
		</script>
		-->
	
		<script src="<%=path %>/static/comp/base/jquery-2.1.4.js"></script>
		<script src="<%=path %>/static/comp/base/utils-base.js"></script>
	
		<script src="<%=path %>/static/comp/layui/layui.js"></script>
		<script src="<%=path %>/static/comp/layui/layui-config.js"></script>
		<script src="<%=path %>/static/js/common/util.js"></script>
		<script src="<%=path %>/static/js/common/autoheight.js"></script>
		<script src="<%=path %>/static/js/common/mask.js"></script>
	
		
		<script type="text/javascript" src="<%=path %>/static/loginUI/js/lufylegend-1.10.1.simple.min.js"></script>
		<script type="text/javascript" src="<%=path %>/static/loginUI/js/lufylegend.LoadingSample4-0.1.0.min.js"></script>
		<script type="text/javascript" src="<%=path %>/static/loginUI/js/TweenLite.min.js"></script>
		<script type="text/javascript" src="<%=path %>/static/loginUI/js/loginUI.js"></script>
		<script type="text/javascript" src="<%=path %>/static/comp/jQuery-Storage-API/jquery.storageapi.js" ></script>
		<script type="text/javascript" src="<%=path %>/chinasofti/userlogin/js/userlogin.js"></script>
		<script type="text/javascript" src="<%=path %>/static/js/alert.js"></script>
		

		<script src="<%=path %>/static/js/app/app.js"></script>
	</head>
	

	<body style="width: 100%;height: 100%;margin: 0;padding: 0; ">
		<div class="bg-canvas">
			<canvas id="demo-canvas" width="100%" height="100%" style="width: 100%;height: 99%;overflow: hidden;"></canvas>
		</div>
		<div class="login-box" id="loginbox">
		    <!-- /.login-logo -->
			<div class="login"  id="main_login" >     
			   
				<div class="input_text" >   
					<div id="message"style="position:absolute;color:red;margin-top:-20px;margin-left:100px;" > </div>
				
					
						<div class="content" >
							<div class="navbar-header">
					           	<div>
									<span style="font-family:'Britannic Bold', 'Britannic';color:#3BC5BB;">CSI餐厅小筑</span>
									<span style="font-family:'Segoe UI Emoji Bold', 'Segoe UI Emoji Normal', 'Segoe UI Emoji';color:#1D4474;"></span>
									<span style="font-family:'Segoe UI Emoji Bold', 'Segoe UI Emoji Normal', 'Segoe UI Emoji';color:#FF9A4C;">外卖网</span>
								</div>
					        </div>
					        <div class="formitem">
					        	<span class="icon fa fa-user"></span>
					        	<span class="input">
					        		<input id="loginName" name="loginName" value="" class="form-control l35" fv_type="NOTCN" type="text" maxlength="20" placeholder="请输入您的用户名" value=""  data-toggle="tooltip" data-placement="right">
					        	</span>
					        </div>
					        <div class="formitem">
					        	<span class="icon fa fa-key"></span>
					        	<span class="input">
					        		<input id="loginPwd" name="loginPwd" value="" class="form-control highlight_green l35" fv_type="NOTCN" type="password"  maxlength="6" placeholder="请输入您的密码"  data-toggle="tooltip" data-placement="right">
					        	</span>
					        </div>
					        <div class="formoperate">
					        	<span class="rememberPwd" >
					        		<input type="checkbox" id="rememberPwd"/><label for="rememberPwd">记住密码</label>
					        	</span>
					        </div>
					        <div >
					        	<button type="button" onclick="subLogin()" id="login-submit-btn" class="layui-btn  btn-login"  style="width:100px">&nbsp;&nbsp;登　录&nbsp;&nbsp;</button>
					       	    <button type="button" title="刷脸登录" data-search-open="" data-title="刷脸登录" modal-toggle="modal" data-href="userFace.jsp" data-width="780" data-height="500" class="layui-btn  btn-login"  style="width:100px">&nbsp;&nbsp;刷    脸&nbsp;&nbsp;</button>
						    	<button type="button" title="用户注册" data-search-open="" data-title="用户注册" modal-toggle="modal" data-href="userRegister.jsp" data-width="780" data-height="500" class="layui-btn  btn-login"  style="width:100px">&nbsp;&nbsp;注    册&nbsp;&nbsp;</button>
						    </div> 
						 
						 
						    <div class="formoperate" id="tishi" style="text-align: center;color: red;padding-top: 15px">
					     

					        </div> 
						</div>
				</div>
			</div>
		</div>
		
	
	</body>
</html>