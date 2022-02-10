package com.legatohealth.dao;

import java.math.BigInteger;

import org.springframework.data.jpa.repository.JpaRepository;

import com.legatohealth.beans.FundEntity;

public interface FundDao extends JpaRepository<FundEntity, Integer>{

	
	public FundEntity findById(BigInteger accountnumber);
}
/*
 * UserDao you don't have to implement, it is done by spring data  
 *
 now all the methods of JpaRepository would work on users table & primary key is int type
*/