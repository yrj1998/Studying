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
		
		<button id="userid" value="${sessionScope.u.id}" style="display: none"></button>
		<!--  <div class="container-fluid" id="ORG_LIST_DIV_ID">-->
		<div class="container-fluid" id="MEAL_LIST_DIV_ID" style="display:block;">
			
			
			<div class="row">
				<div class="col-12">
					<div class="card">
						<div class="card-header" style="width:100%">
							<h3 class="card-title col-md-3">当前：<span id="LABLE_FATHER_ORG_NAME">我的订单</span></h3>
							<div class="col-md-2 col-md-offset-7" id="mealAddDiv">
								
							</div>
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
	
													<th style="text-align:center;" class="sorting" rowspan="1" colspan="1">订单编号</th>
													<th style="text-align:center;" class="sorting" rowspan="1" colspan="1">订单时间</th>
													<th style="text-align:center;" class="sorting" rowspan="1" colspan="1">订单状态</th>
													<th style="text-align:center;" class="sorting" rowspan="1" colspan="1">总额</th>
													<th style="text-align:center;" class="sorting" rowspan="1" colspan="1">详细</th>
													<th style="text-align:center;" class="sorting" rowspan="1" colspan="1">处理</th>
												</tr>
											</thead>
											<tbody id="POST_LIST_TBODY_ID">
												<!-- <tr bgcolor="#FFFFFF">		
												<td valign="center" align="center" width="30">15		</td>		
												<td valign="center" align="center" width="30">2019-05-19 18:12:55		</td>		
												<td valign="center" align="center" width="30">未开始送餐		</td>		
												<td valign="center" align="center" width="30">41		</td>		
												<td valign="center" align="center" width="30">			
												<a href="" onclick="orders_info('15'); return false;">详细信息</a> 		</td>		
												<td valign="center" align="center" width="30">			
												<a href="" onclick="orders_handle('15','2'); return false;">收货</a> 		</td></tr>
												 -->
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
		
		<div id="orderInfoDivId" class="card card-info" style="display:none;">
			
		
	    	<div class="card-header">
	             <h3 class="card-title">订单详细</h3>
	        </div> 
	        <div class="form-horizontal">
	        							
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
	
													<th style="text-align:center;" class="sorting" rowspan="1" colspan="1">菜系</th>
													<th style="text-align:center;" class="sorting" rowspan="1" colspan="1">菜品</th>
													<th style="text-align:center;" class="sorting" rowspan="1" colspan="1">单价</th>
													<th style="text-align:center;" class="sorting" rowspan="1" colspan="1">数量</th>
												</tr>
											</thead>
											<tbody id="orderInfoListDivId">
											<!-- <tr bgcolor="#FFFFFF">		
											<td valign="center" align="center" width="30">鲁菜		</td>		
											<td valign="center" align="center" width="30">锅塌豆腐		</td>		
											<td valign="center" align="center" width="30">16		</td>		
											<td valign="center" align="center" width="30">1		</td></tr> -->
											</tbody>
											<tfoot></tfoot>
										</table>
									</div>
								</div>
								
							</div>
						
			             

	             </div>
	            <!-- /.card-body -->
			             <div class="card-footer col-md-3 col-md-offset-4" style="width:100%" align="center">
			               
			               <button type="button" class="btn btn-default" onclick="returnordersList()">返回</button>
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
		<script src="<%=path %>/chinasofti/myOrders/js/myOrders.js"></script>
		<script type="text/javascript" src="<%=path %>/static/js/alert.js"></script>
		
		


</body></html>