package com.legatohealth.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.legatohealth.beans.UserEntity;



public interface EmployeeDao extends JpaRepository<UserEntity, Integer>{

}