package com.csi.controller.qiantai;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.csi.model.Admin;
import com.csi.model.Msg;
import com.csi.model.User;
import com.csi.service.UserService;

@Controller
public class UserController {

	@Autowired
	private UserService userService;
	
	@RequestMapping(value="searchuser1.do")
	@ResponseBody
	public Msg searchuser1(@RequestParam("id")Integer id){
		User user=userService.searchuserone(id);
		return Msg.success().add("user", user);
	}
	
	@RequestMapping(value="editUser.do")
	@ResponseBody
	public Msg editUser(User user){
		userService.editUser(user);
		return Msg.success().add("user", user);
	}
	
	
	@RequestMapping(value="edituserPwd.do")
	@ResponseBody
	public Msg editadminPwd(User user){
		userService.editUser(user);
		return Msg.success();
	}
	
	@RequestMapping(value="useraddress.do")
	@ResponseBody
	public Msg useraddress(@RequestParam("id")Integer id){
		User user=userService.searchuserone(id);
		String address=user.getAddress();
		return Msg.success().add("address", address);
	}
}
