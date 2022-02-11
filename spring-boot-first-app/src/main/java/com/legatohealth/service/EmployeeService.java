package com.legatohealth.service;

import com.legatohealth.beans.UserEntity;
import com.legatohealth.exceptions.UserNotFoundException;

public interface EmployeeService {
	public EmployeeService sendRequest(EmployeeService employeeservice); 
	public EmployeeService updateOrderStatus(EmployeeService employeeservice);
	public EmployeeService unlockUsers(EmployeeService employeeservice);
	public EmployeeService editProfile(EmployeeService employeeservice);
	
}
