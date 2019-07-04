layui.define(["jquery"],function(exports){
	var $ =layui.jquery;
	var scrollSetp = 500;
	var operationWidth = 100;
	var leftOperationWidth = 30; 
	var animatSpeed = 150;
	var addTabAnimate="zoomIn";
	var removeTabAnimate="zoomOut";
	var closeOther="removeOther";
	var closeAll="removeAll";
	var normalTab=null;
//	layui.link(layui.context+"/static/comp/tabs/tabs.css");
	var f = function(){};
	/**
	 * config:
		  {
		   id:string,
		   title:string,
		   url:url,
		   icon:iconClass,
		   closable:true|false
		   }
	 */
	$.fn.btab = function() {
		var thisObj = $(this);
		var _this = this;
		var _pageTabObj,_menuListObj,_menuAllObj,_menuAllUlObj,_pageTabContent,_pageContentObj,_pagePrevObj,_pageNextObj,_selectMenuList,_selectIframe,_selectMenuUl;
		/**
		 * 初始化Tab
		 */
		_this.init=function(){
			$('<div class="page-tab">'+
	          '  <button class="tab-btn page-prev"><em class="fa fa-chevron-left"></em></button>'+
	          '  <div class="page-tab-content">'+
	          '      <div class="menu-list"></div>'+
	          '  </div>'+
	          '  <button class="tab-btn page-next"><em class="fa fa-chevron-right"></em></button>'+
	          '  <div class="page-operation">'+
			  '	   <button class="tab-btn page-operation"><em class="fa fa-list"></em></button>'+
			  '	   <div class="menu-all animated flipInY">'+
			  '	     <ul class="menu-all-ul"><li data-value="'+closeOther+'">关闭其他</li><li data-value="'+closeAll+'">关闭全部</li></ul>'+
			  '	   </div>'+
	          '  </div>'+
	          '</div>'+
	          '<div class="page-content"></div>').appendTo(thisObj);
			_pageTabObj  = thisObj.find(".page-tab")[0];
			_menuListObj = thisObj.find(".menu-list")[0];
			_menuAllUlObj = thisObj.find(".menu-all-ul")[0];
			_menuAllObj = thisObj.find(".menu-all")[0];
			_pageOperationObj =thisObj.find(".page-operation")[0];
			_pageContentObj = thisObj.find(".page-content")[0];
			_pageTabContent = thisObj.find(".page-tab-content")[0];
			_pagePrevObj = thisObj.find(".page-prev")[0];
			_pageNextObj = thisObj.find(".page-next")[0]
			$(_pagePrevObj).bind("click",_this.toPrevPage);
			$(_pageNextObj).bind("click",_this.toNextPage);
			$(_pageOperationObj).bind("click",_this.showMenu);
			$(_menuAllUlObj).find("li[data-value='"+closeAll+"']").bind("click",function(){
				_this.removeAll();
				$(_menuAllObj).hide();
				event.stopPropagation();
			});
			$(_menuAllUlObj).find("li[data-value='"+closeOther+"']").bind("click",function(){
				_this.removeOther();
				$(_menuAllObj).hide();
				event.stopPropagation();
			});
			$("body").bind("mousedown",
				function(event) {
					if (!(event.target.className === "menu-all"
							|| event.target.className === "menu-all-ul"
							|| event.target.className === "page-operation"
							|| event.target.className === "page-operation" 
							|| event.target.parentElement.className === "menu-all-ul")) {
						$(_menuAllObj).hide();
					}
			});
		};
		_this.resizeTab =function(){
			var offset = thisObj.offset();
			var left = offset.left;
			var top  = offset.top;
			
			var win = $(window);
			var width = win.width();
			var height  = win.height();
			thisObj.css("width",width-left-10);
			thisObj.css("height",height-top);
			$(_pageContentObj).css("height",height-top-30);
		}
		/**
		 * 增加一个Tab选项卡
		 */
		_this.addTab =function(config){
			var id = config.id;
			var title = config.title;
			
			var url = config.url;
			var scroll = config.scroll==undefined ?true:config.scroll;
			var closable = config.closable==undefined?true:config.closable;
			var icon = config.icon||"";
			var tabHtml = $("<div>", {
				"id":"tab_item_"+id,
				"data-value" : id,
				"class" :"tabitem animated "+addTabAnimate,
				"data-closable":closable
			}).bind("click", function() {
				var jthis = $(this);
				var op = jthis.data("value");
				_this.linkFrame(jthis.data("value"));
			});
			if(icon!=undefined && icon!=""){
				var iconHtml = $("i",{
					"class":icon
				});
				tabHtml.append(iconHtml);
			}
			tabHtml.append(title);
			if(closable){
				var iel = $("<i>", {
					"class" : "menu-close fa fa-times"
				}).bind("click", _this.closeMenu);
				tabHtml.append(iel);
			}
			tabHtml.appendTo(_menuListObj);
			/*
		    *作者：sjm
       	    *时间：2018-05-17
		    *开发时注释掉begin
		    */
			
			/*
		    *开发时注释掉end
		    */
	
			$("<iframe>", {
				"class" : "iframe-content",
				"data-value" : id,
				"id":"tab_frame_"+id,
				'allowFullScreen':"true",
				"scrolling":scroll?"yes":"no",
				src : url
			}).appendTo(_pageContentObj);
			
			$("<li>", {
				"html" : title,
				"data-value" : id,
				"id":"tab_ul_"+id
			}).bind("click",function() {
				var jthis = $(this);
				_this.showTab(jthis.data("value"));
				$(_menuAllObj).hide();
				event.stopPropagation();
			}).appendTo(_menuAllUlObj);
			
		};
		/**
		 * 增加一个选项卡，此方法会自动判断Tab是否存在，如果存在，则显示，如果不存在，则添加
		 */
		_this.appendTab=function(config){
			var id = config.id;
			var exist = _this.existTab(id);
			if(!exist){
				_this.addTab(config);
			}
			_this.showTab(id);
		};
		/**
		 * 删除一个Tab选项卡
		 */
		_this.removeTab =function(tab,movetab){
			var jthis = null;
			var tabId = null;
			if(movetab==undefined)movetab=true;
			if(typeof(tab)=='string' || typeof(tab)=='number'){
				jthis = $(_menuListObj).find("div[data-value='"+ tab + "']");
				tabId = tab;
			}else{
				jthis = $(tab);
				tabId = jthis.data("value");
			}
			
			if(jthis.length==0){
				return;
			}
			if (jthis.hasClass("active")) {
				var linext = jthis.next();
				while($(linext).data('remove')=='true'){
					linext = linext.next();
				}
				if (linext.length > 0) {
					linext.click();
					if(movetab)_this.moveTab(linext);
				} else {
					var liprev = jthis.prev();
					while($(liprev).data('remove')=='true'){
						liprev = liprev.prev();
					}
					if (liprev.length > 0) {
						liprev.click();
						if(movetab)_this.moveTab(liprev);
					}
				}
			}
			jthis.data("remove","true");
			$(jthis).addClass("closeable").animate({
				"width" : "0px"
			}, 100,function(){
				jthis.remove();
				 $(_pageContentObj).find(".iframe-content[data-value='"+ tabId + "']").remove();
				 $(_menuAllUlObj).find("li[data-value='"+ tabId + "']").remove();
			});
			
			event.stopPropagation();
		};
		
		
		/**
		 * 删除一个Tab选项卡
		 */
		_this.removeTab1 =function(tab,movetab){
			var jthis = null;
			var tabId = null;
			if(movetab==undefined)movetab=true;
			if(typeof(tab)=='string' || typeof(tab)=='number'){
				jthis = $(_menuListObj).find("div[data-value='"+ tab + "']");
				tabId = tab;
			}else{
				jthis = $(tab);
				tabId = jthis.data("value");
			}
			
			if(jthis.length==0){
				return;
			}
			if (jthis.hasClass("active")) {
				var linext = jthis.next();
				while($(linext).data('remove')=='true'){
					linext = linext.next();
				}
				if (linext.length > 0) {
					linext.click();
					if(movetab)_this.moveTab(linext);
				} else {
					var liprev = jthis.prev();
					while($(liprev).data('remove')=='true'){
						liprev = liprev.prev();
					}
					if (liprev.length > 0) {
						liprev.click();
						if(movetab)_this.moveTab(liprev);
					}
				}
			}
			jthis.data("remove","true");
			$(jthis).addClass("closeable").animate({
				"width" : "0px"
			}, 100,function(){
				jthis.remove();
				 $(_pageContentObj).find(".iframe-content[data-value='"+ tabId + "']").remove();
				 $(_menuAllUlObj).find("li[data-value='"+ tabId + "']").remove();
			});
			

		};
		
		/**
		 * 删除全部Tab选项卡
		 */
		_this.removeAll =function(){
			var allCanCloseTab = $(_menuListObj).find("div");
			var notClose = null;
			$(allCanCloseTab).each(function(t){
				var closable = $(allCanCloseTab[t]).data("closable");
				if(closable){
					_this.removeTab(allCanCloseTab[t],false);
				}else{
					notClose = allCanCloseTab[t];
				}
			});
			if(notClose!=null){
				_this.showTab($(notClose).data("value"));
			}
		};
		/**
		 * 删除全部Tab选项卡
		 */
		_this.removeOther =function(){
			var allCanCloseTab = $(_menuListObj).find("div");
			var notClose = null;
			$(allCanCloseTab).each(function(t){
				var closable = $(allCanCloseTab[t]).data("closable");
				var hasActive = $(allCanCloseTab[t]).hasClass("active");
				if(closable && !hasActive){
					_this.removeTab1(allCanCloseTab[t]);
				}
			});
			if(notClose!=null){
				_this.showTab($(notClose).data("value"));
			}
		};
		
		/**
		 * 显示Tab
		 */
		_this.showTab =function(tabId){
			_this.linkFrame(tabId);
			_this.moveTab(tabId);
		};
		//,_selectMenuList,_selectIframe,_selectMenuUl
		/**
		 * 显示Frame
		 */
		_this.linkFrame=function(tabId){
			normalTab = tabId;
			if(_selectMenuList != null){
				$(_selectMenuList).removeClass("active");
				$(_selectIframe).removeClass("active");
				$(_selectMenuUl).removeClass("active");
			}
			_selectMenuList = $("#tab_item_" + tabId);
			_selectIframe = $("#tab_frame_" + tabId );
			_selectMenuUl = $("#tab_ul_" + tabId);
			$(_selectMenuList).addClass("active");
			$(_selectIframe).addClass("active");
			$(_selectMenuUl).addClass("active");
		}
		
		/**
		 * 判断是否存在一个Tab
		 */
		_this.existTab =function(tabId){
			return $(_menuListObj).find("div[data-value='" + tabId + "']").length>0;
		};
		/**
		 * 返回Tab选项卡的总数
		 */
		_this.tabSize =function(){
			return $(_menuListObj).find("div").length;
		};
		/**
		 * Tab页上移一页
		 */
		_this.toPrevPage=function(){
			var nav = $(_menuListObj);
			var left = parseInt(nav.css("margin-left"));
			if (left !== 0) {
				nav.animate({
					"margin-left" : (left + scrollSetp > 0 ? 0
							: (left + scrollSetp))
							+ "px"
				}, animatSpeed)
			}
		}
		/**
		 * Tab页下移一页
		 */
		_this.toNextPage=function(){
			var nav = $(_menuListObj);
			var left = parseInt(nav.css("margin-left"));
			var wwidth = parseInt($(".page-tab").width());
			var navwidth = parseInt(nav.width());
			var menu = $(_menuListObj).find("div");
			if(menu.length>0){
				var last = $(menu[menu.length-1]);
				navwidth = last.offset().left+last.width();
			}
			var allshowleft = -(navwidth - wwidth + operationWidth);
			if (allshowleft !== left
					&& navwidth > wwidth - operationWidth) {
				var temp = (left - scrollSetp);
				nav.animate({
					"margin-left" : (temp < allshowleft ? allshowleft
							: temp)
							+ "px"
				}, animatSpeed);
			}
		}
		/**
		 * 关闭按钮事件
		 */
		_this.closeMenu = function() {
			var tabId =$(this.parentElement).data("value");
			_this.removeTab(tabId);
		};
		/**
		 * 移动Tab
		 */
		_this.moveTab=function(tab){
			var nav = $(_menuListObj);
			var pageTabContent =$(_pageTabContent);
			var selDom = null;
			if(typeof(tab)=='string' || typeof(tab)=='number'){
				selDom = nav.find("div[data-value='" + tab + "']");
			}else{
				selDom = $(tab);
			}
			var pageLeft =  pageTabContent.offset().left;
			var pageWidth = pageTabContent.width();
			
			var selLeft = $(selDom).offset().left;
			var selWidth = $(selDom).width();
			
			var menuLeft = parseInt(nav.css("margin-left"));
			if(selLeft<pageLeft){
				var targetMenuLeft = menuLeft + (pageLeft - selLeft)+20;
				nav.animate({
					"margin-left" : targetMenuLeft + "px"
				}, animatSpeed);
			}else if( selLeft+selWidth >pageLeft+pageWidth-90){
				var targetMenuLeft = menuLeft - (selLeft + selWidth - pageLeft -pageWidth +150);
				nav.animate({
					"margin-left" : targetMenuLeft + "px"
				}, animatSpeed);
			}
		}
		/**
		 * 显示下拉项
		 */
		_this.showMenu=function(){
			var menuall = $(_menuAllObj);
			if (menuall.is(":visible")) {
				menuall.hide();
			} else {
				menuall.show();
			}
		}
		this.init();
		return this;
	};
	exports("jqtab",{});
});