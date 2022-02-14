package com.legatohealth.service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.legatohealth.beans.UserEntity;
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
	@Override
    @Query("select * from user where email=?1")
	@Transactional
	public UserEntity findUserbyEmail(String email) throws UserNotFoundException {
		UserEntity user = null;
		 user = dao.findByEmail(email);
		return user;
	}	
	@Override
	public List<UserEntity> fetchAllUsers() {
		List<UserEntity> users = dao.findAll();
		return users;
	}
	@Override
	@Transactional
	public UserEntity updateUser(int id, UserEntity user) throws UserNotFoundException {
		UserEntity updateuser = findUser(id);
		updateuser.setEmail(user.getEmail());
		updateuser.setPassword(user.getPassword());
		updateuser.setAddress(user.getAddress());
		updateuser.setPhone(user.getPhone());
		return dao.save(updateuser);  // return the updated user
	}
	@Override
	@Transactional
	public void deleteUser(int id) throws UserNotFoundException {
		 dao.deleteById(id);// throws UserNotFoundException if not found
	}
}
