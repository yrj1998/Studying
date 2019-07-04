package com.csi.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.csi.dao.UserMapper;
import com.csi.model.User;

@Service
public class UserService {
	
	@Autowired
	private UserMapper userMapper;
	
	public User selectone(User user){
		User u=userMapper.selectone(user);
		return u;
	}

	public List<User> getAll() {
		List<User> list=userMapper.selectall();
		return list;
	}

	public List<User> searchuserbyname(String loginname) {
		List<User> list=userMapper.selectallbyname(loginname);
		return list;
	}

	public User searchuserone(Integer id) {
		User user=userMapper.selectByPrimaryKey(id);
		return user;
	}

	public void edituser(User user) {
		userMapper.updateByPrimaryKey(user);
	}

	public void deluser(Integer id) {
		userMapper.deleteByPrimaryKey(id);
		
	}

	public void adduser(User user) {
		userMapper.insertSelective(user);
	}

	public void editUser(User user) {
		userMapper.updateByPrimaryKeySelective(user);
	}

	public User selectbyid(Integer id) {
		User user=userMapper.selectByPrimaryKey(id);
		return user;
	}

}
