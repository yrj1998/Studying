<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html style="height: auto;">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
		<title>修改密码</title>

		<link rel="stylesheet" href="<%=path %>/static/css/default/bootstrap/bootstrap.css">
		<link rel="stylesheet" href="<%=path %>/static/comp/fontawesome/css/font-awesome.min.css">
		<link rel="stylesheet" href="<%=path %>/static/comp/ionicons/css/ionicons.min.css">
		<link rel="stylesheet" href="<%=path %>/static/comp/adminlte/css/adminlte.css">
		<link rel="stylesheet" href="<%=path %>/static/css/default/mask.css" />
	</head>

	<body style="height: auto;">
		
		
		<button id="userid" value="${sessionScope.u.id}" style="display: none"></button>
		
		
		
		<!--<div id="ORG_ADD_DIV_ID" class="card card-info" style="display:none">  -->
		<div id="POST_ADD_DIV_ID" class="card card-info">
	        <input id="regUUID" type="hidden" value=""/>
	        <div class="form-horizontal">
				<div class="card-body">
			             <div class="form-group" >
			                 <label for="JI_JOB_NAME" class="col-sm-2 control-label">新的密码：</label>
			              	  <div class="col-sm-10" >
			                 	<input value="" type="password" name="newPassword" id="newPassword" class="form-control" maxlength="6" placeholder="请输入您的新密码" style="width:600px"  >
			                 </div>
			            </div>
			            <div class="form-group" >
			                 <label for="JI_JOB_NAME" class="col-sm-2 control-label">确认密码：</label>
			              	 <div class="col-sm-10" >
			                 	<input value="" type="password" name="newPasswordCon" id="newPasswordCon" class="form-control" maxlength="6" placeholder="请确认您的新密码" style="width:600px"  >
			                 </div>
			            </div>
			           <div class="form-group" >
			                 <label for="JI_JOB_NAME" class="col-sm-2 control-label">当前密码：</label>
			              	 <div class="col-sm-10" >
			                 	<input value="" type="password" name="oldPassword" id="oldPassword" class="form-control" maxlength="6" placeholder="请输入您的当前密码" style="width:600px"  >
			                 </div>
			            </div>
			              <!-- /.card-body -->
	             <div class="card-footer col-md-3 col-md-offset-4" style="width:100%"align="center">
	               <button type="button" class="btn btn-info" onclick="userSubPassword()">提交</button>
	             </div>
	             <div class="card-footer col-md-3 col-md-offset-4" id="tishi" style="text-align: center;color: red;font-size: 15px">
									     
						</div>
	             <!-- /.card-footer -->
	             </div>
	             
	           
	        </div>
	    </div>
		
		
		
		
		
		<script src="<%=path %>/static/comp/jquery/dist/jquery.js"></script>
		<script src="<%=path %>/static/comp/jQuery-Storage-API/jquery.storageapi.js"></script>
		<script src="<%=path %>/static/comp/jquery.form/jquery.form.min.js"></script>
		<script src="<%=path %>/static/comp/jquery/plugins/scrollbar/perfect-scrollbar.jquery.min.js"></script>
		
		<script src="<%=path %>/static/kindeditor/kindeditor-all.js" type="text/javascript"></script> 
		<script src="<%=path %>/static/kindeditor/kindeditor-all-min.js" type="text/javascript"></script>
		<script src="<%=path %>/static/kindeditor/lang/zh-CN.js" type="text/javascript"></script>
		<script src="<%=path %>/static/js/common/mask.js"></script>
		<script src="<%=path %>/chinasofti/editPassword/js/editPassword.js"></script>
		<script type="text/javascript" src="<%=path %>/static/js/alert.js"></script>
		
		<!--  
		<script src="/stmadc/stma/dc/include/js/jcommon.js"></script>
		
		<script language="JavaScript" src="/stmadc/jquery/jquery-ui-1.8.20.min.js"></script>
		<script src="/stmadc/static/comp/bootstrap/dist/js/bootstrap.js"></script>
		<script src="/stmadc/static/comp/adminlte/js/adminlte.min.js"></script>
		<script language="JavaScript" src="/stmadc/stma/dc/include/js/jcommon.js"></script>
	-->


</body></html>