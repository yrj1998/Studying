package com.csi.controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.servlet.jsp.jstl.sql.Result;

import org.apache.http.HttpEntity;
import org.apache.http.NameValuePair;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.message.BasicNameValuePair;
import org.apache.http.util.EntityUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.csi.model.Admin;
import com.csi.model.Msg;
import com.csi.model.User;
import com.csi.service.AdminService;
import com.csi.service.UserService;
import com.csi.utils.AuthService;
import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

@Controller
public class UserLoginController {
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private AdminService adminService;
	
	@RequestMapping(value="userlogin.do",method=RequestMethod.POST)
	@ResponseBody
	public Msg userlogin(User user,HttpServletRequest req){
		User u=userService.selectone(user);
		if(u!=null){
			HttpSession session=req.getSession();
			session.setAttribute("u", u);
			return Msg.success().add("user", u);
		}else{
			return Msg.fail();
		}
	}
	@RequestMapping(value="adminlogin.do",method=RequestMethod.POST)
	@ResponseBody
	public Msg adminlogin(Admin admin,HttpServletRequest req){
		Admin admin2=adminService.adminLogin(admin);
		if(admin2!=null){
			HttpSession session=req.getSession();
			session.setAttribute("admin", admin2);
			return Msg.success().add("admin2", admin2);
		}
		return Msg.fail();
	}
	
	@RequestMapping(value="facelogin.do")
	@ResponseBody
	public Msg facelogin(HttpServletRequest request, HttpServletResponse response, String baseData) throws Exception{
		System.out.println(baseData);
	    PrintWriter writer = response.getWriter();
	    HttpSession session = request.getSession();
	    boolean flag = false;
//	    List<FaceRecognition> list = service.getBaseList();
//	    for (FaceRecognition faceRecognition : list) {
//	        String image2 = faceRecognition.getFace_base64();
//	        if (service.getResult(baseData, image2)) {
//	            flag = true;
//	            session.setAttribute("username", faceRecognition.getUsername());
//	            break;
//	        }
//	    }
	    writer.print(flag);
	    writer.close();
		return null;
	}
}
