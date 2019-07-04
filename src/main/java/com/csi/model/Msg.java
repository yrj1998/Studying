package com.csi.model;

import java.util.HashMap;
import java.util.Map;


public class Msg {
	//状态码 100成功，200失败
	private int code;
	//提示信息
	private String message;
	//用户要返回给浏览器的数据
	private Map<String, Object> obj = new HashMap<String, Object>();

	public Map<String, Object> getObj() {
		return obj;
	}

	public void setObj(Map<String, Object> obj) {
		this.obj = obj;
	}
	
	public Msg add(String key,Object value){
		this.getObj().put(key, value);
		return this;
	}
	
	public static Msg success(){
		Msg msg=new Msg();
		msg.setCode(100);
		msg.setMessage("成功");
		return msg;
	}
	
	public static Msg fail(){
		Msg msg=new Msg();
		msg.setCode(200);
		msg.setMessage("失败");
		return msg;
	}
	
	public int getCode() {
		return code;
	}
	public void setCode(int code) {
		this.code = code;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public Msg(int code, String message) {
		super();
		this.code = code;
		this.message = message;
	}
	public Msg() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
}
