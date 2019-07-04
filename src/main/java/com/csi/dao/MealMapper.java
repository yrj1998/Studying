package com.csi.dao;

import com.csi.model.Meal;
import com.csi.model.MealExample;
import com.csi.model.Series;

import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface MealMapper {
    int countByExample(MealExample example);

    int deleteByExample(MealExample example);

    int deleteByPrimaryKey(Integer meaid);

    int insert(Meal record);

    int insertSelective(Meal record);

    List<Meal> selectByExample(MealExample example);

    Meal selectByPrimaryKey(Integer meaid);

    int updateByExampleSelective(@Param("record") Meal record, @Param("example") MealExample example);

    int updateByExample(@Param("record") Meal record, @Param("example") MealExample example);

    int updateByPrimaryKeySelective(Meal record);

    int updateByPrimaryKey(Meal record);

	List<Meal> selectall();

	List<Meal> selectsearchall(Meal meal);
}