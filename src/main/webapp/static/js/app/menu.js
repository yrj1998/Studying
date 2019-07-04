var menutab={};
var mainActiveId='home';
var menus = [];
var menuParent={};
var bigDataMenus = null;
var menuUserName="";
var admin=GetQueryString("admin");
/**
 * 加载左侧菜单1
 */
function loadMenu(){
var msg = [];
if(admin.trim()=="0"){

msg = [];
	var json='[{"id": "1","name": "CSI餐厅小筑外卖网","icon": null,"url": "","parentId": "","childs": [{"id": "11","name": "菜系管理","icon": "/xingxing.png","url": "mealseriesManage.jsp","parentId": "4","childs": []},{"id": "12","name": "餐品管理","icon": "/xingxing.png","url": "mealManage.jsp","parentId": "4","childs": []},{"id": "13","name": "订单管理","icon": "/xingxing.png","url": "ordersManage.jsp","parentId": "4","childs": []},{"id": "14","name": "用户管理","icon": "/xingxing.png","url": "usersManage.jsp","parentId": "4","childs": [{"id": "141","name": "普通用户","icon": "","url": "usersManage.jsp","parentId": "14","childs": []},{"id": "142","name": "管理员","icon": "","url": "adminManage.jsp","parentId": "14","childs": []}]}]}]';
	// jquery的方法
	var jsonObj = $.parseJSON(json)

	
     for(var i =0 ;i < jsonObj.length;i++){
            msg[i] = jsonObj[i];
     }


	$("#editPasswordId").attr("data-href","adminEditPassword.jsp");
	$("#faceRegisterId").attr("data-href","adminFaceRegister.jsp");
	$("#aaa").attr("style","display:none;");//隐藏di
}else{
	msg = [];
	var json='[{"id": "1","name": "贴吧","icon": null,"url": "","parentId": "","childs": [{"id": "11","name": "菜单","icon": "/xingxing.png","url": "meal.jsp","parentId": "4","childs": []},{"id": "12","name": "我的购物车","icon": "/xingxing.png","url": "cart.jsp","parentId": "4","childs": []},{"id": "14","name": "我的订单","icon": "/xingxing.png","url": "myOrders.jsp","parentId": "4","childs": []},{"id": "16","name": "个人设置","icon": "/xingxing.png","url": "editUser.jsp","parentId": "4","childs": []}]}]';
	// jquery的方法
	var jsonObj = $.parseJSON(json)
     for(var i =0 ;i < jsonObj.length;i++){
            msg[i] = jsonObj[i];
     }
	$("#editPasswordId").attr("data-href","userEditPassword.jsp");
	$("#faceRegisterId").attr("data-href","usersFaceRegister.jsp");
	$("#mapId").attr("data-href","map.jsp");
	$("#aaa").attr("style","display:block;");//隐藏di

}

		
			bigDataMenus = msg;
			showNav(msg);
			//默认显示第一个一级导航菜单的二级菜单。
			showSideBarByNav(bigDataMenus[0].id);
	
		

	
}
/**
 * 根据导航菜单id显示左侧二级菜单
 * @param {Object} navId
 */
function showSideBarByNav(navId) {
	$("#leftMenuNav").html("");
	for (var i = 0 ; i < bigDataMenus.length;i++) {
		if (navId == bigDataMenus[i].id) {
			menus = bigDataMenus[i].childs;
			var ul = $("#leftMenuNav")[0];
			for(var i=0;i<menus.length;i++){
				var m = menus[i];
				var menuId = "m-"+m.id;
				var tab = createOneMenu(m,menuId,m.childs!=null&&m.childs.length>0);
				menuParent[m.id]='';
				addChildMenu(m,tab)
				$(ul).append(tab);
			}
			return;
		}
	}
}
function firstMenuClick() {
	var a = findFirstMenu($("#leftMenuNav"));
	if (a.length>0) {
		a[0].click();
	}
}

/**
 * 显示导航(一级)菜单
 */
function showNav(menus) {
	for (var i = 0 ; i < menus.length;i++) {
		var li = $('<li>'+
					'<a class="sysMenuItem" id="'+menus[i].id+'">'+menus[i].name+'</a>'+
				'</li>');
		li.find("a").click(function() {
			var navId = $(this).attr("id");
			showSideBarByNav(navId);
			firstMenuClick();
		});
		$('.sysMenu ul').append(li);		
	}
}
	//获取第一个可以点击的左侧菜单。
function findFirstMenu(ul) {
	if (ul.find('li>a[data-url]').length>0) {
		return $(ul.find('li>a[data-url]').children(0));
	} else {
		return null;
	}
	
	if (ul.find('li').length > 0) {
		var firstLi = $(ul.find('li')[0]);
		if(firstLi.find('ul').length>0) {//包含多个孩子
			return findFirstMenu($(firstLi.find('ul')[0]))
		} else {
			return firstLi.find('a');
		}
	} else {
		return null;
	}			
}

/**
 * 增加子菜单
 * @param parentMenu
 * @param parentEl
 */
function addChildMenu(parentMenu,parentEl){
	var childs = parentMenu.childs;
	if(childs!=null){
		var id = "m-"+parentMenu.id+'-ul'
		var ul = $("<ul>",{
			"id":id,
			"class":"nav sidebar-subnav collapse"
		});
		$("<li>",{
			"class":"sidebar-subnav-header",
			"html":parentMenu.name
		}).appendTo(ul);
		for(var i=0;i<childs.length;i++){
			var m = childs[i];
			var menuId = "m-"+m.id;
			menuParent[m.id]=parentMenu.id;
			var tab = createOneMenu(m,menuId,false);
			tab.appendTo(ul);
			$(parentEl).append(ul);
		}
	}
}
/**
 * 渲染一个菜单
 * @param m
 * @param menuId
 * @param hasChild
 * @returns
 */
function createOneMenu(m,menuId,hasChild){
	var tab = null;
	var a;
	if(hasChild){
		tab = $("<li>",{"id":menuId,"data-title":m.name})
		a = $("<a>",{
			"data-toggle":"collapse",
			"href":"javascript:void(0);",
			"data-target":"#"+menuId+"-ul",
			"class":"menu-item collapsed"
			}).bind('click', function(event){
				$sidebar = $('.sidebar');
				var sidebarCollapse = $sidebar.find('.collapse');
				sidebarCollapse.filter('.in').removeClass("open");
				$sidebar.find("i").removeClass("open");
				sidebarCollapse.filter('.in').collapse('hide');
				var tarId = $(this).data("target");
				var tarEl = $(tarId)[0];
				var aEl = $(this)[0];
				if($(tarEl).hasClass("collapse")){
					$(aEl).find("i").addClass("open");
					$(tarEl).collapse('show');
				}else{
					$(aEl).find("i").removeClass("open");
					$(tarEl).collapse('hide');
				}
				event.stopPropagation();
	    });
	}else{
		tab = $("<li>",{"id":menuId,"class":"menu-item","data-title":m.name})
		a = $("<a>",{
		"href":"javascript:void(0);",
		"data-id":m.id,
		"data-title":m.name,
		"data-url":m.url,
		"data-menuid":menuId
		}).bind("click",function(){
			menuItemClick.call(this);
		});
	}
	$("<em>",{
		"class":"menu-icon",
		"style":(m.icon==null||m.icon=='')?'':"background-image:url('"+context+"static/images"+m.icon+"')"
	}).appendTo(a);
	
	//先创建i标签，再创建span标签，解决火狐出现，小三角视觉上跑出a标签的bug 2018-03-20 - xugy
	if(hasChild){
		$("<i>",{
			"class":"fa fa-angle-right"
		}).appendTo(a);
	}
	
	$("<span>",{
		"text":m.name
	}).appendTo(a);
	
	
	
	
	tab.append(a);
	return tab;
}
/**
 * 菜单点击功能
 */
function menuItemClick(){
	var id = $(this).data("id");
	var title = $(this).data("title");
	var url = $(this).data("url");
	var menuid = $(this).data("menuid");

	selectMenu(menuid);
	tabAdd(id,title,url,menuid);
}
/**
 * 选中菜单
 * @param menuid
 */
function selectMenu(menuid){

	var menuObj = $("#"+menuid);

	if(menuObj.length==0){
		return;
	}

	if(mainActiveId != null && mainActiveId != "" && menuid != null && menuid != ""){
		$("#"+mainActiveId).removeClass("active");
		mainActiveId = menuid;
	}
	$("#"+menuid).addClass("active");
}

/**
 * 增加一个Tab页
 * @param id
 * @param title
 * @param url
 * @param activeId
 * @param parentActiveId
 */
function tabAdd(id,title,url,icon,closable){
	menutab.removeAll();
	icon = (icon==undefined)?"":icon;
	closable = (closable==undefined)?true:false;
	menutab.appendTab({id:id,title:title,url:url,icon:icon,closable:closable});
}





(function(window, document, $, undefined){
	  var $win;
	  var $html;
	  var $body;
	  var $sidebar;
	  var mq;

	  $(function(){

	    $win     = $(window);
	    $html    = $('html');
	    $body    = $('body');
	    $sidebar = $('.sidebar');
	    mq       = APP_MEDIAQUERY;
	    
	    // SIDEBAR ACTIVE STATE 
	    // ----------------------------------- 
	    
	    // Find current active item
	    var currentItem = $('.sidebar .active').parents('li');

	    // hover mode don't try to expand active collapse
	    if ( ! useAsideHover() )
	      currentItem
	        .addClass('active')     // activate the parent
	        .children('.collapse')  // find the collapse
	        .collapse('show');      // and show it

	    // remove this if you use only collapsible sidebar items
	    $sidebar.find('li > a + ul').on('show.bs.collapse', function (e) {
	      if( useAsideHover() ) e.preventDefault();
	    });

	    // SIDEBAR COLLAPSED ITEM HANDLER
	    // ----------------------------------- 


	    var eventName = isTouch() ? 'click' : 'mouseenter' ;
	    var subNav = $();
	    $sidebar.on( eventName, '.nav > li', function() {
	      if( isSidebarCollapsed() || useAsideHover() ) {
	    	 
	        subNav.trigger('mouseleave');
	        subNav = toggleMenuItem( $(this) );
	        // Used to detect click and touch events outside the sidebar          
	        sidebarAddBackdrop();
	      }

	    });

	    var sidebarAnyclickClose = $sidebar.data('sidebarAnyclickClose');

	    // Allows to close
	    if ( typeof sidebarAnyclickClose !== 'undefined' ) {

	      $('.wrapper').on('click.sidebar', function(e){
	        // don't check if sidebar not visible
	        if( ! $body.hasClass('aside-toggled')) return;

	        var $target = $(e.target);
	        if( ! $target.parents('.aside').length && // if not child of sidebar
	            ! $target.is('#user-block-toggle') && // user block toggle anchor
	            ! $target.parent().is('#user-block-toggle') // user block toggle icon
	          ) {
	                $body.removeClass('aside-toggled');          
	        }

	      });
	    }

	  });

	  function sidebarAddBackdrop() {
		  
	    var $backdrop = $('<div/>', { 'class': 'dropdown-backdrop'} );
	    console.log($backdrop);
	    $backdrop.insertAfter('.aside').on("click mouseenter", function () {
	    
	      removeFloatingNav();
	    });
	    $(".nav-floating").find("a").bind("click",function(){
	    	menuItemClick.call(this);
	    })
	  }

	  // Open the collapse sidebar submenu items when on touch devices 
	  // - desktop only opens on hover
	  function toggleTouchItem($element){
	    $element
	      .siblings('li')
	      .removeClass('open')
	      .end()
	      .toggleClass('open');
	  }

	  // Handles hover to open items under collapsed menu
	  // ----------------------------------- 
	  function toggleMenuItem($listItem) {
		 
	    removeFloatingNav();

	    var ul = $listItem.children('ul');
	    
	    if( !ul.length ){
	    	var title = $($listItem).data('title');
	    	var layerIndex =layui.layer.tips(title,'#'+$($listItem).attr('id'));
	    	$($listItem).on('mouseleave',function(env){
	    		var temp =this;
	    		var parent =$(temp).parent();
	    		layui.layer.close(layerIndex);
	    		$(this).unbind('mouseleave');
	    	});
	    	return $();
	    }
	    if( $listItem.hasClass('open') ) {
	      toggleTouchItem($listItem);
	      return $();
	    }
	   
	    var $aside = $('.aside');
	    var $asideInner = $('.aside-inner'); // for top offset calculation
	    // float aside uses extra padding on aside
	    var mar = parseInt( $asideInner.css('padding-top'), 0) + parseInt( $aside.css('padding-top'), 0);

	    var subNav = ul.clone().appendTo( $aside );
	    
	    toggleTouchItem($listItem);

	    var itemTop = ($listItem.position().top + mar) - $sidebar.scrollTop();
	    var vwHeight = $win.height();

	    subNav
	      .addClass('nav-floating')
	      .css({
	        position: 'absolute',//解决ie下，左侧菜单收起时，悬浮显示二级菜单被遮盖
	        top:      itemTop ,
	        bottom:   (subNav.outerHeight(true) + itemTop > vwHeight) ? 0 : 'auto'
	        		
	      
	      });

	    subNav.on('mouseleave', function() {
	      toggleTouchItem($listItem);
	      subNav.remove();
	    });

	    return subNav;
	  }

	  function removeFloatingNav() {
	    $('.sidebar-subnav.nav-floating').remove();
	    $('.dropdown-backdrop').remove();
	    $('.sidebar li.open').removeClass('open');
	  }

	  function isTouch() {
	    return $html.hasClass('touch');
	  }
	  function isSidebarCollapsed() {
	    return $body.hasClass('aside-collapsed');
	  }
	  function isSidebarToggled() {
	    return $body.hasClass('aside-toggled');
	  }
	  function isMobile() {
	    return $win.width() < mq.tablet;
	  }
	  function isFixed(){
	    return $body.hasClass('layout-fixed');
	  }
	  function useAsideHover() {
	    return $body.hasClass('aside-hover');
	  }

	})(window, document, window.jQuery);
	// TOGGLE STATE
	// -----------------------------------

	(function(window, document, $, undefined){

	  $(function(){

	    var $body = $('body');
	        toggle = new StateToggler();
	    $('[data-toggle-state]')
	      .on('click', function (e) {
	    	 
	        // e.preventDefault();
	        e.stopPropagation();
	        var element = $(this),
	            classname = element.data('toggleState'),
	            target = element.data('target'),
	            noPersist = (element.attr('data-no-persist') !== undefined);

	        // Specify a target selector to toggle classname
	        // use body by default
	        var $target = target ? $(target) : $body;
	        if(classname) {
	          if( $target.hasClass(classname) ) {
	            $target.removeClass(classname);
	            if( ! noPersist)
	              toggle.removeState(classname);
	          }
	          else {
	            $target.addClass(classname);
	            if( ! noPersist)
	              toggle.addState(classname);
	          }

	        }
	        // some elements may need this when toggled class change the content size
	        // e.g. sidebar collapsed mode and jqGrid
	        window.setTimeout(function(){
	        	$(window).resize();
	        }, 500);
	        

	    });
	  });

	  // Handle states to/from localstorage
	  window.StateToggler = function() {

	    var storageKeyName  = 'jq-toggleState';

	    // Helper object to check for words in a phrase //
	    var WordChecker = {
	      hasWord: function (phrase, word) {
	        return new RegExp('(^|\\s)' + word + '(\\s|$)').test(phrase);
	      },
	      addWord: function (phrase, word) {
	        if (!this.hasWord(phrase, word)) {
	          return (phrase + (phrase ? ' ' : '') + word);
	        }
	      },
	      removeWord: function (phrase, word) {
	        if (this.hasWord(phrase, word)) {
	          return phrase.replace(new RegExp('(^|\\s)*' + word + '(\\s|$)*', 'g'), '');
	        }
	      }
	    };

	    // Return service public methods
	    return {
	      // Add a state to the browser storage to be restored later
	      addState: function(classname){
	        var data = $.localStorage.get(storageKeyName);

	        if(!data)  {
	          data = classname;
	        }
	        else {
	          data = WordChecker.addWord(data, classname);
	        }

	        $.localStorage.set(storageKeyName, data);
	      },

	      // Remove a state from the browser storage
	      removeState: function(classname){
	        var data = $.localStorage.get(storageKeyName);
	        // nothing to remove
	        if(!data) return;

	        data = WordChecker.removeWord(data, classname);

	        $.localStorage.set(storageKeyName, data);
	      },

	      // Load the state string and restore the classlist
	      restoreState: function($elem) {
	        var data = $.localStorage.get(storageKeyName);
	        window.setTimeout(function(){
	        	$(window).resize();
	        }, 500);
	        // nothing to restore
	        if(!data) return;
	        $elem.addClass(data);
	      }

	    };
	  };
	  /**/
	})(window, document, window.jQuery);

function getRequest() { 
	var url = decodeURI(location.search); //获取url中"?"符后的字串 
	var theRequest = new Object(); 
	if (url.indexOf("?") != -1) { 
		var str = url.substr(1); 
		strs = str.split("&"); 
		for(var i = 0; i < strs.length; i ++) { 
			var index = strs[i].indexOf('=');
			if(index!=-1){
				var key = strs[i].substring(0,index);
				var val = unescape(strs[i].substring(index+1));
				theRequest[key]=val; 
			}
		} 
	} 
	return theRequest; 
} 
/**
 * 打开一个通过URL传来的菜单
 */
function _addDefultTab(){
	var params = getRequest();
	var id = params['_redict_menu_id'];
	var name = params['_redict_menu_name'];
	var params = params['_redict_menu_param'];
	if(id == undefined || name == undefined){
		var m = menus[0];
		var menuId = "m-"+m.id;
		if(m.childs!=null&&m.childs.length>0){
			$($('#'+menuId).find('a')[0]).click();
			var child= m.childs[0];
			var childId = 'm-'+child.id;
			var childName = child.name;
			var childUrl = child.url;
//			tabAdd(childId,childName,childUrl);
//			selectMenu(childId);
			$($('#'+menuId).find('a')[1]).click();
		}else{
			var name = m.name;
			var url = m.url;
			$('#'+menuId).find('a').click();
		}
		return;
	}else{
		var url = location.href;
		if(url.indexOf("?")!=-1){
			url = url.substring(0,url.indexOf('?'));
		}
		if(params!=undefined){
			params = params.replace(';','&')
			url +='?'+params;
		}
		tabAdd(id,name,url);
		if(menuParent[id]!=undefined && menuParent[id]!=''){
			$($('#m-'+menuParent[id]).find('a')[0]).click();
		}
		selectMenu("m-"+id);
	}
}
function GetQueryString(name)
{
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}

function loginOut(){
	
        	if(admin.trim()=="0"){
        		window.location.replace("adminlogin.jsp");
        	}else{
        		window.location.replace("userlogin.jsp");
        	}

}
$(function(){
	var $body = $('body');
    new StateToggler().restoreState( $body );
	loadMenu();
	layui.use(["jqtab"],function(){
		var funTab =  $("#funTab");
		menutab = funTab.btab();
		menutab.resizeTab();
		setTimeout(_addDefultTab,200);
	});
	var menuUserName=GetQueryString("menuUserName");
	$("#userNameSpan").html("欢迎登录："+menuUserName);
})
