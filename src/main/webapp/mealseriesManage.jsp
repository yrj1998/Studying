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
		<%-- <link href="<%=path %>/static/bootstrap-3.3.7-dist/css/bootstrap.min.css" rel="stylesheet">
		<script src="<%=path %>/static/bootstrap-3.3.7-dist/js/bootstrap.min.js"></script> --%>
		<link rel="stylesheet" href="<%=path %>/static/css/default/bootstrap/bootstrap.css">
		<link rel="stylesheet" href="<%=path %>/static/comp/fontawesome/css/font-awesome.min.css">
		<link rel="stylesheet" href="<%=path %>/static/comp/ionicons/css/ionicons.min.css">
		<link rel="stylesheet" href="<%=path %>/static/comp/adminlte/css/adminlte.css">
		<link rel="stylesheet" href="<%=path %>/static/css/default/mask.css">
	</head>

	<body style="height: auto;">
		
		
		<!--  <div class="container-fluid" id="ORG_LIST_DIV_ID">-->
		<div class="container-fluid" id="MEALSERIES_LIST_DIV_ID">
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
											<label for="SEARCH_ORG_NAME" class="col-md-4">菜系名称：</label>
											<div class="col-md-8">
												<input type="hidden" id="SEARCH_MEALSERIES_NAME_HIDDEN" name="SEARCH_MEALSERIES_NAME_HIDDEN" value="">
												<input type="text" id="SEARCH_MEALSERIES_NAME" name="seriesname" size="10" value="" class="form-control" placeholder="请输入菜系名称">
											</div>
										</div>
									</div>
								</div>
								<div class="col-md-1">
									<button class="btn btn-block btn-info" onclick="searchBySeriesName()">查询</button>
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
							<h3 class="card-title col-md-3">当前：<span id="LABLE_FATHER_ORG_NAME">菜系管理</span></h3>
							<div class="col-md-2 col-md-offset-7" id="mealseriesAddDiv"><button class="btn  btn-success btn-sm" type="button" onclick="ADD_MEALSERIES()">新增</button>&nbsp;&nbsp;</div>
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
	
													<th style="text-align:center;" class="sorting" rowspan="1" colspan="1">序号</th>
													<th style="text-align:center;" class="sorting" rowspan="1" colspan="1">菜系名称</th>
													<th style="text-align:center;" class="sorting" rowspan="1" colspan="1">编辑</th>
													<th style="text-align:center;" class="sorting" rowspan="1" colspan="1">删除</th>
												</tr>
											</thead>
											<tbody id="POST_LIST_TBODY_ID">				
												
											</tbody>
											<tfoot></tfoot>
										</table>
									</div>
								</div>
								
								<!-- <div class="row">
									<div class="col-sm-12 col-md-9 col-md-offset-3">
										<div class="dataTables_paginate paging_simple_numbers">
											<ul class="pagination" id="PAGE_ID"><li style="margin-left: 30px">		<button class="btn btn-primary" type="button" onclick="GOTO_MEALSERIES_NEXT_PAGE('1')">后一页</button></li><li style="margin-left: 30px">		<button class="btn btn-primary" type="button" onclick="GOTO_MEALSERIES_TAIL_PAGE('1')">末页</button></li><li style="margin-left: 30px">		<input id="JUMP_INPUT_ID" type="text" style="display:inline;width:80px" size="6">		<button class="btn btn-sm btn-outline-primary" onclick="GOTO_MEALSERIES_PAGE();return false;">跳转</button></li><li style="margin-left: 30px">		<div class="dataTables_info" style="margin-top: 6px;margin-left: 100px"><span>1/2 页</span> <span>共12条</span></div></li></ul>
										</div>
									</div>
								</div> -->
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
		
		<!--<div id="ORG_ADD_DIV_ID" class="card card-info" style="display:none">  -->
		<div id="MEALSERIES_ADD_DIV_ID" class="card card-info" style="display:none">
	    	<div class="card-header">
	             <h3 class="card-title">菜系添加</h3>
	        </div> 
	        <div class="form-horizontal">
	        							
	             <div class="card-body">
			             <div class="form-group">
			                 <label for="JI_JOB_NAME" class="col-sm-2 control-label">菜系名称：</label>
			              	 <div class="col-sm-10">
			                 	<input value="" type="text" name="seriesname" id="ADD_MEALSERIES" class="form-control" style="width:900px" maxlength="10">
			                 </div>
			            </div>
			            
			             <!-- /.card-body -->
			             <div class="card-footer col-md-3 col-md-offset-4" style="width:100%" align="center">
			               <button type="button" class="btn btn-info" onclick="addMealseriesCheck()">提交</button>
			               <button type="button" class="btn btn-default" onclick="returnMealseriesList()">返回</button>
			             </div>
			             <!-- /.card-footer -->
			             <div class="card-footer col-md-3 col-md-offset-4" id="tishi" style="text-align: center;color: red;font-size: 15px">
									     
						</div>
	             </div>
	            
	        </div>
	    </div>
		
		<div id="MEALSERIES_EDIT_DIV_ID" class="card card-info" style="display:none">
	    	<div class="card-header">
	             <h3 class="card-title">菜系编辑</h3>
	        </div> 
	        <div class="form-horizontal">
	        							
	             <div class="card-body">
			             <div class="form-group">
			                 <label for="JI_JOB_NAME" class="col-sm-2 control-label">菜系名称：</label>
			              	 <div class="col-sm-10">
			              	 	<input value="" type="hidden" name="EDIT_MEALSERIES_HIDDE" id="EDIT_MEALSERIES_HIDDE" class="form-control" style="width:900px" maxlength="10">
			                 	<input  type="text" name="seriesname" id="EDIT_MEALSERIES" class="form-control" style="width:900px" maxlength="10">
			                 </div>
			            </div>
			            
			             <!-- /.card-body -->
			             <div class="card-footer col-md-3 col-md-offset-4" style="width:100%" align="center">
			               <button type="button" class="btn btn-info" onclick="editMealseriesCheck()">提交</button>
			               <button type="button" class="btn btn-default" onclick="returnMealseriesList()">返回</button>
			             </div>
			             <!-- /.card-footer -->
			             <div class="card-footer col-md-3 col-md-offset-4" id="tishi1" style="text-align: center;color: red;font-size: 15px">
									     
						</div>
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
		<script src="<%=path %>/chinasofti/mealseriesManage/js/mealseriesManage.js"></script>
		<script type="text/javascript" src="<%=path %>/static/js/alert.js"></script>
		
		<!--  
		<script src="/stmadc/stma/dc/include/js/jcommon.js"></script>
		
		<script language="JavaScript" src="/stmadc/jquery/jquery-ui-1.8.20.min.js"></script>
		<script src="/stmadc/static/comp/bootstrap/dist/js/bootstrap.js"></script>
		<script src="/stmadc/static/comp/adminlte/js/adminlte.min.js"></script>
		<script language="JavaScript" src="/stmadc/stma/dc/include/js/jcommon.js"></script>
	-->


</body></html>