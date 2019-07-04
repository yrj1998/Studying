/**
 * 通用查询区
 */
layui.define(["jquery",'layer','table','form','layedit', 'laydate'],function(exports){
	layui.link(layui.context+"/static/comp/layui/expand/jqsearch.css");
	var $ = layui.jquery,layer = layui.layer,table=layui.table,form = layui.form,laydate=layui.laydate;
	var TIPS = '请选择', CLASS = 'layui-table-search',SELECTED_CLASS=CLASS+'ed', TITLE = 'layui-select-title';
	
	function Search(){
		var _this = this;
		this.el = null;
		this.singleSearch=[];
		this.comSearch =[];
		this.laytableName ="";
		this.defaultCondition = null;
		this.id = "";
		this.controlId = 1;
		this.layerIndex = null;
		$(".layui-search-box").remove();
		this.getId=function(){
			return ++_this.controlId;
		}
		this.init = function(el){
			_this.el = el;
			_this.id = $(el).attr('id');
			_this.laytableName =el.attr('table');
			
			var _singleSearch = el.attr('search');
			if(_singleSearch!=undefined)_this.singleSearch = eval('('+_singleSearch+')');
			layui.each(_this.singleSearch,function(i,index){
				if(index.field.indexOf(',')!=-1){
					index.full =true;
				}else{
					index.full =false;
				}
				if(index.isDefault){
					_this.defaultCondition = index;
				}
			});
			var comSearch = el.find('span');
			var index =0;
			$(comSearch).each(function(){
				var _str = $(this).attr('lay-data');
				var _data = eval('('+_str+')');
				var _convert = _data.convert;
				var convertFun =undefined;
				if(_convert!=undefined && _convert!=''){
					if(_convert.indexOf('function')!=-1){
						convertFun = eval('('+_convert+')'); 
					}else{
						convertFun = eval('(function(config,cond,v){'+_convert+'(config,cond,v);})')
					}
				}
				
				_data.convertFun = convertFun;
				if(_data.item!=undefined){
					_data.item=JSON.stringify(_data.item);
				}
				_this.comSearch[_this.comSearch.length]=_data;
			});
			_this.createControl(_this.el);
			$("body").bind("mousedown",function(event) {
				var startEle = event.target;
				var inLayer = false;
				var inDrop  = false;
				do{
					var tagName = $(startEle)[0].nodeName;
					if(tagName == "BODY")break;
					
					if($(startEle).hasClass('layui-search-box')
							||$(startEle).hasClass('layui-laydate')
							||$(startEle).hasClass('lay-select-dropdown')
							||$(startEle).hasClass('lay-search-compbtn')){
						inLayer = true;
					}
					if($(startEle).hasClass('lay-search-dropitem')
							||$(startEle).hasClass('layui-search-input')
							){
						inDrop  = true
					}
					startEle = $(startEle).parent()[0];
				}while(startEle!=null);
				if (!inLayer) {
					_this.hideLayer();
				}
				if(!inDrop){
					_this.hiddenDropDown();
				}
			});
		};
		/**
		 * 得到选中的下拉项
		 */
		this.selectItem =function(){
			var selectItems = $(_this._el_dl).find('.active');
			if(selectItems.length>0){
				return selectItems[0];
			}else{
				return null;
			}
		}
		/**
		 * 得到所以的下拉项
		 */
		this.findAllItem=function(){
			return $(_this._el_dl).find('dd');
		}
		/**
		 * 查询文本框的键盘事件
		 */
		this.keyup = function(){
			var val  =$(this).val();
			var event = event||window.event;
			var keyCode  = event.keyCode;
			if(keyCode ==40){//向下
				var selected = _this.selectItem();
				if(!_this.dropDownIsShow()){
					_this.createDropDown(val);
				}
				if(selected==null){
					var allItem = $(_this._el_dl).find('dd');
					if(allItem.length==0){
						return;
					}
					$(allItem[0]).addClass('active');
				}else{
					$(selected).removeClass('active');
					var next = $(selected).next();
					if(next.length>0){
						$(next).addClass('active');
					}else{
						$(_this._el_dl).find('dd:first').addClass('active');
					}
				}
				return;
			}else if(keyCode ==38){
				var selected = _this.selectItem();
				if(selected==null){
					var allItem = $(_this._el_dl).find('dd');
					if(allItem.length==0){
						return;
					}
					$(allItem[allItem.length-1]).addClass('active');
				}else{
					$(selected).removeClass('active');
					var prev = $(selected).prev();
					if(prev.length>0){
						$(prev).addClass('active');
					}else{
						$(_this._el_dl).find('dd:last').addClass('active');
					}
				}
				return;
			}else if(keyCode==13){
				var selected = _this.selectItem();
				if(selected!=null){
					_this.itemClick.call(selected);
				}else if(_this.defaultCondition!=null){
					_this.search([{name:_this.defaultCondition.field,op:'like',value:val}]);
				}
				return;
			}
//			if(val==''){
//				_this.hiddenDropDown();
//			}else{
				_this.createDropDown(val);
//			}
		};
		this.hiddenDropDown=function(){
			$(_this._el_control).removeClass(SELECTED_CLASS);
		}
		this.showDropDown=function(){
			$(_this._el_control).addClass(SELECTED_CLASS);
		}
		this.dropDownIsShow=function(){
			return $(_this._el_control).hasClass(SELECTED_CLASS);
		}
		/**
		 * 下拉项点击事件
		 */
		this.itemClick = function(){
			var item =$(this);
			var type = $(item).attr('type');
			_this.hiddenDropDown();
			if(type=='item'){
				var con = item.data('con');
				var manualAssemble = item.data('manualassemble');
				var val = $(_this._el_input).val();
				val = _this.transformValue(val);
				var arr = [];
				var keyvalue ={};
				if(val !=''){
					if(manualAssemble){
						keyvalue[con] = val;
					}else{
						arr.push({name:con,op:'like',value:val})
					}
				}
				_this.search(arr,keyvalue);
			}else{
				_this.createLayer.call(this);
			}
		};
		this.transformValue = function(source){
			if(source!=null){
				source = source.replaceAll('_','\\_').replaceAll('%','\\%');
			}
			return source;
		}
		/**
		 * 提交查询
		 */
		this.search=function(condition,keyvalue){
			_this.lastCondtion = condition;
			_this.lastKeyValue = keyvalue;
			_this.research();
		}
		/**
		 * 使用最后条件进行查询
		 */
		this.research=function(){
			var where = _this.condition();
			$.extend(where,{radom:Math.random()});
			table.reload(_this.laytableName, {page: { _pageNo: 1 },where:where});
		}
		/**
		 * 重置条件
		 */
		this.resetCondition=function(){
			$(_this._el_input).val('');
			var form = $('#'+_this._search_form_id);
			if(form.length>0){
				form[0].reset();
			}
			_this.lastCondtion=undefined;
			_this.lastKeyValue=undefined;
		}
		/**
		 * 通过查询获取查询组件的最后条件
		 */
		this.condition = function(){
			var condition = _this.lastCondtion;
			var keyvalue  = _this.lastKeyValue;
			var where = {};
			if(condition!=undefined){
				where._jqSearch=JSON.stringify(condition);
			}else{
				where._jqSearch="[]";
			}
			if(keyvalue!=undefined){
				$.extend(where,keyvalue);
			}
			return where;
		}
		/**
		 * 创建查询下拉区
		 */
		this.createDropDown=function(val){
			var arr = [];
			layui.each(_this.singleSearch,function(index,item){
				arr.push('<dd type="item" data-manualAssemble="'+(item.manualAssemble?'true':'false')+'" data-con="'+item.field+'" '+(item.isDefault?'class="active"':'')+'>'+ item.title +'包括:<font color=red>'+val+'</font></dd>'); 
			});
			var hasComSearch = _this.comSearch.length>0;
			if(hasComSearch){
				arr.push('<dd type="more"><font color="red">更多查询方式...</font></dd>');
			}
			arr.length === 0 && arr.push('<dd lay-value="" class="'+ DISABLED +'">没有选项</dd>');
			var content =  arr.join('');
			$(_this._el_dl).html(content);
			$(_this._el_dl).find('dd').bind('click',function(){
				_this.itemClick.call(this);
			});
			$(_this._el_control).addClass(SELECTED_CLASS);
		}
		this.createControl = function(el){
			var searchTotal = $('<div>',{
				'class':'has-feedback '+CLASS+' pull-right',
				'style':'width:270px;'
			});
			var control = $('<div>',{
				'class':'layui-unselect has-feedback ',
				'style':'width:210px; float:left;'
			});
			var div =$('<div>',{
//				'class':'has-feedback pull-right'
			});
			var titleIcon = $('<div class="lay-search-icon"><i class="layui-icon" style="color: #515151;">&#xe615;</i></div>')
			
//			var placeHolder = (_this.defaultCondition!=null)?_this.defaultCondition.title:'请输入关键字';
			var placeHolder='';
			var input = $('<input>',{
				'class':'form-control lay-search-input',
				'placeHolder':placeHolder
			}).bind('keyup',function(){
				_this.keyup.call(this);
			}).bind('click',function(){
				var val = $(this).val();
				if(!_this.dropDownIsShow()){
					_this.createDropDown(val);
				}
			});
			var hasComSearch = _this.comSearch.length>0
			var span = $('<span>',{
				'class':'form-control-feedback pointer lay-search-compbtn',
				'style':"pointer-events: auto;display:"+((hasComSearch)?"block":"none")
			}).bind('click',function(){
				_this.createLayer.call(this);
			});
			var i = $('<em>',{
				'class':"layui-edge glyphicon glyphicon-search"
			});
			i.appendTo(span);
			
			var button = $('<div class="stwo-input-group"><button class="layui-btn layui-btn-primary layui-btn-sm" >重置</button></div>')
			.bind('click',function(){
				_this.resetCondition();
				_this.research();
			});
			
			var dl = $('<dl>',{
				'class':'layui-anim layui-anim-upbit lay-search-dropitem'
			})
			
			titleIcon.appendTo(div);
			input.appendTo(div);
			span.appendTo(div);
			
			div.appendTo(control);
			dl.appendTo(control);
			control.appendTo(searchTotal);
			button.appendTo(searchTotal);
			searchTotal.insertAfter(el);
			_this._el_search = searchTotal;
			_this._el_control = control;
			_this._el_dl = dl;
			_this._el_input = input;
		}
		this.hideLayer=function(){
			if(_this.layerIndex!=undefined && _this.layerIndex!=null){
				layui.layer.style(_this.layerIndex,{
					'display':'none'
				});
				$(_this._el_dropdown).data("show","false");
			}
		}
		this.convertAttr=function(json){
			var html = '';
			for(var i in json){
				var v = json[i];
				if(v==undefined){
					continue;
				}
				html+= i+'="'+json[i].replaceAll('"','\"')+'" ';
			}
			return html;
		}
		/**
		 * 创建组合查询层
		 */
		this.createLayer=function(){
			var othis =$(this);
			_this._el_dropdown = othis;
			var show = $(othis).data('show');
			
			var layer = $(_this._el_control).next('.layui-search-layer');
			if(show == undefined || show =='false'){
				if(_this.layerIndex==null){
				var timeArr = [];
				_this._search_form_id = 'search-form-'+_this.getId();
				var fieldClass ="layui-form-text";
				var html ='<div class="layui-search-div"><form id="'+_this._search_form_id+'" class="layui-form layui-form-pane layui-search-form" action="">';
				for(var i=0;i<_this.comSearch.length;i++){
					var com = _this.comSearch[i];
					var attr = com.options||{};
					var defaultConfig;
					var htmlAttrs ="";
					switch(com.type){
					case 'text':
						defaultConfig = {
							name:com.field,
							field:com.field,
							op:com.op,
//							placeholder:"请输入"+com.title,
							autocomplete:"off",
							"class":"layui-input"
						};
						$.extend(defaultConfig,attr);
						htmlAttrs = _this.convertAttr(defaultConfig);
						html +='<div class="'+fieldClass+'">\
						    <label class="layui-form-label">'+com.title+'</label>\
						    <div class="layui-input-block">\
						      <input type="text" '+htmlAttrs+'>\
						    </div>\
						  </div>'
						break;
					case 'time':
						var id = "TIME_"+_this.getId();
						defaultConfig = {
							id:id,
							name:com.field,
							field:com.field,
							op:com.op,
							"lay-verify":"date",
//							placeholder:"请输入"+com.title,
							autocomplete:"off",
							"class":"layui-input"
						};
						$.extend(defaultConfig,attr);
						htmlAttrs = _this.convertAttr(defaultConfig);
						
						html +='<div class="'+fieldClass+'">\
					      <label class="layui-form-label">'+com.title+'</label>\
					      <div class="layui-input-inline">\
					        <input type="text" '+htmlAttrs+'>\
					      </div>\
					    </div>';
						timeArr.push(id);
						break;
					case 'comb':
						defaultConfig = {
							id:id,
							name:com.field,
							field:com.field,
							op:com.op,
//							placeholder:"请输入"+com.title,
							autocomplete:"off",
							"class":"layui-input"
						};
						if(com.item!=undefined && com.item!=''){
							defaultConfig["data-item"]=com.item.replaceAll('"','\'');
						}
						if(com.url!=undefined && com.url!=''){
							defaultConfig['data-url']=com.url;
						}
						$.extend(defaultConfig,attr);
						htmlAttrs = _this.convertAttr(defaultConfig);
						
						html +='<div class="'+fieldClass+'">\
					    <label class="layui-form-label">'+com.title+'</label>\
					    <div class="layui-input-block">\
					      <select  '+htmlAttrs+'>\
					      </select>\
					    </div>\
					    </div>'
						break;
					}
				}
				html+='</form></div>';
				var fieldHeight = 86;
				var fieldWidth = 193;
				var layerHeight = 100 + fieldHeight*(_this.comSearch.length%3==0?_this.comSearch.length/3:parseInt(_this.comSearch.length/3)+1);
				
				var offset  = $(_this._el_search).offset();
				var _width  = $(_this._el_search).width();
				var _height = $(_this._el_search).height();
				var layerWidth = (_this.comSearch.length>3)?3*fieldWidth +10:_this.comSearch.length*fieldWidth +10;
				var layLeft = offset.left+_width-layerWidth-10;
				var layTop = offset.top+_height +5;
				_this.layerIndex = layui.layer.open({
			        type: 5 //此处以iframe举例
			        ,title:'输入组合查询条件...'
			        ,area: [layerWidth+'px', layerHeight+'px']
					,offset:[layTop+"px",layLeft+"px"]
					,skin:"layui-search-box"
			        ,shade: 0
			        ,anim: 2
			        ,maxmin: true
			        ,content: html
			        ,btn: ['查询', '重置'] //只是为了演示
					,cancel: function(index, layero){ 
						_this.hideLayer();
						$(othis).data('show','false');
						return false; 
					}    
			        ,yes: function(index){
			           var values =[];
			           var keyvalue ={};
			           for(var i=0;i<_this.comSearch.length;i++){
			        	   var config = _this.comSearch[i];
			        	   var name =config.field;
			        	   var op = (config.op==undefined||config.op=='')?'like':config.op;
			        	   var val =$('input[name="'+name+'"]').val();
			        	   if(val!=''){
			        		   val = _this.transformValue(val);
			        		   if(config.manualAssemble!=undefined && config.manualAssemble){
			        			   keyvalue[name] = val;
			        		   }else{
				        		   if(config.convertFun!=undefined && typeof(config.convertFun)=='function'){
				        			   config.convertFun(config,values,val);
				        		   }else{
				        			   values.push({name:name,op:op,value:val});
				        		   }
			        		   }
			        	   }
			           }
			           _this.search(values,keyvalue);
			           $(othis).data('show','false');
			           _this.hideLayer();
			        }
			        ,btn2: function(){
			        	$('#'+_this._search_form_id)[0].reset();
			        	return false;
			        },
			        resize:false,
			        maxmin:false
			        ,zIndex: layer.zIndex //重点1
			        ,success: function(layero){
			        	form.render();
			        	for(var i=0;i<timeArr.length;i++){
			        		laydate.render({elem: '#'+timeArr[i]});
			        	}
			        	$(".layui-search-box").find('input')[0].focus();
			        }
			      });
				}else{
					layui.layer.style(_this.layerIndex,{
						'display':'block'
					});
				}
				$(othis).data('show','true');
			}else{
				$(othis).data('show','false');
			}
		}
	};
	var f = function(){
		var _that = this;
		this.searchs={};
		this.init =function(){
			var searchs  = $(".layui-search");
			$(searchs).each(function(){
				var el = $(this);
				if(el.next('.'+CLASS).length>0){
					return;
				}
				var search = new Search();
				search.init(el);
				_that.searchs[search.id] = search;
			});
		};
		/**
		 * 获取查询组件的查询条件
		 */
		this.condition =function(id){
			var search = _that.searchs[id];
			if(search!=undefined){
				return search.condition();
			}else{
				return {};
			}
		};
		/**
		 * 通过查询组件默认的组件进行查询
		 */
		this.research = function(id){
			var search = _that.searchs[id];
			if(search!=undefined){
				search.research();
			}
		}
	}
	var obj = new f();
	obj.init();
	exports("jqsearch",obj);
});
/**
 <div class="layui-search" 
 	search="[{field:'t2.task_nm',title:'任务名称'},{field:'t3.src_nm',title:'数据源'},{field:'t2.task_nm,t3.src_nm',title:'文件信息',isDeafult:true}]" 
 	table="loglist" 
 	id="search">
 	<span type='text' field='file_nm' title='文件名' op='='/>
 </div>
 
 */
/**
 * 
 * 
工具条多表单元素
_pageSize:10
_pageNo:1
__xquery:[{"name":"t1.cp_nm","value":"22","op":"like"},
{"name":"t1.cp_state","value":"1","op":"="}]

工具条单表单元素
_pageSize:10
_pageNo:1
_freeConVal:w
_freeCon:qrc_nm

展开查询区
_pageSize:10
_pageNo:1
cp_id_label:mj010502
cp_id:f119d331dd604b50a7b7541e4254020e
qr_nm:2
chk_sys:2
chk_schema:2
chk_table:2
chk_col:2
start_execute_date:2018-01-17
end_execute_date:2018-01-23
 * 
 * 
 */