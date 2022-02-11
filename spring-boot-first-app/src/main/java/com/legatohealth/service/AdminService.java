package com.legatohealth.service;

import java.util.List;

import com.legatohealth.beans.EmployeeRequest;

public interface AdminService {
	
	public List<EmployeeRequest> fetchAllRequests();
	public void generateReports(String duration);
	
	
	
	
	
	
	
	
	
	

}
