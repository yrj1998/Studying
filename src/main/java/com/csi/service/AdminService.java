package com.csi.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.csi.dao.AdminMapper;
import com.csi.model.Admin;

@Service
public class AdminService {

	@Autowired
	private AdminMapper adminMapper;
	
	public Admin adminLogin(Admin admin){
		Admin admin2=adminMapper.selectAdminOne(admin);
		return admin2;
		
	}

	public List<Admin> getAll() {
		List<Admin> list=adminMapper.selectall();
		return list;
	}

	public void addadmin(Admin admin) {
		adminMapper.insert(admin);
	}

	public void deladmin(Integer id) {
		adminMapper.deleteByPrimaryKey(id);
	}

	public List<Admin> searchadminbyname(String loginname) {
		List<Admin> list=adminMapper.selectallbyname(loginname);
		return list;
	}

	public void editAdmin(Admin admin) {
		adminMapper.updateByPrimaryKeySelective(admin);
	}
}
