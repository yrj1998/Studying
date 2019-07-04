package com.csi.controller;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.io.FilenameUtils;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.csi.model.Meal;
import com.csi.model.Msg;
import com.csi.model.Series;
import com.csi.service.MealManageService;
import com.csi.utils.Base64Util;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;

@Controller
public class MealManageController {
	
	@Autowired
	private MealManageService mealManageService;
	
	@RequestMapping(value="mealManageList.do",method=RequestMethod.GET)
	@ResponseBody
	public Msg getMealList(@RequestParam(value = "pn", defaultValue = "1")Integer pn){
		PageHelper.startPage(pn,5);
		List<Meal> list=mealManageService.getAll();
		PageInfo page=new PageInfo(list,5);
		return Msg.success().add("pageInfo", page);
	}
	
	@RequestMapping(value="addmeal.do",method=RequestMethod.POST)
	@ResponseBody
	public Msg addmeal(Meal meal){
		mealManageService.addmeal(meal);
		return Msg.success();
	}
	
	@RequestMapping(value="delmeal.do",method=RequestMethod.POST)
	@ResponseBody
	public Msg delmeal(@RequestParam("meaid")Integer meaid){
		mealManageService.delmeal(meaid);
		return Msg.success();
	}
	
	@RequestMapping(value="searchmeal.do",method=RequestMethod.GET)
	@ResponseBody
	public Msg searchmeal(@RequestParam(value = "pn", defaultValue = "1")Integer pn,Meal meal){
		PageHelper.startPage(pn,5);
		List<Meal> list=mealManageService.searchmeal(meal);
		PageInfo page=new PageInfo(list,5);
		return Msg.success().add("pageInfo", page);
		
	}
	
	@RequestMapping(value="searchmealseriesname.do")
	@ResponseBody
	public Msg searchmealseriesname(){
		List<Series> list=mealManageService.searchmealseriesname();
		return Msg.success().add("list", list);
		
	}
	
	@RequestMapping(value="searchmealone.do")
	@ResponseBody
	public Msg searchmealone(@RequestParam("meaid")Integer meaid){
		Meal meal=mealManageService.searchmealone(meaid);
		return Msg.success().add("meal", meal);
	}
	
	@RequestMapping(value="editmeal.do",method=RequestMethod.POST)
	@ResponseBody
	public Msg editmeal(Meal meal){
		mealManageService.editmeal(meal);
		return Msg.success();
	}
	
	@RequestMapping(value="searchimg")
	@ResponseBody
	public Msg searchimg(@RequestParam("meaid")Integer meaid){
		Meal meal=mealManageService.searchmealone(meaid);
		return Msg.success().add("img",meal.getMealimage());
	}
	
	@RequestMapping(value="upimg.do")
	@ResponseBody
	public Msg upimg(Meal meal,HttpServletRequest req,String file) throws IllegalStateException, IOException{
		MultipartFile picMultipartFile=Base64Util.base64ToMultipart(file);
		String name=UUID.randomUUID().toString().replace("-", "");
		String ext=FilenameUtils.getExtension(picMultipartFile.getOriginalFilename());
		String url=req.getSession().getServletContext().getRealPath("/img");
		picMultipartFile.transferTo(new File(url+"/"+name+"."+ext));
		meal.setMealimage("img/"+name+"."+ext);
		mealManageService.upimg(meal);
		return Msg.success();
	}
}
