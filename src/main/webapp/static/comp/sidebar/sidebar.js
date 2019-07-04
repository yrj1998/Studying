function loadTaskList(){
	$("#taskContent").html('');
	$("#taskContent").empty();
	$.ajax({
		
		/*
		    *作者：sjm
       	    *时间：2018-05-16
		    *开发时打开注释，同时注释掉现有的URL
		    */
		url: __contextPath+"/jsonAndPageForDynamic/taskContentList.d",
		//type:"POST",
		//url: __contextPath+"/sidebar/taskContentList.d",
		async:true,

		success: function(resultData){
			if(resultData!=null && resultData.length>0){
				//处理数据
				handlerPage(resultData);
			}else{
				layui.layer.msg("没有正在采集或等待采集的任务!",{icon:3});
			}
		},
		error:function(){
			layui.layer.msg("请求数据失败!",{icon:5});
		}
	});
}

function handlerPage(resultData){
	var tilte=$('<div><span style="margin-left:25px;color:#D7D7D7;">等待</span><span style="margin-left:55px;color:#D7D7D7;">采集</span>'
			+'<span style="margin-left:50px;color:#D7D7D7;">分析</span><span style="margin-left:60px;color:#D7D7D7;">入库</span></div>');
	var commomStart=('<div class="progress" style="margin-bottom:10px;height:18px">');
	var waitingDiv=('<div class="progress-bar progress-bar-warning progress-bar-striped active" style="width:25%;border-right:#f1f1f1 1px solid;"></div>');
	var greyDiv=('<div class="progress-bar progress-bar-success " style="width:25%;background-color:grey;border-right: #f1f1f1 1px solid;"></div>');
	var successDiv=('<div class="progress-bar progress-bar-success " style="width:25%;border-right: #f1f1f1 1px solid;"><i >√</i></div>');
	var failedDiv=('<div class="progress-bar progress-bar-danger" style="width: 25%;border-right: #f1f1f1 1px solid;"><i >×</i></div>');
	var havringDiv=('<div class="progress-bar progress-bar-warning progress-bar-striped active" style="width: 25%;border-right: #f1f1f1 1px solid;"></div>');
	var commomEnd=('</div>');
	var nameStart=('<div style="padding-top:6px"><span style="color:#D7D7D7;font-size:13px;float:left;">');
	var commonEnd=('</span>');
	var end=('</div>');
	var clearBoth=('<div style=" clear:both;"></div>');
	var timeStart=('<span style="color:#D7D7D7;font-size:13px;float:right;">用时:');
	tilte.appendTo($("#taskContent"));
//	VAR HR=$('<HR STYLE="BORDER:1PX DOTTED RED"/>');
	var taskArray=$.parseJSON($.parseJSON(resultData)).task;
	if(taskArray!=null && resultData.length>0){
		$.each(taskArray,function(index,obj){
		//正在采集
			if(obj.status=='harvesting'){
				var typing=obj.type;
				switch(typing){
				case '4':
					var havring1TaksNm=$(nameStart+obj.name+commonEnd+timeStart+obj.time+commonEnd+clearBoth+end);
					var havring1=$(commomStart+successDiv+successDiv+successDiv+havringDiv+commomEnd);
					havring1TaksNm.appendTo($("#taskContent"));
					havring1.appendTo($("#taskContent"));
					break;	
				case '3':
					var havring2TaksNm=$(nameStart+obj.name+commonEnd+timeStart+obj.time+commonEnd+clearBoth+end);
					var havring2=$(commomStart+successDiv+successDiv+havringDiv+greyDiv+commomEnd);
					havring2TaksNm.appendTo($("#taskContent"));
					havring2.appendTo($("#taskContent"));
					break;
				case '1':
					var havring3TaksNm=$(nameStart+obj.name+commonEnd+timeStart+obj.time+commonEnd+clearBoth+end);
					var havring3=$(commomStart+successDiv+havringDiv+greyDiv+greyDiv+commomEnd);
					havring3TaksNm.appendTo($("#taskContent"));
					havring3.appendTo($("#taskContent"));	
					break;
				default:break;
				}
			}
			//采集失败
			else if(obj.status=='failed'){
				var type=obj.type;
				switch(type)
				{
				case '4':
					var failed1TaksNm=$(nameStart+obj.name+commonEnd+timeStart+obj.time+commonEnd+clearBoth+end);
					var failed1=$(commomStart+successDiv+successDiv+successDiv+failedDiv+commomEnd);
					failed1TaksNm.appendTo($("#taskContent"));
					failed1.appendTo($("#taskContent"));
				break;
				case '3':
					var failed2TaksNm=$(nameStart+obj.name+commonEnd+timeStart+obj.time+commonEnd+clearBoth+end);
					var failed2=$(commomStart+successDiv+successDiv+failedDiv+greyDiv+commomEnd);
					failed2TaksNm.appendTo($("#taskContent"));
					failed2.appendTo($("#taskContent"));
					break;	
				case '1':
					var failed3TaksNm=$(nameStart+obj.name+commonEnd+timeStart+obj.time+commonEnd+clearBoth+end);
					var failed3=$(commomStart+successDiv+failedDiv+greyDiv+greyDiv+commomEnd);
					failed3TaksNm.appendTo($("#taskContent"));
					failed3.appendTo($("#taskContent"));	
					break;
				default:break;
				};
			}
			//等待采集状态
			else if(obj.status=='waiting'){ 
				var waitingTaksNm=$(nameStart+obj.name+commonEnd+timeStart+obj.time+commonEnd+clearBoth+end);
				var waiting=$(commomStart+waitingDiv+greyDiv+greyDiv+greyDiv+commomEnd);
				waitingTaksNm.appendTo($("#taskContent"));
				waiting.appendTo($("#taskContent"));	
			}//采集成功状态
			else if(obj.status=='success'){
			 var successTaksNm=$(nameStart+obj.name+commonEnd+timeStart+obj.time+commonEnd+clearBoth+end);
			 var success=$(commomStart+successDiv+successDiv+successDiv+successDiv+commomEnd);
			 successTaksNm.appendTo($("#taskContent"));
			 success.appendTo($("#taskContent"));
			}
		})	
	}	
}

function toAllTaskList(){
	
	openSystemMenu('ac58f620af8a43eebe71ab2cd4184cfe','采集日志',"extractor/log/list.d");
}