package com.legatohealth.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.legatohealth.beans.EmployeeRequest;
import com.legatohealth.dao.AdminDao;

public class AdminServiceImpl implements AdminService {
	@Autowired
	private ProductService productservice;
	@Autowired
	private AdminDao admindao;

	@Override
	public List<EmployeeRequest> fetchAllRequests() {
		// TODO Auto-generated method stub
		List<EmployeeRequest> list=admindao.findAll();
		
		return list;
	}

	@Override
	public void generateReports(String duration) {
		// TODO Auto-generated method stub
		admindao.generateReports(duration);
		
		
		
	}

}
