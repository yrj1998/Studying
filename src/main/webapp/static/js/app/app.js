(function(window, document, $, undefined){

  window.APP_COLORS = {
    'primary':                '#5d9cec',
    'success':                '#27c24c',
    'info':                   '#23b7e5',
    'warning':                '#ff902b',
    'danger':                 '#f05050',
    'inverse':                '#131e26',
    'green':                  '#37bc9b',
    'pink':                   '#f532e5',
    'purple':                 '#7266ba',
    'dark':                   '#3a3f51',
    'yellow':                 '#fad732',
    'gray-darker':            '#232735',
    'gray-dark':              '#3a3f51',
    'gray':                   '#dde6e9',
    'gray-light':             '#e4eaec',
    'gray-lighter':           '#edf1f2'
  };
  
  window.APP_MEDIAQUERY = {
    'desktopLG':             1200,
    'desktop':                992,
    'tablet':                 768,
    'mobile':                 480
  };

})(window, document, window.jQuery);


// TRANSLATION
// ----------------------------------- 

(function(window, document, $, undefined){

  var preferredLang = 'en';
  var pathPrefix    = 'i18n'; // folder of json files
  var packName      = 'site';
  var storageKey    = 'jq-appLang';

  $(function(){

    if ( ! $.fn.localize ) return;

    // detect saved language or use default
    var currLang = $.localStorage.get(storageKey) || preferredLang;
    // set initial options
    var opts = {
        language: currLang,
        pathPrefix: pathPrefix,
        callback: function(data, defaultCallback){
          $.localStorage.set(storageKey, currLang); // save the language
          defaultCallback(data);
        }
      };

    // Set initial language
    setLanguage(opts);

    // Listen for changes
    $('[data-set-lang]').on('click', function(){

      currLang = $(this).data('setLang');

      if ( currLang ) {
        
        opts.language = currLang;

        setLanguage(opts);

        activateDropdown($(this));
      }

    });
    

    function setLanguage(options) {
      $("[data-localize]").localize(packName, options);
    }

    // Set the current clicked text as the active dropdown text
    function activateDropdown(elem) {
      var menu = elem.parents('.dropdown-menu');
      if ( menu.length ) {
        var toggle = menu.prev('button, a');
        toggle.text ( elem.text() );
      }
    }

  });

})(window, document, window.jQuery);



/**=========================================================
 * Module: utils.js
 * jQuery Utility functions library 
 * adapted from the core of UIKit
 =========================================================*/

(function($, window, doc){
    'use strict';
    
    var $html = $("html"), $win = $(window);

    $.support.transition = (function() {

        var transitionEnd = (function() {

            var element = doc.body || doc.documentElement,
                transEndEventNames = {
                    WebkitTransition: 'webkitTransitionEnd',
                    MozTransition: 'transitionend',
                    OTransition: 'oTransitionEnd otransitionend',
                    transition: 'transitionend'
                }, name;

            for (name in transEndEventNames) {
                if (element.style[name] !== undefined) return transEndEventNames[name];
            }
        }());

        return transitionEnd && { end: transitionEnd };
    })();

    $.support.animation = (function() {

        var animationEnd = (function() {

            var element = doc.body || doc.documentElement,
                animEndEventNames = {
                    WebkitAnimation: 'webkitAnimationEnd',
                    MozAnimation: 'animationend',
                    OAnimation: 'oAnimationEnd oanimationend',
                    animation: 'animationend'
                }, name;

            for (name in animEndEventNames) {
                if (element.style[name] !== undefined) return animEndEventNames[name];
            }
        }());

        return animationEnd && { end: animationEnd };
    })();

    $.support.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || function(callback){ window.setTimeout(callback, 1000/60); };
    $.support.touch                 = (
        ('ontouchstart' in window && navigator.userAgent.toLowerCase().match(/mobile|tablet/)) ||
        (window.DocumentTouch && document instanceof window.DocumentTouch)  ||
        (window.navigator['msPointerEnabled'] && window.navigator['msMaxTouchPoints'] > 0) || //IE 10
        (window.navigator['pointerEnabled'] && window.navigator['maxTouchPoints'] > 0) || //IE >=11
        false
    );
    $.support.mutationobserver      = (window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver || null);

    $.Utils = {};

    $.Utils.debounce = function(func, wait, immediate) {
        var timeout;
        return function() {
            var context = this, args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };

    $.Utils.removeCssRules = function(selectorRegEx) {
        var idx, idxs, stylesheet, _i, _j, _k, _len, _len1, _len2, _ref;

        if(!selectorRegEx) return;

        setTimeout(function(){
            try {
              _ref = document.styleSheets;
              for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                stylesheet = _ref[_i];
                idxs = [];
                stylesheet.cssRules = stylesheet.cssRules;
                for (idx = _j = 0, _len1 = stylesheet.cssRules.length; _j < _len1; idx = ++_j) {
                  if (stylesheet.cssRules[idx].type === CSSRule.STYLE_RULE && selectorRegEx.test(stylesheet.cssRules[idx].selectorText)) {
                    idxs.unshift(idx);
                  }
                }
                for (_k = 0, _len2 = idxs.length; _k < _len2; _k++) {
                  stylesheet.deleteRule(idxs[_k]);
                }
              }
            } catch (_error) {}
        }, 0);
    };

    $.Utils.isInView = function(element, options) {

        var $element = $(element);

        if (!$element.is(':visible')) {
            return false;
        }

        var window_left = $win.scrollLeft(),
            window_top  = $win.scrollTop(),
            offset      = $element.offset(),
            left        = offset.left,
            top         = offset.top;

        options = $.extend({topoffset:0, leftoffset:0}, options);

        if (top + $element.height() >= window_top && top - options.topoffset <= window_top + $win.height() &&
            left + $element.width() >= window_left && left - options.leftoffset <= window_left + $win.width()) {
          return true;
        } else {
          return false;
        }
    };

    $.Utils.options = function(string) {

        if ($.isPlainObject(string)) return string;

        var start = (string ? string.indexOf("{") : -1), options = {};

        if (start != -1) {
            try {
                options = (new Function("", "var json = " + string.substr(start) + "; return JSON.parse(JSON.stringify(json));"))();
            } catch (e) {}
        }

        return options;
    };

    $.Utils.events       = {};
    $.Utils.events.click = $.support.touch ? 'tap' : 'click';

    $.langdirection = $html.attr("dir") == "rtl" ? "right" : "left";

    $(function(){

        // Check for dom modifications
        if(!$.support.mutationobserver) return;

        // Install an observer for custom needs of dom changes
        var observer = new $.support.mutationobserver($.Utils.debounce(function(mutations) {
            $(doc).trigger("domready");
        }, 300));

        // pass in the target node, as well as the observer options
        observer.observe(document.body, { childList: true, subtree: true });

    });

    // add touch identifier class
    $html.addClass($.support.touch ? "touch" : "no-touch");

}(jQuery, window, document));


// Custom jQuery
// -----------------------------------


(function(window, document, $, undefined){

  $(function(){


         $('.collect-sort-folder').each(function() {
            $(this).find('.collect-tab-head').each(function() {
                $(this).children().eq(0).addClass('active')
            });
            $(this).find('.collect-tab-body').each(function() {
                $(this).children().eq(0).show();
            });
            $(this).find('.collect-tab-head').children().on('click', function() {
                $(this).addClass('active').siblings().removeClass('active');
                var index = $('.collect-tab-head').children().index(this);
                $('.collect-tab-body').children().eq(index).show().siblings().hide();
            });
         });

         $(document).on('click', '.collect-tab-body .sort a', function(){
            if (!$(this).hasClass('active')) {
                $(this).addClass('active').siblings('a').removeClass('active')
            }
         });
         function reszieWin(){
        	 $("#content").css("height",$("body").height()-69);
         }
         $(window).on("resize",function(){
        	 reszieWin();
        	 if(typeof(menutab)!='undefined')menutab.resizeTab();
         })
         reszieWin();
  });
  
  
})(window, document, window.jQuery);

function bindTheme(){
	$("[data-theme]").bind("click",function(){
		var theme = $(this).data("theme");
		$("[data-type]").attr("href",context+"/static/css/"+theme+"/theme.css");
	});
}
$(function(){
	bindTheme();
	layui.use(["jqmodel"]);
	showTaskMenu();
});

function loadSystemUrl(url){
	//showShade();  2018-03-19 xugy 去掉点击一级菜单时弹出的遮罩
	location.href = url;
}

function showTaskMenu(){
	function animatioinEnd(){
		$(".task-panel").css("display",'none');
		$(".task-panel").unbind("webkitAnimationEnd",animatioinEnd);
	}
	function clickTask(){
		$(".task-panel").css('display','block');
		var open = $(this).data("open");
		if(open=='true'){
			$(".task-panel").bind("webkitAnimationEnd",animatioinEnd)
			$(".task-panel").removeClass("fadeInRight").addClass("fadeOutRight");
			$(this).data("open","false");
		}else{
			$(".task-panel").removeClass("fadeOutRight").addClass("fadeInRight");
			$(this).data("open","true");
		}
	}
	function selectStart(){
		return false;
	}
	function clearSlct(){
		if(typeof window.getSelection == 'function'){
			window.getSelection().removeAllRanges();
		}else{
			document.selection.empty();
		}
	}

//	$(".task-icon").click(function(){
//		
//	});
	var storeX = $.localStorage.get('taskX');
	var storeY = $.localStorage.get('taskY');
	if(storeX==undefined){
		storeX=1007;
	}
	if(storeY==undefined){
		storeY =13;
	}
	var docWidth = $("body").width();
	var docHeight = $('body').height();
	$(".all-task").css({"left":storeX,'top':storeY});
	
	var dragStart = false;
	var div = null;
	var downX,downY,upX,upY,imgX,imgY;
	$(".all-task").on('mousedown',function(e){
		downX = e.clientX;
		downY = e.clientY;
		var offset = $($(".all-task")[0]).offset();
		var offsetX = offset.left;
		var offsetY = offset.top;
		imgX = downX -offsetX;
		imgY = downY -offsetY;
		dragStart =true;
		div = $("<div>",{
			'class':'task-marker',
			'style':'position: absolute;left:0px;top:0px;width:100%;height:100%;z-index:9998;'
		});
		$('body').bind('selectstart',selectStart);
		div.appendTo('body');
	});
	$("body").on('mousemove',function(e){
		if(dragStart){
			var x = e.clientX;
			var y = e.clientY;
			var left = x-imgX;
			var top = y-imgY;
			var docWidth = $("body").width();
			var docHeight = $('body').height();
			if(left<0){
				left=0;
			}else if(left+20>docWidth){
				left = docWidth-20;
			}
			if(top<0){
				top=0;
			}else if(top+20>docHeight){
				top = docHeight-20;
			}
			$(".all-task").css({"left":left,'top':top});
		}
	});
	$(".all-task").on('mouseup',function(e){
		upX = e.clientX;
		upY = e.clientY;
		var offset = $($(".all-task")[0]).offset();
		var offsetX = offset.left;
		var offsetY = offset.top;
		if(downX == upX && downY == upY){
			clickTask();
		}else{
			$.localStorage.set('taskX', offsetX);
			$.localStorage.set('taskY', offsetY);
		}
		dragStart =false;
		$(".task-marker").remove();
		$('body').unbind('selectstart',selectStart);
		clearSlct();
	});
}

/**
 * 打开一个URL
 * @param id
 * @param name
 * @param url
 */
function openSystemMenu(id,name,url){
	var menuurl =url;
	var params = "";
	var index = url.indexOf('?');
	if(index!=-1){
		menuurl = url.substring(0,index);
		
		params = url.substring(index+1).replace("&",";");
	}
	var url = context+"/"+menuurl+"?__jtabs__layout__=refresh_main&_redict_menu_id="+id+"&_redict_menu_name="+name+"&_redict_menu_param="+params;
	
	try{
		location.href=url;
//		window.open(url,'_blank');
	}catch(e){
//		alert(e.message);
	}
}