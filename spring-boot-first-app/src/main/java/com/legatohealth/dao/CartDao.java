package com.legatohealth.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.legatohealth.beans.Cart;
import com.legatohealth.beans.UserEntity;



public interface CartDao extends JpaRepository<Cart, Integer>{

}