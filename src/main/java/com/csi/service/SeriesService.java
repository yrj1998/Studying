package com.csi.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.csi.dao.SeriesMapper;
import com.csi.model.Series;

@Service
public class SeriesService {

	@Autowired
	private SeriesMapper seriesMapper;
	
	public List<Series> getAll(){
		List<Series> list=seriesMapper.selectall();
		return list;
		
	}

	public void addseries(Series series) {
		seriesMapper.insert(series);
	}

	public List<Series> searchseries(String seriesname) {
		List<Series> list=seriesMapper.selectsearchall(seriesname);
		return list;
		
	}

	public Series searchone(Integer seriesId) {
		Series series=seriesMapper.selectByPrimaryKey(seriesId);
		return series;
	}

	public void editseries(Series series) {
		seriesMapper.updateByPrimaryKey(series);
	}

	public void delseries(Integer seriesid) {
		seriesMapper.deleteByPrimaryKey(seriesid);
	}
}
