package com.csi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.csi.model.Meal;
import com.csi.model.Msg;
import com.csi.model.Series;
import com.csi.model.User;
import com.csi.service.UserService;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;

@Controller
public class UserManagerController {
	
	@Autowired
	private UserService userService;
	

	@RequestMapping(value="usersManageList.do",method=RequestMethod.GET)
	@ResponseBody
	public Msg getUserList(@RequestParam(value = "pn", defaultValue = "1")Integer pn){
		PageHelper.startPage(pn,5);
		List<User> list=userService.getAll();
		PageInfo page=new PageInfo(list,5);
		return Msg.success().add("pageInfo", page);
	}
	
	@RequestMapping(value="adduser.do",method=RequestMethod.POST)
	@ResponseBody
	public Msg adduser(User user){
		userService.adduser(user);
		return Msg.success();
	}
	
	@RequestMapping(value="deluser.do",method=RequestMethod.POST)
	@ResponseBody
	public Msg deluser(@RequestParam("id")Integer id){
		userService.deluser(id);
		return Msg.success();
	}
	
	@RequestMapping(value="searchuserbyname.do",method=RequestMethod.GET)
	@ResponseBody
	public Msg searchuser(@RequestParam(value = "pn", defaultValue = "1")Integer pn,@RequestParam("loginname")String loginname){
		PageHelper.startPage(pn,5);
		List<User> list=userService.searchuserbyname(loginname);
		PageInfo page=new PageInfo(list,5);
		return Msg.success().add("pageInfo", page);
	}

	@RequestMapping(value="searchuserone.do")
	@ResponseBody
	public Msg searchuserone(@RequestParam("id")Integer id){
		User u=userService.searchuserone(id);
		return Msg.success().add("user", u);
	}
	
	@RequestMapping(value="edituser.do",method=RequestMethod.POST)
	@ResponseBody
	public Msg edituser(User user){
		userService.edituser(user);
		return Msg.success();
	}
}
