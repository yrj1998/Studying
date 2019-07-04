package com.csi.dao;

import com.csi.model.Ordero;
import com.csi.model.OrderoExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface OrderoMapper {
    int countByExample(OrderoExample example);

    int deleteByExample(OrderoExample example);

    int deleteByPrimaryKey(Integer oid);

    int insert(Ordero record);

    int insertSelective(Ordero record);

    List<Ordero> selectByExample(OrderoExample example);

    Ordero selectByPrimaryKey(Integer oid);

    int updateByExampleSelective(@Param("record") Ordero record, @Param("example") OrderoExample example);

    int updateByExample(@Param("record") Ordero record, @Param("example") OrderoExample example);

    int updateByPrimaryKeySelective(Ordero record);

    int updateByPrimaryKey(Ordero record);

	List<Ordero> selectall();

	List<Ordero> selectByIdAndState(Ordero ordero);

	List<Ordero> selectallbyuserid(Integer userid);

	int insertselectid(Ordero order);

	int selectuserid(Integer oid);
}