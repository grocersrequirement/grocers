package com.legatohealth.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.legatohealth.beans.UserEntity;
import com.legatohealth.dao.EmployeeDao;
import com.legatohealth.dao.UserDao;
import com.legatohealth.dao.UserEntityDao;
import com.legatohealth.exceptions.UserNotFoundException;

@Service
public class CartServiceImpl implements CartService {
	@Autowired
	private EmployeeDao dao;// injects the proxy object of EmployeeDao
	@Autowired
	private ProductService productservice;
	@Override
	@Transactional 
	public CartService selectItems(CartService cartservice) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public CartService deleteItems(CartService cartservice) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public CartService viewItems(CartService cartservice) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public CartService checkout(CartService cartservice) {
		// TODO Auto-generated method stub
		return null;
	}
	
	
	
}
