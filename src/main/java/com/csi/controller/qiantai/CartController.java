package com.csi.controller.qiantai;

import java.lang.annotation.Annotation;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.csi.model.Cart;
import com.csi.model.Meal;
import com.csi.model.Msg;
import com.csi.model.Od;
import com.csi.model.Ordero;
import com.csi.model.Series;
import com.csi.service.CartService;
import com.csi.service.MealManageService;
import com.csi.service.OdService;
import com.csi.service.OrderService;
import com.csi.service.SeriesService;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;

@Controller
public class CartController {
	
	@Autowired
	private CartService cartService;
	
	@Autowired
	private MealManageService mealManageService;
	
	@Autowired
	private SeriesService seriesService;
	
	@Autowired
	private OrderService OrderService;
	
	@Autowired
	private OdService odService;
	
	@RequestMapping(value="CartList.do")
	@ResponseBody
	public Msg CartList(@RequestParam(value = "pn", defaultValue = "1")Integer pn,@RequestParam("userid")Integer userid){
		PageHelper.startPage(pn,5);
		List<Cart> list=cartService.getAll(userid);
		PageInfo page=new PageInfo(list,5);
		return Msg.success().add("pageInfo", page);
	}
	
	@RequestMapping(value="searchcartmealone.do")
	@ResponseBody
	public Msg searchcartmealone(@RequestParam("mealid")Integer mealid){
		Meal meal=mealManageService.searchmealone(mealid);
		return Msg.success().add("meal", meal);
	}
	
	@RequestMapping(value="searchcartseries.do")
	@ResponseBody
	public Msg searchcartseries(@RequestParam("seriesid")Integer seriesid){
		Series series=seriesService.searchone(seriesid);
		return Msg.success().add("series", series);
	}
	
	@RequestMapping(value="delcart.do")
	@ResponseBody
	public Msg delcart(@RequestParam("cartid")Integer cartid){
		cartService.delcart(cartid);
		return Msg.success();
	}
	
	@RequestMapping(value="addorder.do")
	@ResponseBody
	public Msg addorder(@RequestParam("userid")Integer userid,@RequestParam("orderprice")double orderprice){
		SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
		String date= sdf.format(new Date());
		java.sql.Date time=null;
		java.util.Date d=null;
		try {
			d=sdf.parse(date);
			time=new java.sql.Date(d.getTime());
		} catch (Exception e) {
			e.printStackTrace();
		}
		Ordero order=new Ordero();
		order.setOrderprice(orderprice);
		order.setUserid(userid);
		order.setOrdertime(time);
		order.setOrderstate(0);
		OrderService.addorder(order);
		int oid=order.getOid();
		return Msg.success().add("oid", oid);
	}
	
	@RequestMapping(value="delusercart.do")
	@ResponseBody
	public Msg delusercart(@RequestParam("userid")Integer userid){
		cartService.delusercart(userid);
		return Msg.success();
		
	}
	
	@RequestMapping(value="addod.do")
	@ResponseBody
	public Msg addod(Od od){
		odService.addod(od);
		return Msg.success();
	}
}
