package com.legatohealth.service;

import java.util.List;

<<<<<<< HEAD
import com.legatohealth.beans.Admin;
//import com.legatohealth.beans.EmployeeRequest;
import com.legatohealth.beans.ProductEntity;
import com.legatohealth.exceptions.UserNotFoundException;
=======
import com.legatohealth.beans.Employee;
//import com.legatohealth.beans.EmployeeRequest;
import com.legatohealth.beans.ProductEntity;
import com.legatohealth.exceptions.EmployeeNotFoundException;
>>>>>>> master

public interface AdminService {
	
	//public ProductEntity addProduct(ProductEntity productentity);
	public List<ProductEntity> fetchAllRequests(ProductEntity productentity);
	public void generateReports(String duration);
	public boolean performAction(ProductEntity productentity);
<<<<<<< HEAD
	public Admin findUserbyUsername(String username);
=======
	public Employee addEmployee(Employee employee);
	
	public void deleteEmloyee(int id) throws EmployeeNotFoundException;
	
>>>>>>> master
	////action need to perform based on request provided by employee.
	
	
	
	
	
	
	
	
	

}
