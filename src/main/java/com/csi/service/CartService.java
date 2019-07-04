package com.csi.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.csi.dao.CartMapper;
import com.csi.model.Cart;

@Service
public class CartService {
	
	@Autowired
	private CartMapper cartMapper;
	
	public List<Cart> getAll(Integer userid) {
		List<Cart> list=cartMapper.selectall(userid);
		return list;
	}

	public void delcart(Integer cartid) {
		cartMapper.deleteByPrimaryKey(cartid);
		
	}

	public void delusercart(Integer userid) {
		cartMapper.delusercart(userid);;
	}

}
