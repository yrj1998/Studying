package com.csi.dao;

import com.csi.model.Od;
import com.csi.model.OdExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface OdMapper {
    int countByExample(OdExample example);

    int deleteByExample(OdExample example);

    int deleteByPrimaryKey(Integer odid);

    int insert(Od record);

    int insertSelective(Od record);

    List<Od> selectByExample(OdExample example);

    Od selectByPrimaryKey(Integer odid);

    int updateByExampleSelective(@Param("record") Od record, @Param("example") OdExample example);

    int updateByExample(@Param("record") Od record, @Param("example") OdExample example);

    int updateByPrimaryKeySelective(Od record);

    int updateByPrimaryKey(Od record);

	List<Od> selectbyoid(Integer oid);
}