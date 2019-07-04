package com.csi.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.csi.dao.CartMapper;
import com.csi.dao.MealMapper;
import com.csi.model.Cart;
import com.csi.model.Meal;

@Service
public class MealService {

	@Autowired
	private MealMapper mealMapper;
	
	@Autowired
	private CartMapper cartMapper;
	
	public List<Meal> getAll() {
		List<Meal> list=mealMapper.selectall();
		return list;
	}

	public void addShoppingCart(Cart cart) {
		cartMapper.insert(cart);
	}

}
