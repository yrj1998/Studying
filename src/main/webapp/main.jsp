<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%
    String path=request.getContextPath();
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>

	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<meta http-equiv="pragma" content="no-cache">
		<meta http-equiv="cache-control" content="no-cache">
		<meta http-equiv="expires" content="0">    
		<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
		<meta http-equiv="description" content="This is my page">
		<link rel="icon" href="<%=path %>/static/css/default/icon.png" type="image/x-icon" />
		<title>CSI员工之家</title>

		
		<link rel="stylesheet" href="<%=path %>/static/loginUI/css/font-awesome.min.css" />
		<link rel="stylesheet" href="<%=path %>/static/css/default/simple-line-icons/css/simple-line-icons.css" />
		<link rel="stylesheet" href="<%=path %>/static/comp/animate.css/animate.min.css" />
		<link rel="stylesheet" href="<%=path %>/static/css/default/toastr/toastr.min.css" />
		<link rel="stylesheet" href="<%=path %>/static/css/default/bootstrap/bootstrap.css" />
		<link rel="stylesheet" href="<%=path %>/static/css/default/app.css" />
		<link rel="stylesheet" href="<%=path %>/static/css/default/theme.css" data-type="theme" />
		<link rel="stylesheet" href="<%=path %>/static/css/default/cover.css" />
		<link rel="stylesheet" href="<%=path %>/static/css/default/step.css" />
		<link rel="stylesheet" href="<%=path %>/static/comp/tabs/tabs.css" />
	
	</head>

	<body class="layout-fixed">
		<script language="JavaScript">
			var context="",__contextPath="",__extendOptions="main/options";
		</script>
		<div fragment="navbar" class="wrapper" role="navigation">
			<script type="text/javascript">
				var module = "09282248e3ed4fb4a7d3c1c8585a7eb0";
			</script>
			<nav class="navbar topnavbar" style="min-height:44px;" role="navigation" >
				<div class="navbar-header" style="width:20%;text-align: left;">
					<span class="navbar-brand navbar-brand-h" >
				
					   
		        		<div class="brand-text" style="padding-top: 3px;">
		        		    <img alt="" src="<%=path %>/static/images/main/head/logo/LOGO.jpg">
							<span style="font-family:'Britannic Bold', 'Britannic';color:#3BC5BB;">CSI餐厅小筑</span>
							<span style="font-family:'Segoe UI Emoji Bold', 'Segoe UI Emoji Normal', 'Segoe UI Emoji';color:#1D4474;"> </span>
							<span style="font-family:'Segoe UI Emoji Bold', 'Segoe UI Emoji Normal', 'Segoe UI Emoji';color:#FF9A4C;">外卖网</span>
						</div>
					</span>
				</div>

				<div class="sysMenu" style="display: none;">
					<ul>

					</ul>
				</div>
		<div class="nav-wrapper">
			<ul class="nav navbar-nav navbar-right">
				<li>
					<a>
						<span class="user-name-csdc" id="userNameSpan"></span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<img src="<%=path %>/static/images/StatBar_time.gif">&nbsp;&nbsp;<span id="nowTime"></span>
					</a>
				</li>
		
				<li >
					<a id="editPasswordId" class="menu-icons" title="修改密码" data-search-open="" data-title="修改密码" modal-toggle="modal" data-href="" data-width="780" data-height="300">
						<em class="fa fa-gear main-op" style="font-size:13px">修改密码</em>
					</a>
				</li>
				<li>
					<a id="faceRegisterId" class="menu-icons" title="人脸注册" data-search-open="" data-title="人脸注册" modal-toggle="modal" data-href="" data-width="780" data-height="500">
						<em class="fa fa-gear main-op" style="font-size:13px">人脸注册</em>
					</a>
				</li>
				<li id="aaa" style="display:none">
					<a id="mapId" class="menu-icons" title="查看地图" data-search-open="" data-title="查看地图" modal-toggle="modal" data-href="" data-width="780" data-height="500">
						<em class="fa fa-gear main-op" style="font-size:13px">查看地图</em>
					</a>
				</li>
				<li class="dropdown">
					<a class="menu-icons" title="退出登录" data-no-persist="true" href="" onclick="loginOut(); return false;">
						<!--<a class="menu-icons" title="退出登录" data-no-persist="true" href="logout.d">-->
						<em class="fa fa-power-off  main-op" style="font-size:13px">退出登录</em>
					</a>
				</li>
			</ul>
		</div>
		</nav>
		
		<aside class="aside">
		
			<div class="aside-inner">
			 
				<nav class="sidebar" data-sidebar-anyclick-close="">
				
					<ul class="nav" id="leftMenuNav">
						
					</ul>
				
				</nav>
				
			</div>
				
		</aside>
	
	
		<section id="content">
			<div id="funTab"></div>
		</section>
			
		</div>
		
		<script src="<%=path %>/static/comp/sidebar/sidebar.js"></script>
		<script src="<%=path %>/static/comp/jquery/dist/jquery.js"></script>
		<script src="<%=path %>/static/comp/jquery.form/jquery.form.min.js"></script>
		<script src="<%=path %>/static/comp/jquery/plugins/scrollbar/perfect-scrollbar.jquery.min.js"></script>
		<script src="<%=path %>/static/comp/layui/layui.js"></script>
		<script src="<%=path %>/static/comp/layui/layui-config.js"></script>
		<script src="<%=path %>/static/comp/bootstrap/dist/js/bootstrap.js"></script>
		<script src="<%=path %>/static/comp/modernizr/modernizr.custom.js"></script>
		<script src="<%=path %>/static/comp/jQuery-Storage-API/jquery.storageapi.js"></script>
		<script src="<%=path %>/static/comp/parsleyjs/dist/parsley.min.js"></script>
		<script src="<%=path %>/static/comp/toastr/toastr.min.js"></script>
		
		<script src="<%=path %>/static/js/common/util.js"></script>
		<script src="<%=path %>/static/js/app/app.js"></script>
		<script src="<%=path %>/static/js/app/menu.js"></script>
		<script src="<%=path %>/static/js/common/autoheight.js"></script>
		<script type="text/javascript" src="<%=path %>/static/js/fkjava_timer.js"></script>
	<script type="text/javascript">
		    /** 文档加载完成后立即执行的方法 */
		    // var weeks = new Array();
			
		    $(function(){
		    	$("#nowTime").runTimer();
		
			})
			
		    
		    
		</script>
	</body>

</html>