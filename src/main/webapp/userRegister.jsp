<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%
    String path=request.getContextPath();
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html style="height: auto;">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
		<title>用户注册</title>

		<link rel="stylesheet" href="<%=path %>/static/css/default/bootstrap/bootstrap.css">
		<link rel="stylesheet" href="<%=path %>/static/comp/fontawesome/css/font-awesome.min.css">
		<link rel="stylesheet" href="<%=path %>/static/comp/ionicons/css/ionicons.min.css">
		<link rel="stylesheet" href="<%=path %>/static/comp/adminlte/css/adminlte.css">
		<link rel="stylesheet" href="<%=path %>/static/css/default/mask.css" />
	</head>

	<body style="height: auto;">

		<!--<div id="ORG_ADD_DIV_ID" class="card card-info" style="display:none">  -->
		<div id="POST_ADD_DIV_ID" class="card card-info">
	        <input id="regUUID" type="hidden" value=""/>
	        <div class="form-horizontal">
				<div class="card-body">
			             <div class="form-group" >
			                 <label for="JI_JOB_NAME" class="col-sm-2 control-label">用户名：</label>
			              	 <div class="col-sm-10" >
			                 	<input value="" type="text" name="addLoginName" id="addLoginName" class="form-control" style="width:600px"  maxlength="20">
			                 </div>
			             </div>
			             <div class="form-group" >
			                 <label for="JI_JOB_NAME" class="col-sm-2 control-label">密码：</label>
			                 <div class="col-sm-10" >
			                 	<input value="" type="password" name="addLoginPwd" id="addLoginPwd" class="form-control" style="width:600px"  maxlength="6">
			                 </div>
			             </div>
			           <div class="form-group" >
			                 <label for="JI_JOB_NAME" class="col-sm-2 control-label">真实姓名：</label>
			                 <div class="col-sm-10" >
			                 	<input value="" type="text" name="addTrueName" id="addTrueName" class="form-control" style="width:600px"  maxlength="20">
			                 </div>
			             </div>
			             <div class="form-group" >
			                 <label for="JI_JOB_NAME" class="col-sm-2 control-label">电子邮箱：</label>
			                 <div class="col-sm-10" >
			                 	<input value="" type="text" name="addEmail" id="addEmail" class="form-control" style="width:600px"  maxlength="20">
			                 </div>
			              </div>
			              <div class="form-group" >
			                 <label for="JI_JOB_NAME" class="col-sm-2 control-label">手机号码：</label>
			                 <div class="col-sm-10" >
			                 	<input value="" type="text" name="addPhone" id="addPhone" class="form-control" style="width:600px"  maxlength="20">
			                 </div>
			              </div>
			              <div class="form-group" >
			                 <label for="JI_JOB_NAME" class="col-sm-2 control-label">送货地址：</label>
			                 <div class="col-sm-10" >
			                 	<input value="" type="text" name="addAddress" id="addAddress" class="form-control" style="width:600px"  min="50" >
			                 </div>
			       		  </div>
			              <!-- /.card-body -->
	             <!-- /.card-body -->
			             <div class="card-footer col-md-3 col-md-offset-4" style="width:100%"align="center">
			               <button type="button" class="btn btn-info" onclick="addUserCheck()">提交</button>
			             </div>
			             <!-- /.card-footer -->
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
		<script src="<%=path %>/chinasofti/userlogin/js/userRegister.js"></script>
		<script type="text/javascript" src="<%=path %>/static/js/alert.js"></script>
		
		<!--  
		<script src="/stmadc/stma/dc/include/js/jcommon.js"></script>
		
		<script language="JavaScript" src="/stmadc/jquery/jquery-ui-1.8.20.min.js"></script>
		<script src="/stmadc/static/comp/bootstrap/dist/js/bootstrap.js"></script>
		<script src="/stmadc/static/comp/adminlte/js/adminlte.min.js"></script>
		<script language="JavaScript" src="/stmadc/stma/dc/include/js/jcommon.js"></script>
	-->
	</body>
</html>