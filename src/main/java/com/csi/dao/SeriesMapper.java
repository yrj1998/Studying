package com.csi.dao;

import com.csi.model.Series;
import com.csi.model.SeriesExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface SeriesMapper {
    int countByExample(SeriesExample example);

    int deleteByExample(SeriesExample example);

    int deleteByPrimaryKey(Integer seriesid);

    int insert(Series series);

    int insertSelective(Series record);

    List<Series> selectByExample(SeriesExample example);

    Series selectByPrimaryKey(Integer seriesid);
    
    List<Series> selectall();
    
    List<Series> selectsearchall(String seriesname);
    
    int updateByExampleSelective(@Param("record") Series record, @Param("example") SeriesExample example);

    int updateByExample(@Param("record") Series record, @Param("example") SeriesExample example);

    int updateByPrimaryKeySelective(Series record);

    int updateByPrimaryKey(Series record);
}