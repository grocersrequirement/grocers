package com.legatohealth.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.legatohealth.beans.UserEntity;
import com.legatohealth.dao.EmployeeDao;
import com.legatohealth.dao.UserDao;
import com.legatohealth.dao.UserEntityDao;
import com.legatohealth.exceptions.UserNotFoundException;

@Service
public class EmployeeServiceImpl implements EmployeeService {
	@Autowired
	private EmployeeDao dao;// injects the proxy object of EmployeeDao
	@Autowired
	private ProductService productservice;

	@Override
	@Transactional 
	public EmployeeService sendRequest(EmployeeService employeeservice) {
		
		return employeeservice;
		
	}


	@Override
	public EmployeeService updateOrderStatus(EmployeeService employeeservice) {
		
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public EmployeeService unlockUsers(EmployeeService employeeservice) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public EmployeeService editProfile(EmployeeService employeeservice) {
		// TODO Auto-generated method stub
		return null;
	}
	
	
}
