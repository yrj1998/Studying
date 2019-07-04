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
		<div class="container-fluid" id="MEAL_LIST_DIV_ID">
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
											<label for="SEARCH_ORG_NAME" class="col-md-4">菜名：</label>
											<div class="col-md-8">
												<input type="hidden" id="SEARCH_MEAL_NAME_HIDDEN" name="SEARCH_MEAL_NAME_HIDDEN" value="">
												<input type="text" id="SEARCH_MEAL_NAME" name="mealname" size="20" value="" class="form-control" placeholder="请输入菜品名称">
												
											</div>
											
											
										</div>
										
										<div class="form-group col-md-4">
											
											
											<label for="SEARCH_ORG_NAME" class="col-md-4">菜品：</label>
											<div class="col-md-8">
												<input type="hidden" id="SEARCH_SERIES_ID_HIDDEN" name="SEARCH_SERIES_NAME_HIDDEN" value="">
												<select id="SEARCH_SERIES_ID" name="mealseriesid" >
								
												</select>
											</div>
										</div>
									</div>
								</div>
								<div class="col-md-1">
									<button class="btn btn-block btn-info" onclick="searchByMealName()">查询</button>
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
							<h3 class="card-title col-md-3">当前：<span id="LABLE_FATHER_ORG_NAME">菜品管理</span></h3>
							<div class="col-md-2 col-md-offset-7" id="mealAddDiv"><button class="btn  btn-success btn-sm" type="button" onclick="ADD_MEAL()">新增</button>&nbsp;&nbsp;</div>
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
													<th style="text-align:center;" class="sorting" rowspan="1" colspan="1">菜系</th>
													<th style="text-align:center;" class="sorting" rowspan="1" colspan="1">菜名</th>
													<th style="text-align:center;" class="sorting" rowspan="1" colspan="1">摘要</th>
													<th style="text-align:center;" class="sorting" rowspan="1" colspan="1">价格</th>
													<th style="text-align:center;" class="sorting" rowspan="1" colspan="1">编辑</th>
													<th style="text-align:center;" class="sorting" rowspan="1" colspan="1">图片</th>
													<th style="text-align:center;" class="sorting" rowspan="1" colspan="1">删除</th>
												</tr>
											</thead>
											<tbody id="POST_LIST_TBODY_ID">
											
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
		
		
		
		<!--<div id="ORG_ADD_DIV_ID" class="card card-info" style="display:none">  -->
		<div id="MEAL_ADD_DIV_ID" class="card card-info" style="display:none">
	    	<div class="card-header">
	             <h3 class="card-title">菜品添加</h3>
	        </div> 
	        <div class="form-horizontal">
	        							
	             <div class="card-body">
			             <div class="form-group">
			                 <label for="JI_JOB_NAME" class="col-sm-2 control-label">菜名：</label>
			              	 <div class="col-sm-10">
			                 	<input value="" type="text" name="mealname" id="ADD_MEAL_NAME" class="form-control" style="width:900px" maxlength="20">
			                 </div>
			             </div>
			             <div class="form-group">
			                 <label for="JI_JOB_NAME" class="col-sm-2 control-label">菜系：</label>
			                 <div class="col-sm-10">
			                 	<select style="width:900px" class="form-control" id="ADD_MEALSERIES_NAME" name="mealseriesid">
								
								</select>		                 
							 </div>
			             </div>
			             <div class="form-group">
			                 <label for="JI_JOB_NAME" class="col-sm-2 control-label">摘要：</label>
			                 <div class="col-sm-10">
			                 	<input value="" type="text" name="mealsummarize" id="ADD_MEAL_SUMMARIZE" class="form-control" style="width:900px" maxlength="250">
			                 </div>
			              </div>
			              <div class="form-group">
			                 <label for="JI_JOB_NAME" class="col-sm-2 control-label">介绍：</label>
			                 <div class="col-sm-10">
			                 	<input value="" type="text" name="mealdescription" id="ADD_MEAL_DESCRIPTION" class="form-control" style="width:900px" maxlength="250">
			                 </div>
			              </div>
			              <div class="form-group">
			                 <label for="JI_JOB_NAME" class="col-sm-2 control-label">价格：</label>
			                 <div class="col-sm-10">
			                 	<input value="" type="number" name="mealprice" id="ADD_MEAL_PRICE" class="form-control" style="width:900px" min="1">
			                 </div>
			       		  </div>
			           
			             <!-- /.card-body -->
			             <div class="card-footer col-md-3 col-md-offset-4" style="width:100%" align="center">
			               <button type="button" class="btn btn-info" onclick="addMealCheck()">提交</button>
			               <button type="button" class="btn btn-default" onclick="returnMealList()">返回</button>
			             </div>
			             <!-- /.card-footer -->
			             <div class="card-footer col-md-3 col-md-offset-4" id="tishi" style="text-align: center;color: red;font-size: 15px">
									     
						</div>
	             </div>
	            
	        </div>
	    </div>
		
		<div id="MEAL_EDIT_DIV_ID" class="card card-info" style="display:none">
	    	<div class="card-header">
	             <h3 class="card-title">菜品编辑</h3>
	        </div> 
	        <div class="form-horizontal">
	        							
	             <div class="card-body">
			             <div class="form-group">
			                 <label for="JI_JOB_NAME" class="col-sm-2 control-label">菜名：</label>
			              	 <div class="col-sm-10">
			              	 	<input type="hidden" id="EDIT_MEAL_HIDDE" name="EDIT_MEAL_HIDDE" value="">
			                 	<input value="" type="text" name="EDIT_MEAL_NAME" id="EDIT_MEAL_NAME" class="form-control" style="width:900px" maxlength="20">
			                 </div>
			             </div>
			             <div class="form-group">
			                 <label for="JI_JOB_NAME" class="col-sm-2 control-label">菜系：</label>
			                 <div class="col-sm-10">
			                 	<select style="width:900px" class="form-control" id="EDIT_MEALSERIES_NAME" name="EDIT_MEALSERIES_NAME">
								</select>			                 </div>
			             </div>
			             <div class="form-group">
			                 <label for="JI_JOB_NAME" class="col-sm-2 control-label">摘要：</label>
			                 <div class="col-sm-10">
			                 	<input value="" type="text" name="EDIT_MEAL_SUMMARIZE" id="EDIT_MEAL_SUMMARIZE" class="form-control" style="width:900px" maxlength="250">
			                 </div>
			              </div>
			              <div class="form-group">
			                 <label for="JI_JOB_NAME" class="col-sm-2 control-label">介绍：</label>
			                 <div class="col-sm-10">
			                 	<input value="" type="text" name="EDIT_MEAL_DESCRIPTION" id="EDIT_MEAL_DESCRIPTION" class="form-control" style="width:900px" maxlength="250">
			                 </div>
			              </div>
			              <div class="form-group">
			                 <label for="JI_JOB_NAME" class="col-sm-2 control-label">价格：</label>
			                 <div class="col-sm-10">
			                 	<input value="" type="number" name="EDIT_MEAL_PRICE" id="EDIT_MEAL_PRICE" class="form-control" style="width:900px" min="1">
			                 </div>
			       		  </div>
			            
			             <!-- /.card-body -->
			             <div class="card-footer col-md-3 col-md-offset-4" style="width:100%" align="center">
			               <button type="button" class="btn btn-info" onclick="editMealCheck()">提交</button>
			               <button type="button" class="btn btn-default" onclick="returnMealList()">返回</button>
			             </div>
			             <!-- /.card-footer -->
			             <div class="card-footer col-md-3 col-md-offset-4" id="tishi1" style="text-align: center;color: red;font-size: 15px">
									     
						</div>
	             </div>
	            
	        </div>
	    </div>
		
		<div id="MEAL_IMG_DIV_ID" class="card card-info" style="display:none">
	    	<div class="card-header">
	             <h3 class="card-title">上传图片</h3>
	        </div> 
	        <div class="form-horizontal">
				<div class="card-body" style="text-align: center;">
			       <!-- ------------ -->
			       <button id="replaceImg" class="l-btn">更换图片</button>
				   <button class="l-btn" onclick="subphoto()">提交图片</button>
				   <button class="l-btn" onclick="returnMealList()">返回列表</button>
				   
					<div style="height:10px"></div>
					<div style="width: 150px;height: 150px;border: solid 1px #555;padding: 5px; margin: 0 auto;">
					    <img id="finalImg" src="" width="100%">
					</div>


					<!--图片裁剪框 start-->
					<div style="display: none" class="tailoring-container">
					    <div class="black-cloth" onclick="closeTailor(this)"></div>
					    <div class="tailoring-content" style="top: -208px; left: 178px;">
					            <div class="tailoring-content-one">
					                <label title="上传图片" for="chooseImg" class="l-btn choose-btn">
					                    <input type="file" accept="image/jpg,image/jpeg,image/png" name="mealimage" id="chooseImg" class="hidden" onchange="selectImg(this)">
					                    选择图片
					                </label>
					                <div class="close-tailoring" onclick="closeTailor(this)">×</div>
					            </div>
					            <div class="tailoring-content-two">
					                <div class="tailoring-box-parcel">
					                    <img id="tailoringImg">
					                </div>
					                <div class="preview-box-parcel">
					                    <p>图片预览：</p>
					                    <div class="square previewImg"></div>
					                    <div class="circular previewImg"></div>
					                </div>
					            </div>
					            <div class="tailoring-content-three">
					                <button class="l-btn cropper-reset-btn">复位</button>
					                <button class="l-btn cropper-rotate-btn">旋转</button>
					                <button class="l-btn cropper-scaleX-btn">换向</button>
					                <button class="l-btn sureCut" id="sureCut">确定</button>
					            </div>
					        </div>
					</div>
			      <!-- --------------- -->
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
		<script src="<%=path %>/chinasofti/mealManage/js/mealManage.js"></script>
		<script type="<%=path %>/text/javascript" src="static/js/alert.js"></script>
		
		<!--  
		<script src="/stmadc/stma/dc/include/js/jcommon.js"></script>
		
		<script language="JavaScript" src="/stmadc/jquery/jquery-ui-1.8.20.min.js"></script>
		<script src="/stmadc/static/comp/bootstrap/dist/js/bootstrap.js"></script>
		<script src="/stmadc/static/comp/adminlte/js/adminlte.min.js"></script>
		<script language="JavaScript" src="/stmadc/stma/dc/include/js/jcommon.js"></script>
	-->


</body></html>