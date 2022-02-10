package com.legatohealth.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.legatohealth.beans.User;
import com.legatohealth.dao.UserDao;
import com.legatohealth.exceptions.UserNotFoundException;

@Service
public class UserServiceImpl implements UserService {
	@Autowired
	private UserDao dao; // injects the proxy object of UserDao

	@Override
	@Transactional // required when you modify the data
	public User store(User user) {
		User userCreated = dao.save(user);
		return userCreated;
	}

	@Override
	public User fetchUser(int id) throws UserNotFoundException {
		User user = null;
		Optional<User> optional = dao.findById(id);
		if(optional.isPresent()) {
			user = optional.get(); // returns the user
		} else {
			throw new UserNotFoundException("User with an id "+id+" not found");
		}
		return user;
	}

	@Override
	@Transactional
	public void deleteUser(int id) throws UserNotFoundException {
		User user = fetchUser(id);// throws UserNotFoundException if not found
		dao.delete(user);
	}

	@Override
	@Transactional
	public User updatePassword(int id, String password) throws UserNotFoundException {
		User user = fetchUser(id); 
		user.setPassword(password);
		return dao.save(user);  // return the updated user
	}
	@Override
	@Transactional
	public User updateUser(int id, User user) throws UserNotFoundException {
		User updateuser = fetchUser(id);
		updateuser.setName(user.getName());
		updateuser.setPassword(user.getPassword());
		updateuser.setAge(user.getAge());
		return dao.save(updateuser);  // return the updated user
	}
	@Override
	public List<User> fetchAllUsers() {
		List<User> users = dao.findAll();
		return users;
	}

	
}
