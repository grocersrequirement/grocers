package com.legatohealth.service;

import java.util.List;

import com.legatohealth.beans.Employee;
//import com.legatohealth.beans.EmployeeRequest;
import com.legatohealth.beans.ProductEntity;
import com.legatohealth.exceptions.EmployeeNotFoundException;

public interface AdminService {
	
	//public ProductEntity addProduct(ProductEntity productentity);
	public List<ProductEntity> fetchAllRequests(ProductEntity productentity);
	public void generateReports(String duration);
	public boolean performAction(ProductEntity productentity);
	public Employee addEmployee(Employee employee);
	
	public void deleteEmloyee(int id) throws EmployeeNotFoundException;
	
	////action need to perform based on request provided by employee.
	
	
	
	
	
	
	
	
	

}
