package com.csi.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.csi.dao.OrderoMapper;
import com.csi.model.Ordero;

@Service
public class OrderService {
	
	@Autowired
	private OrderoMapper orderoMapper;

	public List<Ordero> getAll() {
		List<Ordero> list=orderoMapper.selectall();
		return list;
	}
//
//	public List<Ordero> searchorderone(Ordero ordero) {
//		
//		return null;
//	}

	public Ordero searchmealone(Integer oid) {
		Ordero ordero=orderoMapper.selectByPrimaryKey(oid);
		return ordero;
	}

	public void editorder(Ordero ordero) {
		orderoMapper.updateByPrimaryKeySelective(ordero);
	}

	public List<Ordero> searchorder(Ordero ordero) {
		List<Ordero> list=orderoMapper.selectByIdAndState(ordero);
		return list;
	}

	public int addorder(Ordero order) {
		int oid=orderoMapper.insertselectid(order);
		return oid;		
	}

	public List<Ordero> getAll(Integer userid) {
		List<Ordero> list=orderoMapper.selectallbyuserid(userid);
		return list;
	}

	public void orders_handle(Ordero ordero) {
		orderoMapper.updateByPrimaryKeySelective(ordero);
	}

	public int order_user(Integer oid) {
		int userid=orderoMapper.selectuserid(oid);
		return userid;
	}
}
