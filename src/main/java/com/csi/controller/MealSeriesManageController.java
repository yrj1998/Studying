package com.csi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.csi.model.Msg;
import com.csi.model.Series;
import com.csi.service.SeriesService;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;

@Controller
public class MealSeriesManageController {

	@Autowired
	private SeriesService seriesService;
	
	@RequestMapping(value="mealseriesManageList.do")
	@ResponseBody
	public Msg getMealList(@RequestParam(value = "pn", defaultValue = "1")Integer pn){
		PageHelper.startPage(pn,5);
		List<Series> list=seriesService.getAll();
		PageInfo page=new PageInfo(list,5);
		return Msg.success().add("pageInfo", page);
	}
	
	@RequestMapping(value="addSeries.do",method=RequestMethod.POST)
	@ResponseBody
	public Msg addSeries(Series series){
		seriesService.addseries(series);
		return Msg.success();
	}
	
	@RequestMapping(value="searchseries.do",method=RequestMethod.GET)
	@ResponseBody
	public Msg searchseries(@RequestParam("seriesname")String seriesname,@RequestParam(value = "pn", defaultValue = "1")Integer pn){
		PageHelper.startPage(pn,5);
		List<Series> list=seriesService.searchseries(seriesname);
		PageInfo page=new PageInfo(list,7);
		return Msg.success().add("pageInfo", page);
	}
	
	@RequestMapping(value="searchone.do",method=RequestMethod.POST)
	@ResponseBody
	public Msg searchone(@RequestParam("seriesId")Integer seriesId){
		Series series=seriesService.searchone(seriesId);
		return Msg.success().add("series", series);
		
	}
	
	@RequestMapping(value="editseries.do",method=RequestMethod.POST)
	@ResponseBody
	public Msg editseries(Series series){
		seriesService.editseries(series);
		return Msg.success();
	}
	
	@RequestMapping(value="delseries.do")
	@ResponseBody
	public Msg delseries(@RequestParam("seriesid")Integer seriesid){
		seriesService.delseries(seriesid);
		return Msg.success();
		
	}
}
