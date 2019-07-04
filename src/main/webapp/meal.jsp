<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html style="height: auto;">

<head>

		
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
		<button id="userid" value="${sessionScope.u.id}"></button>
		
		<!-- <select id="my10" style="display:none">
												<option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option></select>
		
		 -->
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
												<input type="text" id="SEARCH_MEAL_NAME" name="SEARCH_MEAL_NAME" size="20" value="" class="form-control" placeholder="请输入菜品名称">
												
											</div>
											
											
										</div>
										
										<div class="form-group col-md-4">
											
											
											<label for="SEARCH_ORG_NAME" class="col-md-4">菜品：</label>
											<div class="col-md-8">
												<input type="hidden" id="SEARCH_SERIES_ID_HIDDEN" name="SEARCH_SERIES_NAME_HIDDEN" value="">
												<select id="SEARCH_SERIES_ID" name="SEARCH_SERIES_ID">
								
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
							<h3 class="card-title col-md-3">当前：<span id="LABLE_FATHER_ORG_NAME">菜单</span></h3>
							<div class="col-md-2 col-md-offset-7" id="mealAddDiv">
								
							</div>
						</div>
						<div class="card-body">
							<div id="example2_wrapper" class="dataTables_wrapper container-fluid dt-bootstrap4">

								<div class="row">
									<div class="col-12">
										<div class="card">
										
											<div class="card-body">
												<div id="example3_wrapper" class="dataTables_wrapper container-fluid dt-bootstrap4">
												<div class="row">
												<div class="form-inline col-sm-12">
												
												<div>
												<table>
												<tbody id="tbody">
												<!-- <div>
												<img src="" style="whith:80px;height:80px">
												</div>
												 -->
												<!-- <tr>
												<td>菜名：锅塌豆腐</td></tr>
												<tr><td>价格:16</td></tr>
												<tr><td>摘要：塌豆腐玲珑别致，整齐端庄。</td></tr>
												<tr><td>数量：
																								</td>
												<td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
												<button type="button" class="btn btn-info" onclick="addShoppingCart('10')">加入购物车</button></td>
												</tr> -->
												</tbody>
												</table>
												</div>
												</div>
												<!-- <div class="col-sm-12">简介：最早的锅塌系列菜是来自山东地区，早在明代山东济南就出现了锅塌豆腐，此菜到了清乾隆年间荣升宫廷菜。后传遍山东各地，又传入到天津、北京及上海等地。</div>
												-->
												</div> 
												<hr>
												<hr>
												</div>
											</div>
											<!-- /.card-body -->
										</div>
					
									</div>
					
								</div>
						
							</div>
						</div>
						<!-- /.card-body -->
					</div>

				</div>

			</div>
			<div class="row">
				<!--分页文字信息  -->
				<div class="col-md-6" id="page_info_area"></div>
				<!-- 分页条信息 -->
				<div class="col-md-6" id="page_nav_area"></div>
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
		<script src="<%=path %>/chinasofti/meal/js/meal.js"></script>
		<script type="text/javascript" src="<%=path %>/static/js/alert.js"></script>
		
		<!--  
		<script src="/stmadc/stma/dc/include/js/jcommon.js"></script>
		
		<script language="JavaScript" src="/stmadc/jquery/jquery-ui-1.8.20.min.js"></script>
		<script src="/stmadc/static/comp/bootstrap/dist/js/bootstrap.js"></script>
		<script src="/stmadc/static/comp/adminlte/js/adminlte.min.js"></script>
		<script language="JavaScript" src="/stmadc/stma/dc/include/js/jcommon.js"></script>
	-->


</body></html>