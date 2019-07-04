package com.csi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.csi.model.Admin;
import com.csi.model.Msg;

import com.csi.service.AdminService;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;

@Controller
public class AdminController {

	@Autowired
	private AdminService adminService;

	@RequestMapping(value="adminManageList.do",method=RequestMethod.GET)
	@ResponseBody
	public Msg getAdminList(@RequestParam(value = "pn", defaultValue = "1")Integer pn){
		PageHelper.startPage(pn,5);
		List<Admin> list=adminService.getAll();
		PageInfo page=new PageInfo(list,5);
		return Msg.success().add("pageInfo", page);
	}
	
	@RequestMapping(value="addadmin.do",method=RequestMethod.POST)
	@ResponseBody
	public Msg addadmin(Admin admin){
		adminService.addadmin(admin);
		return Msg.success();
	}
	
	@RequestMapping(value="deladmin.do",method=RequestMethod.POST)
	@ResponseBody
	public Msg deladmin(@RequestParam("id")Integer id){
		adminService.deladmin(id);
		return Msg.success();
	}
	
	@RequestMapping(value="searchadminbyname.do",method=RequestMethod.GET)
	@ResponseBody
	public Msg searchadmin(@RequestParam(value = "pn", defaultValue = "1")Integer pn,@RequestParam("loginname")String loginname){
		PageHelper.startPage(pn,5);
		List<Admin> list=adminService.searchadminbyname(loginname);
		PageInfo page=new PageInfo(list,5);
		return Msg.success().add("pageInfo", page);
	}
	
	@RequestMapping(value="editadminPwd.do")
	@ResponseBody
	public Msg editadminPwd(Admin admin){
		adminService.editAdmin(admin);
		return Msg.success();
	}
}
