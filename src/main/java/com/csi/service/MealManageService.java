package com.csi.service;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.ui.ModelMap;
import org.springframework.web.multipart.MultipartFile;

import com.csi.dao.MealMapper;
import com.csi.dao.SeriesMapper;
import com.csi.model.Meal;
import com.csi.model.Series;

@Service
public class MealManageService {

	@Autowired
	private MealMapper mealMapper;
	
	@Autowired 
	private SeriesMapper seriesMapper;

	public List<Meal> getAll() {
		List<Meal> list=mealMapper.selectall();
		return list;
	}

	public void addmeal(Meal meal) {
		mealMapper.insert(meal);
	}

	public void delmeal(Integer meaid) {
		mealMapper.deleteByPrimaryKey(meaid);
		
	}

	public List<Meal> searchmeal(Meal meal) {
		List<Meal> list=mealMapper.selectsearchall(meal);
		return list;
	}

	public List<Series> searchmealseriesname() {
		List<Series> list=seriesMapper.selectall();
		return list;
	}

	public Meal searchmealone(Integer meaid) {
		Meal meal=mealMapper.selectByPrimaryKey(meaid);
		return meal;
	}

	public void editmeal(Meal meal) {
		mealMapper.updateByPrimaryKey(meal);
	}

	public void upimg(Meal meal) throws IllegalStateException, IOException {
		mealMapper.updateByPrimaryKeySelective(meal);
	}
}
