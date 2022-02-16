package com.legatohealth.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import com.legatohealth.beans.UserEntity;

public interface UserEntityDao extends JpaRepository<UserEntity, Integer>{
public UserEntity findByEmail(String email);
}
/*
 * UserDao you don't have to implement, it is done by spring data  
 *
 now all the methods of JpaRepository would work on users table & primary key is int type
*/