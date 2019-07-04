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
		<div class="container-fluid" id="MEAL_LIST_DIV_ID" style="display:block;">
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
											<label for="SEARCH_ORG_NAME" class="col-md-4">订单号：</label>
											<div class="col-md-8">
												<input type="hidden" id="SEARCH_OID_HIDDEN" name="SEARCH_OID_HIDDEN" value="">
												<input type="text" id="SEARCH_OID" name="SEARCH_OID" size="20" value="" class="form-control" placeholder="请输入订单号">
												
											</div>
											
											
										</div>
										
										<div class="form-group col-md-4">
											
											
											<label for="SEARCH_ORG_NAME" class="col-md-4">订单状态：</label>
											<div class="col-md-8">
												<input type="hidden" id="SEARCH_ORDER_STATE_HIDDEN" name="SEARCH_ORDER_STATE_HIDDEN" value="">
												<select id="SEARCH_ORDER_STATE" name="SEARCH_ORDER_STATE">
													<option value="">全部</option>
													<option value="0">未处理</option>
													<option value="1">已处理</option>
													<option value="2">已作废</option>
												</select>
											</div>
										</div>
									</div>
								</div>
								<div class="col-md-1">
									<button class="btn btn-block btn-info" onclick="searchByOrderOid()">查询</button>
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
							<h3 class="card-title col-md-3">当前：<span id="LABLE_FATHER_ORG_NAME">订单管理</span></h3>
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
												<!-- <tr bgcolor="#FFFFFF">	 -->	
												<!-- <td valign="center" align="center" width="30">15		</td>		
												<td valign="center" align="center" width="30">2019-05-19 18:12:55		</td>		
												<td valign="center" align="center" width="30">未处理		</td>		
												<td valign="center" align="center" width="30">41		</td>		
												<td valign="center" align="center" width="30">			
												<a href="" onclick="orders_info('15'); return false;">详细信息</a> 		</td>		
												<td valign="center" align="center" width="30">			
												<a href="" onclick="orders_handle('15','2'); return false;">作废</a> 
												&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;			
												<a href="" onclick="orders_handle('15','1'); return false;">处理</a> 		</td></tr> -->
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
	             <h3 class="card-title">下单用户</h3>
	        </div>
		 <div class="form-horizontal">
	        							
	             <div class="card-body">
			        
			        
							<div id="example2_wrapper" class="dataTables_wrapper container-fluid dt-bootstrap4">
								
								<div class="row">
									<div class="col-sm-12">
										<table id="example2" class="table table-bordered table-hover dataTable" role="grid">
											<thead>
												<tr role="row">
													<th style="text-align:center;" class="sorting" rowspan="1" colspan="1">用户</th>
													<th style="text-align:center;" class="sorting" rowspan="1" colspan="1">姓名</th>
													<th style="text-align:center;" class="sorting" rowspan="1" colspan="1">邮箱</th>
													<th style="text-align:center;" class="sorting" rowspan="1" colspan="1">电话</th>
													<th style="text-align:center;" class="sorting" rowspan="1" colspan="1">地址</th>
												</tr>
											</thead>
											<tbody id="orderInfoUserListDivId">
												<!-- <tr bgcolor="#FFFFFF">		
												<td valign="center" align="center" width="30">wangxh		</td>		
												<td valign="center" align="center" width="30">王晓华		</td>		
												<td valign="center" align="center" width="30">1111@qq.com		</td>		
												<td valign="center" align="center" width="30">13123433432		</td>		
												<td valign="center" align="center" width="30">北京市海淀区苏州街长远天地大厦A1座502		</td>
												</tr> -->
											</tbody>
											<tfoot></tfoot>
										</table>
									</div>
								</div>
								
							</div>
						
	             </div>
	            
	        </div>
		
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
		<script src="<%=path %>/chinasofti/ordersManage/js/ordersManage.js"></script>
		<script type="<%=path %>/text/javascript" src="static/js/alert.js"></script>
		
		<!--  
		<script src="/stmadc/stma/dc/include/js/jcommon.js"></script>
		
		<script language="JavaScript" src="/stmadc/jquery/jquery-ui-1.8.20.min.js"></script>
		<script src="/stmadc/static/comp/bootstrap/dist/js/bootstrap.js"></script>
		<script src="/stmadc/static/comp/adminlte/js/adminlte.min.js"></script>
		<script language="JavaScript" src="/stmadc/stma/dc/include/js/jcommon.js"></script>
	-->


</body></html>