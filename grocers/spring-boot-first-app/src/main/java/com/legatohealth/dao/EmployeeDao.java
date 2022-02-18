package com.legatohealth.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.legatohealth.beans.Employee;



public interface EmployeeDao extends JpaRepository<Employee, Integer>{
	
	public Employee findByFirstname(String firstname);
	public Employee findById(int id);

}