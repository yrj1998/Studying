
(function ($) {
    var defaults = {
        allDataCount: 0,//一共有多少条数据
        everyPageDataCount:0,//每一页显示多少条数据
        nowPageCataCount:0,//当前是第几页
        success: function (nowPageCataCount/*当前是第几页*/) {

        },
    };

    var methods = {
        init: function (options) {
            if (!window.FileReader) {
                alert("您的浏览器不支持HTML5 File API，请使用HTML5浏览器(IE10/Chrome等)浏览。");
                return null;
            }
            $.extend(defaults, options);
//            if (defaults.allDataCount != 0) {
//                defaults.success(defaults.nowPageCataCount);//
//            }
            
            return this.each(function () {
                var _this = $(this);
               //自动计算总页数
                var allpageCount = Math.ceil(defaults.allDataCount / defaults.everyPageDataCount);

                var begin = 0
                var end = 0;
                var bool = new Array();
                for (var i = 0; i < 5; i++) {
                    bool[i] = false;
                }
                //首页
                var firstPageBool=false;
     
                //尾页
                var lastPageBool=false;
                
                pageHtml();
                //各种按键响应
                function keyResponse() {
                	if(firstPageBool){
                		//鼠标移动到第一页链接的响应事件
                        var tdFirstPageMouseMove = _this.find("li[id=tdFirstPageId]").get(0);
                        if (tdFirstPageMouseMove.attachEvent) {
                            tdFirstPageMouseMove.attachEvent("onmousemove", function (e) {
                                if (defaults.nowPageCataCount != 0) {
                                    $("#tdFirstPageId").css("cursor", "pointer");
                                }
                            });
                        } else {
                            tdFirstPageMouseMove.addEventListener("mousemove", function (e) {
                                if (defaults.nowPageCataCount != 0) {
                                    $("#tdFirstPageId").css("cursor", "pointer");
                                }
                            }, false);
                        }
                        //返回第一页的链接响应事件
                        var tdFirstPageClick = _this.find("li[id=tdFirstPageId]").get(0);
                        
                        if (tdFirstPageClick.attachEvent) {
                            tdFirstPageClick.attachEvent("onclick", function (e) {
                                defaults.nowPageCataCount = 0;
                                pageHtml();
                                defaults.success(defaults.nowPageCataCount);
                            });
                        } else {
                            tdFirstPageClick.addEventListener("click", function (e) {
                                defaults.nowPageCataCount = 0;
                                pageHtml();
                                defaults.success(defaults.nowPageCataCount);

                            }, false);
                        }
                        //鼠标移动到上一页链接的响应事件
                        var tdPreviousMouseMove = _this.find("li[id=tdPreviousPageId]").get(0);
                        if (tdPreviousMouseMove.attachEvent) {
                            tdPreviousMouseMove.attachEvent("onmousemove", function (e) {
                                if (defaults.nowPageCataCount != 0) {
                                    $("#tdPreviousPageId").css("cursor", "pointer");
                                }
                            });
                        } else {
                            tdPreviousMouseMove.addEventListener("mousemove", function (e) {
                                if (defaults.nowPageCataCount != 0) {
                                    $("#tdPreviousPageId").css("cursor", "pointer");
                                }
                            }, false);
                        }
                        //上一页链接的响应事件
                        var tdPreviousClick = _this.find("li[id=tdPreviousPageId]").get(0);
                        if (tdPreviousClick.attachEvent) {
                            tdPreviousClick.attachEvent("onclick", function (e) {
                                if (defaults.nowPageCataCount != 0) {
                                    defaults.nowPageCataCount--;
                                    pageHtml();
                                }
                                defaults.success(defaults.nowPageCataCount);
                            });
                        } else {
                            tdPreviousClick.addEventListener("click", function (e) {
                                if (defaults.nowPageCataCount != 0) {
                                    defaults.nowPageCataCount--;
                                    pageHtml();
                                }
                                defaults.success(defaults.nowPageCataCount);

                            }, false);
                        }
                	}
                    
                    if(lastPageBool){
                    	//鼠标移动到下一页链接的响应事件
                        var tdNextPageMouseMove = _this.find("li[id=tdNextPageId]").get(0);
                        if (tdNextPageMouseMove.attachEvent) {
                            tdNextPageMouseMove.attachEvent("onmousemove", function (e) {
                                if ((defaults.nowPageCataCount + 1) < allpageCount) {
                                    $("#tdNextPageId").css("cursor", "pointer");
                                }
                            });
                        } else {
                            tdNextPageMouseMove.addEventListener("mousemove", function (e) {
                                if ((defaults.nowPageCataCount + 1) < allpageCount) {
                                    $("#tdNextPageId").css("cursor", "pointer");
                                }
                            }, false);
                        }
                        //下一页链接的响应事件
                        var tdNextPageClick = _this.find("li[id=tdNextPageId]").get(0);
                        if (tdNextPageClick.attachEvent) {
                            tdNextPageClick.attachEvent("onclick", function (e) {
                                if (defaults.nowPageCataCount + 1 != allpageCount) {
                                    defaults.nowPageCataCount++;
                                    pageHtml();
                                }
                                defaults.success(defaults.nowPageCataCount);
                            });
                        } else {
                            tdNextPageClick.addEventListener("click", function (e) {
                                if (defaults.nowPageCataCount + 1 != allpageCount) {
                                    defaults.nowPageCataCount++;
                                    pageHtml();
                                }
                                defaults.success(defaults.nowPageCataCount);

                            }, false);
                        }
                        //鼠标移动到最后一页的响应事件
                        var tdLastPageMouseMove = _this.find("li[id=tdLastPageId]").get(0);
                        if (tdLastPageMouseMove.attachEvent) {
                            tdLastPageMouseMove.attachEvent("onmousemove", function (e) {
                                if ((defaults.nowPageCataCount + 1) < allpageCount) {
                                    $("#tdLastPageId").css("cursor", "pointer");
                                }
                            });
                        } else {
                            tdLastPageMouseMove.addEventListener("mousemove", function (e) {
                                if ((defaults.nowPageCataCount + 1) < allpageCount) {
                                    $("#tdLastPageId").css("cursor", "pointer");
                                }
                            }, false);
                        }
                        //最后一页链接的响应事件
                        var tdLastPageClick = _this.find("li[id=tdLastPageId]").get(0);
                        if (tdLastPageClick.attachEvent) {
                            tdLastPageClick.attachEvent("onclick", function (e) {
                                defaults.nowPageCataCount = allpageCount - 1;
                                pageHtml();
                                defaults.success(defaults.nowPageCataCount);
                            });
                        } else {
                            tdLastPageClick.addEventListener("click", function (e) {
                                defaults.nowPageCataCount = allpageCount - 1;
                                pageHtml();
                                defaults.success(defaults.nowPageCataCount);
                            }, false);
                        }
                    }
                    
               
                    if (bool[0] == true) {
                        var liSelectPageClick0 = _this.find("li[id=liSelectPageId" + begin + "]").get(0);
                        if (liSelectPageClick0.attachEvent) {
                            liSelectPageClick0.attachEvent("onclick", function (e) {

                                defaults.nowPageCataCount = begin;
                                pageHtml();
                                defaults.success(defaults.nowPageCataCount);
                            });
                        } else {

                            liSelectPageClick0.addEventListener("click", function (e) {
                                defaults.nowPageCataCount = begin;
                                pageHtml();
                                defaults.success(defaults.nowPageCataCount);

                            }, false);
                        }
                    }
                  
                    if (bool[1] == true) {
                        var liSelectPageClick1 = _this.find("li[id=liSelectPageId" + (begin + 1) + "]").get(0);
                        if (liSelectPageClick1.attachEvent) {
                            liSelectPageClick1.attachEvent("onclick", function (e) {

                                defaults.nowPageCataCount = (begin + 1);
                                pageHtml();
                                defaults.success(defaults.nowPageCataCount);
                            });
                        } else {

                            liSelectPageClick1.addEventListener("click", function (e) {
                                defaults.nowPageCataCount = (begin + 1);
                                pageHtml();
                                defaults.success(defaults.nowPageCataCount);

                            }, false);
                        }
                    }
                  
                    if (bool[2] == true) {
                        var liSelectPageClick2 = _this.find("li[id=liSelectPageId" + (begin + 2) + "]").get(0);
                        if (liSelectPageClick2.attachEvent) {
                            liSelectPageClick2.attachEvent("onclick", function (e) {

                                defaults.nowPageCataCount = (begin + 2);
                                pageHtml();
                                defaults.success(defaults.nowPageCataCount);
                            });
                        } else {

                            liSelectPageClick2.addEventListener("click", function (e) {
                                defaults.nowPageCataCount = (begin + 2);
                                pageHtml();
                                defaults.success(defaults.nowPageCataCount);

                            }, false);
                        }
                    }

                    if (bool[3] == true) {
                        var liSelectPageClick3 = _this.find("li[id=liSelectPageId" + (begin + 3) + "]").get(0);
                        if (liSelectPageClick3.attachEvent) {
                            liSelectPageClick3.attachEvent("onclick", function (e) {

                                defaults.nowPageCataCount = (begin + 3);
                                pageHtml();
                                defaults.success(defaults.nowPageCataCount);
                            });
                        } else {

                            liSelectPageClick3.addEventListener("click", function (e) {
                                defaults.nowPageCataCount = (begin + 3);
                                pageHtml();
                                defaults.success(defaults.nowPageCataCount);

                            }, false);
                        }
                    }
                    if (bool[4] == true) {
                        var liSelectPageClick4 = _this.find("li[id=liSelectPageId" + (begin + 4) + "]").get(0);
                        if (liSelectPageClick4.attachEvent) {
                            liSelectPageClick4.attachEvent("onclick", function (e) {

                                defaults.nowPageCataCount = (begin + 4);
                                pageHtml();
                                defaults.success(defaults.nowPageCataCount);
                            });
                        } else {

                            liSelectPageClick4.addEventListener("click", function (e) {
                                defaults.nowPageCataCount = (begin + 4);
                                pageHtml();
                                defaults.success(defaults.nowPageCataCount);

                            }, false);
                        }
                    } 
                }
                
                function pageHtml() {
                    if (defaults.allDataCount != 0) {
                        if ((defaults.nowPageCataCount + 1) == allpageCount) {
                            lastdisabled = "class='active'";

                            //尾页
                            lastPageBool=false;
                        } else {
                            lastdisabled = "";

                            //尾页
                            lastPageBool=true;
                        }
                        if (defaults.nowPageCataCount == 0) {
                            firstdisabled = "class='active'";
                            //首页
                           firstPageBool=false;

                        } else {
                            firstdisabled = "";
                            //首页
                            firstPageBool=true;

                        }
                        paginationHtml = "<div style='width:100%;text-align:center'>"
                        paginationHtml += '<div class="pagination alternate">';
                        paginationHtml += '   <ul>';
                        paginationHtml += '       <li ' + firstdisabled + '  id="tdFirstPageId" ><a style ="margin-right:3px; margin-left:3px;text-align:center">首页</a></li>';
                        paginationHtml += '       <li ' + firstdisabled + '  id="tdPreviousPageId" ><a style ="margin-right:3px; margin-left:3px;text-align:center;color:">上一页</a></li>';
                        var iBegin = 0;
                        var iEnd = 5;
                        bool = new Array();
                        for (var i = 0; i < 5; i++) {
                            bool[i] = true;
                        }
                        if (allpageCount <= 5) {
                            for (var i = 0; i < 5; i++) {
                                bool[i] = false;
                            }
                            iEnd = allpageCount;
                            for (var i = 0; i < allpageCount; i++) {
                                bool[i] = true; 
                            }
                            
                        } else {
                            if (defaults.nowPageCataCount < 3) {
                                iEnd = 5
                                for (var i = 0; i < 5; i++) {
                                    bool[i] = true;
                                }
                            } else {
                                if (defaults.nowPageCataCount + 3 <= allpageCount) {
                                    iEnd = defaults.nowPageCataCount + 3;
                                    iBegin = defaults.nowPageCataCount - 2;
                                } else {
                                    iEnd = allpageCount;
                                    iBegin = allpageCount - 5;
                                }
                            }
                        }
                        begin = iBegin;
                        end = iEnd;
                        for (var i = iBegin; i < iEnd; i++) {
                            if (defaults.nowPageCataCount == i) {
                            	bool[i-iBegin] = false;
                                paginationHtml += '       <li class="active" style="background-color: #263476" id="liSelectPageId' + i + '"><a style ="margin-right:3px; margin-left:3px;text-align:center">' + (i + 1) + '</a></li>';
                            } else {
                                paginationHtml += '       <li id="liSelectPageId' + i + '"><a style ="margin-right:3px; margin-left:3px;text-align:center;cursor:pointer">' + (i + 1) + '</a></li>';
                            }
                        }
                        paginationHtml += '       <li ' + lastdisabled + ' id="tdNextPageId"><a style ="margin-right:3px; margin-left:3px;text-align:center">下一页</a></li>';
                        paginationHtml += '       <li ' + lastdisabled + ' id="tdLastPageId"><a style ="margin-right:3px; margin-left:3px;text-align:center">尾页</a></li>';
                        paginationHtml += '    </ul>';
                        paginationHtml += '</div>';
                        paginationHtml += '</div>';
                        _this.html(paginationHtml);
                        if(allpageCount>1){
                        	keyResponse();
                        }
                    } else {
                        _this.html("");
                    }
                }
            });
        },
    };

    $.fn.zcPage = function (method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        }
        else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        }
    };
})(jQuery);