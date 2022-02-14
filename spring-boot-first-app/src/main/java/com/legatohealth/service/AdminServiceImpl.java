package com.legatohealth.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.legatohealth.beans.Admin;
import com.legatohealth.beans.ProductEntity;
import com.legatohealth.beans.UserEntity;
import com.legatohealth.dao.AdminDao;
import com.legatohealth.exceptions.UserNotFoundException;

@Service
public class AdminServiceImpl implements AdminService {
	@Autowired
	private ProductService productservice;
	@Autowired
	private AdminDao admindao;
  
	@Override
	public List<ProductEntity> fetchAllRequests(ProductEntity productentity) {
		// TODO Auto-generated method stub
		List<ProductEntity> list=new ArrayList<ProductEntity>();
		admindao.findAll();
		return list;
	}
	@Override
    @Query("select * from admin where username=?1")
	@Transactional
	public Admin findUserbyUsername(String username) {
		Admin user = null;
		 user = admindao.findByUsername(username);
		return user;
	}	
	@Override
	public void generateReports(String duration) {
		// TODO Auto-generated method stub
		admindao.generateReports(duration);	
	}

	@Override
	public boolean performAction(ProductEntity productentity) {
		
		//action need to perform based on request provided by employee, after we have to change our arguments..
		//.delete(productentity);
		
		return false;
	}

//	@Override
//	public ProductEntity addProduct(ProductEntity productentity) {
//		// TODO Auto-generated method stub
//		
//		return null;
//	}

}
