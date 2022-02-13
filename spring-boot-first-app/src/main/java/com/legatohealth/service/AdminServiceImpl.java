package com.legatohealth.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.legatohealth.beans.Employee;
import com.legatohealth.beans.ProductEntity;
import com.legatohealth.dao.AdminDao;
import com.legatohealth.dao.EmployeeDao;
import com.legatohealth.exceptions.EmployeeNotFoundException;

@Service
public class AdminServiceImpl implements AdminService {
	@Autowired
	private ProductService productservice;
	@Autowired
	private AdminDao admindao;
	@Autowired
	EmployeeDao employeedao;
	
	//list out how meny requests are there..
	@Override
	public List<ProductEntity> fetchAllRequests(ProductEntity productentity) {
		// TODO Auto-generated method stub
		List<ProductEntity> list=new ArrayList<ProductEntity>();
		admindao.findAll();
		return list;
	}
	
	//to generate the reports..
	@Override
	public void generateReports(String duration) {
		
		admindao.generateReports(duration);	
	}

	@Override
	public boolean performAction(ProductEntity productentity) {
		
		//action need to perform based on request provided by employee, after we have to change our arguments..
		//.delete(productentity);
		
		return false;
	}
	
	
	//add  employees..
	@Override
	public Employee addEmployee(Employee employee) {
		// TODO Auto-generated method stub
		//List<Employee> list=new ArrayList<Employee>();
								
		return employeedao.save(employee);
	}
	//delete employee details based on employeeId
	@Override
	public void deleteEmloyee(int id) throws EmployeeNotFoundException{
		// TODO Auto-generated method stub
		employeedao.deleteById(id);
		
	}



}
