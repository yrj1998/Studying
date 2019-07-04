package com.csi.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.csi.dao.OdMapper;
import com.csi.model.Od;

@Service
public class OdService {

	@Autowired
	private OdMapper odMapper;

	public void addod(Od od) {
		odMapper.insert(od);
	}

	public List<Od> selectbyoid(Integer oid) {
		List<Od> list=odMapper.selectbyoid(oid);
		return list;
	}
}
