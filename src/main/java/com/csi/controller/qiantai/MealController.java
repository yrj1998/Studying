package com.csi.controller.qiantai;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.csi.model.Cart;
import com.csi.model.Meal;
import com.csi.model.Msg;
import com.csi.model.Series;
import com.csi.service.MealManageService;
import com.csi.service.MealService;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;

@Controller
public class MealController {
	
	@Autowired
	private MealService mealService;
	
	@Autowired
	private MealManageService mealManageService;
	
	
	@RequestMapping(value="mealManage.do")
	@ResponseBody
	public Msg mealManage(@RequestParam(value = "pn", defaultValue = "1")Integer pn){
		PageHelper.startPage(pn,5);
		List<Meal> list=mealService.getAll();
		PageInfo page=new PageInfo(list,5);
		return Msg.success().add("pageInfo", page);
	}
	
	@RequestMapping(value="addShoppingCart.do",method=RequestMethod.POST)
	@ResponseBody
	public Msg addShoppingCart(Cart cart){
		mealService.addShoppingCart(cart);
		return Msg.success();
	}
	
	@RequestMapping(value="searchusermeal1.do",method=RequestMethod.GET)
	@ResponseBody
	public Msg searchmeal(@RequestParam(value = "pn", defaultValue = "1")Integer pn,Meal meal){
		PageHelper.startPage(pn,5);
		System.out.println(meal);
		List<Meal> list=mealManageService.searchmeal(meal);
		PageInfo page=new PageInfo(list,5);
		return Msg.success().add("pageInfo", page);
		
	}
}
