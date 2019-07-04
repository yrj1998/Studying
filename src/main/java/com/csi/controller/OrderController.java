package com.csi.controller;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.csi.model.Meal;
import com.csi.model.Msg;
import com.csi.model.Ordero;
import com.csi.model.Series;
import com.csi.model.User;
import com.csi.service.MealManageService;
import com.csi.service.MealService;
import com.csi.service.OrderService;
import com.csi.service.UserService;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;

@Controller
public class OrderController {
	
	@Autowired
	private MealService mealService;
	
	@Autowired
	private OrderService orderService;
	
	@Autowired
	private UserService userService;
	
	@RequestMapping(value="orderManageList.do",method=RequestMethod.GET)
	@ResponseBody
	public Msg getMealList(@RequestParam(value = "pn", defaultValue = "1")Integer pn){
		PageHelper.startPage(pn,5);
		List<Ordero> list=orderService.getAll();
		PageInfo page=new PageInfo(list,5);
		return Msg.success().add("pageInfo", page);
	}

	@RequestMapping(value="searchorder.do",method=RequestMethod.GET)
	@ResponseBody
	public Msg searchmeal(@RequestParam(value = "pn", defaultValue = "1")Integer pn,Ordero ordero){
		PageHelper.startPage(pn,5);
		List<Ordero> list=orderService.searchorder(ordero);
		PageInfo page=new PageInfo(list,5);
		return Msg.success().add("pageInfo", page);
		
	}

	@RequestMapping(value="searchorderone.do")
	@ResponseBody
	public Msg searchmealone(@RequestParam("oid")Integer oid){
		Ordero ordero=orderService.searchmealone(oid);
		return Msg.success().add("order", ordero);
	}
	
	@RequestMapping(value="updatastate.do",method=RequestMethod.POST)
	@ResponseBody
	public Msg editmeal(Ordero ordero){
		orderService.editorder(ordero);
		return Msg.success();
	}
	
	@RequestMapping("order_user.do")
	@ResponseBody
	public Msg order_user(@RequestParam("oid")Integer oid){
		int userid=orderService.order_user(oid);
		return Msg.success().add("userid", userid);
	}
	
	@RequestMapping(value="order_userinfo.do")
	@ResponseBody
	public Msg order_userinfo(@RequestParam("id")Integer id){
		User u=userService.selectbyid(id);
		return Msg.success().add("user", u);
	}
}
