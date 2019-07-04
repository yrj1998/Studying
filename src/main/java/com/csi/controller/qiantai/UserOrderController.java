package com.csi.controller.qiantai;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.csi.model.Msg;
import com.csi.model.Od;
import com.csi.model.Ordero;
import com.csi.service.OdService;
import com.csi.service.OrderService;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;

@Controller
public class UserOrderController {
	
	@Autowired
	private OrderService orderService;
	
	@Autowired
	private OdService odService;
	
	@RequestMapping(value="getMyOrderList.do")
	@ResponseBody
	public Msg getMyOrderList(@RequestParam(value = "pn", defaultValue = "1")Integer pn,@RequestParam("userid")Integer userid){
		PageHelper.startPage(pn,5);
		List<Ordero> list=orderService.getAll(userid);
		PageInfo page=new PageInfo(list,5);
		return Msg.success().add("pageInfo", page);
	}
	
	@RequestMapping(value="orderup.do")
	@ResponseBody
	public Msg orders_handle(Ordero ordero){
		orderService.orders_handle(ordero);
		return Msg.success();
	}
	
	@RequestMapping(value="orders_info.do")
	@ResponseBody
	public Msg orders_info(@RequestParam("oid")Integer oid){
		List<Od> list=odService.selectbyoid(oid);
		return Msg.success().add("odlist", list);
	}
}
