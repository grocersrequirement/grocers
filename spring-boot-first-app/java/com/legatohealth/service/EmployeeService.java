package com.legatohealth.service;

import java.util.List;

import com.legatohealth.beans.Employee;
import com.legatohealth.beans.Employee;
import com.legatohealth.exceptions.EmployeeNotFoundException;
import com.legatohealth.exceptions.UserNotFoundException;

public interface EmployeeService {
	public EmployeeService sendRequest(EmployeeService employeeservice); 
	public EmployeeService updateOrderStatus(EmployeeService employeeservice);
	public EmployeeService unlockUsers(EmployeeService employeeservice);
	public EmployeeService editProfile(EmployeeService employeeservice);
	
	
	//Sanket
	public Employee store(Employee Employee); //returns the user stored
	public Employee findUser(int id) throws EmployeeNotFoundException; // return the user based on id
	public Employee findUserbyUsername(String username) throws EmployeeNotFoundException; // return the user based on id
	public Employee updateUser(int id, Employee user) throws EmployeeNotFoundException ;
	public List<Employee> fetchAllUsers();
	public void deleteUser(int id) throws UserNotFoundException;
	
	
}
