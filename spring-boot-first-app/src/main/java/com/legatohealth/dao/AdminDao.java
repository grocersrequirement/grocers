package com.legatohealth.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.legatohealth.beans.Admin;
import com.legatohealth.beans.FundEntity;

public interface AdminDao  extends JpaRepository<Admin, Integer>{
	
	
	default void generateReports(String duration) {
		
		
		
		
	}
}



