package com.legatohealth.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.legatohealth.beans.UserEntity;
import com.legatohealth.dao.UserDao;
import com.legatohealth.dao.UserEntityDao;
import com.legatohealth.exceptions.UserNotFoundException;

@Service
public class UserEntityServiceImpl implements UserEntityService {
	@Autowired
	private UserEntityDao dao; // injects the proxy object of UserDao

	@Override
	@Transactional // required when you modify the data
	public UserEntity store(UserEntity userEntity) {
		UserEntity userCreated = dao.save(userEntity);
		return userCreated;
	}
	@Override
	public UserEntity findUser(int id) throws UserNotFoundException {
		UserEntity user = null;
		Optional<UserEntity> optional = dao.findById(id);
		if(optional.isPresent()) {
			user = optional.get(); // returns the user
		} else {
			throw new UserNotFoundException("User with an id "+id+" not found");
		}
		return user;
	}	
}
