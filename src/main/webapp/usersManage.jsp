<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html style="height: auto;"><head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
		<title>CSI餐厅小筑外卖网</title>

		<link rel="stylesheet" href="<%=path %>/static/css/default/bootstrap/bootstrap.css">
		<link rel="stylesheet" href="<%=path %>/static/comp/fontawesome/css/font-awesome.min.css">
		<link rel="stylesheet" href="<%=path %>/static/comp/ionicons/css/ionicons.min.css">
		<link rel="stylesheet" href="<%=path %>/static/comp/adminlte/css/adminlte.css">
		<link rel="stylesheet" href="<%=path %>/static/css/default/mask.css">
		
		<link rel="stylesheet" href="<%=path %>/static/comp/cropper/css/cropper.min.css">
    	<link rel="stylesheet" href="<%=path %>/static/comp/cropper/css/ImgCropping.css">
	</head>

	<body style="height: auto;">
		
		
		<!--  <div class="container-fluid" id="ORG_LIST_DIV_ID">-->
		<div class="container-fluid" id="USERS_LIST_DIV_ID" style="display:block;">
			<div class="row">
				<div class="col-md-12" style="">
					<div class="card card-info">
						<div class="card-header">
							<h3 class="card-title">查询条件</h3>
						</div>
						<div class="card-body">
							<div class="row">
								<div class="col-md-11">
									<div class="form-inline">
										<div class="form-group col-md-4">
											<label for="SEARCH_ORG_NAME" class="col-md-4">用户名：</label>
											<div class="col-md-8">
												<input type="hidden" id="SEARCH_USER_NAMW_HIDDEN" name="SEARCH_USER_NAMW_HIDDEN" value="">
												<input type="text" id="SEARCH_USER_NAMW" name="SEARCH_USER_NAMW" size="20" value="" class="form-control" placeholder="请输入用户名">
											</div>
										</div>
									</div>
								</div>
								<div class="col-md-1">
									<button class="btn btn-block btn-info" onclick="searchByUserName()">查询</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<div class="row">
				<div class="col-12">
					<div class="card">
						<div class="card-header" style="width:100%">
							<h3 class="card-title col-md-3">当前：<span id="LABLE_FATHER_ORG_NAME">用户管理-普通用户</span></h3>
							<div class="col-md-2 col-md-offset-7" id="userAddDiv"><button class="btn  btn-success btn-sm" type="button" onclick="ADD_USER()">新增</button>&nbsp;&nbsp;</div>
						</div>
						<div class="card-body">
							<div id="example2_wrapper" class="dataTables_wrapper container-fluid dt-bootstrap4">
								<div class="row">
									<div class="col-sm-12 col-md-6"></div>
									<div class="col-sm-12 col-md-6"></div>
								</div>
								
								<div class="row">
									<div class="col-sm-12">
										<table id="example2" class="table table-bordered table-hover dataTable" role="grid">
											<thead>
												<tr role="row">
	
													<th style="text-align:center;" class="sorting" rowspan="1" colspan="1">用户名</th>
													<th style="text-align:center;" class="sorting" rowspan="1" colspan="1">真实姓名</th>
													<th style="text-align:center;" class="sorting" rowspan="1" colspan="1">电子邮箱</th>
													<th style="text-align:center;" class="sorting" rowspan="1" colspan="1">手机号码</th>
													<th style="text-align:center;" class="sorting" rowspan="1" colspan="1">送货地址</th>
													<th style="text-align:center;" class="sorting" rowspan="1" colspan="1">操作</th>
			
												</tr>
											</thead>
											<tbody id="POST_LIST_TBODY_ID">
											<!-- <tr bgcolor="#FFFFFF">		
											<td valign="center" align="center" width="30">wangxh		</td>	
												<td valign="center" align="center" width="30">王晓华		</td>		
												<td valign="center" align="center" width="30">1111@qq.com		</td>		
												<td valign="center" align="center" width="30">13123433432		</td>		
												<td valign="center" align="center" width="30">北京市海淀区苏州街长远天地大厦A1座502		</td>		
												<td valign="center" align="center" width="30">			
												<a href="" onclick="users_edit('1'); return false;">编辑</a>           
												&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;			
												<a href="" onclick="users_delete('1'); return false;">删除</a> 		
												</td></tr> -->
											</tbody>
											<tfoot></tfoot>
										</table>
									</div>
								</div>
								
								<div class="row">
									<!--分页文字信息  -->
									<div class="col-md-6" id="page_info_area"></div>
									<!-- 分页条信息 -->
									<div class="col-md-6" id="page_nav_area"></div>
								</div>
							</div>
						</div>
						<!-- /.card-body -->
					</div>

				</div>

			</div>

		</div>
		
		<div id="USER_ADD_DIV_ID" class="card card-info" style="display:none;">
	    	<div class="card-header">
	             <h3 class="card-title">用户添加</h3>
	        </div> 
	        <div class="form-horizontal">
	        							
	             <div class="card-body">
			             <div class="form-group">
			                 <label for="JI_JOB_NAME" class="col-sm-2 control-label">用户名：</label>
			              	 <div class="col-sm-10">
			                 	<input value="" type="text" name="addLoginName" id="addLoginName" class="form-control" style="width:900px" maxlength="20">
			                 </div>
			             </div>
			             <div class="form-group">
			                 <label for="JI_JOB_NAME" class="col-sm-2 control-label">密码：</label>
			                 <div class="col-sm-10">
			                 	<input value="" type="password" name="addLoginPwd" id="addLoginPwd" class="form-control" style="width:900px" maxlength="6">
			                 </div>
			             </div>
			             <div class="form-group">
			                 <label for="JI_JOB_NAME" class="col-sm-2 control-label">真实姓名：</label>
			                 <div class="col-sm-10">
			                 	<input value="" type="text" name="addTrueName" id="addTrueName" class="form-control" style="width:900px" maxlength="20">
			                 </div>
			             </div>
			             <div class="form-group">
			                 <label for="JI_JOB_NAME" class="col-sm-2 control-label">电子邮箱：</label>
			                 <div class="col-sm-10">
			                 	<input value="" type="text" name="addEmail" id="addEmail" class="form-control" style="width:900px" maxlength="20">
			                 </div>
			              </div>
			              <div class="form-group">
			                 <label for="JI_JOB_NAME" class="col-sm-2 control-label">手机号码：</label>
			                 <div class="col-sm-10">
			                 	<input value="" type="text" name="addPhone" id="addPhone" class="form-control" style="width:900px" maxlength="20">
			                 </div>
			              </div>
			              <div class="form-group">
			                 <label for="JI_JOB_NAME" class="col-sm-2 control-label">送货地址：</label>
			                 <div class="col-sm-10">
			                 	<input value="" type="text" name="addAddress" id="addAddress" class="form-control" style="width:900px" min="50">
			                 </div>
			       		  </div>
			           
			             <!-- /.card-body -->
			             <div class="card-footer col-md-3 col-md-offset-4" style="width:100%" align="center">
			               <button type="button" class="btn btn-info" onclick="addUserCheck()">提交</button>
			               <button type="button" class="btn btn-default" onclick="returnUserList()">返回</button>
			             </div>
			             <!-- /.card-footer -->
			             <div class="card-footer col-md-3 col-md-offset-4" id="tishi" style="text-align: center;color: red;font-size: 15px"></div>
	             </div>
	            
	        </div>
	    </div>
	    
	    <div id="USER_EDIT_DIV_ID" class="card card-info" style="display:none;">
	    	<div class="card-header">
	             <h3 class="card-title">编辑用户</h3>
	        </div> 
	        <div class="form-horizontal">
	        							
	             <div class="card-body">
			             <div class="form-group">
			                 <label for="JI_JOB_NAME" class="col-sm-2 control-label">用户名：</label>
			              	 <div class="col-sm-10">
			              	    <input value="" type="hidden" name="editId" id="editId" class="form-control" style="width:900px" maxlength="20">
			                 	<input value="" type="text" name="editLoginName" id="editLoginName" class="form-control" style="width:900px" maxlength="20" readonly="readonly">
			                 </div>
			             </div>
			             <div class="form-group">
			                 <label for="JI_JOB_NAME" class="col-sm-2 control-label">密码：</label>
			                 <div class="col-sm-10">
			                	 <input value="" type="hidden" name="editLoginPwdHidder" id="editLoginPwdHidder" class="form-control" style="width:900px" maxlength="6">
			                 	<input value="" type="password" name="editLoginPwd" id="editLoginPwd" class="form-control" style="width:900px" maxlength="6">
			                 </div>
			             </div>
			             <div class="form-group">
			                 <label for="JI_JOB_NAME" class="col-sm-2 control-label">真实姓名：</label>
			                 <div class="col-sm-10">
			                 	<input value="" type="text" name="editTrueName" id="editTrueName" class="form-control" style="width:900px" maxlength="20">
			                 </div>
			             </div>
			             <div class="form-group">
			                 <label for="JI_JOB_NAME" class="col-sm-2 control-label">电子邮箱：</label>
			                 <div class="col-sm-10">
			                 	<input value="" type="text" name="editEmail" id="editEmail" class="form-control" style="width:900px" maxlength="20">
			                 </div>
			              </div>
			              <div class="form-group">
			                 <label for="JI_JOB_NAME" class="col-sm-2 control-label">手机号码：</label>
			                 <div class="col-sm-10">
			                 	<input value="" type="text" name="editPhone" id="editPhone" class="form-control" style="width:900px" maxlength="20">
			                 </div>
			              </div>
			              <div class="form-group">
			                 <label for="JI_JOB_NAME" class="col-sm-2 control-label">送货地址：</label>
			                 <div class="col-sm-10">
			                 	<input value="" type="text" name="editAddress" id="editAddress" class="form-control" style="width:900px" min="50">
			                 </div>
			       		  </div>
			           
			             <!-- /.card-body -->
			             <div class="card-footer col-md-3 col-md-offset-4" style="width:100%" align="center">
			               <button type="button" class="btn btn-info" onclick="edtiUserCheck()">提交</button>
			               <button type="button" class="btn btn-default" onclick="returnUserList()">返回</button>
			             </div>
			             <!-- /.card-footer -->
			             <div class="card-footer col-md-3 col-md-offset-4" id="tishi1" style="text-align: center;color: red;font-size: 15px"></div>
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
		<script src="<%=path %>/static/comp/cropper/js/cropper.min.js"></script>
		<script src="<%=path %>/chinasofti/usersManage/js/usersManage.js"></script>
		<script type="text/javascript" src="<%=path %>/static/js/alert.js"></script>
		
		<!--  
		<script src="/stmadc/stma/dc/include/js/jcommon.js"></script>
		
		<script language="JavaScript" src="/stmadc/jquery/jquery-ui-1.8.20.min.js"></script>
		<script src="/stmadc/static/comp/bootstrap/dist/js/bootstrap.js"></script>
		<script src="/stmadc/static/comp/adminlte/js/adminlte.min.js"></script>
		<script language="JavaScript" src="/stmadc/stma/dc/include/js/jcommon.js"></script>
	-->


</body></html>