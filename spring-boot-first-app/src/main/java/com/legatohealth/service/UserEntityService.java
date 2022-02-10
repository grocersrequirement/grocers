package com.legatohealth.service;

import java.util.List;

import com.legatohealth.beans.User;
import com.legatohealth.beans.UserEntity;
import com.legatohealth.exceptions.UserNotFoundException;

public interface UserEntityService {
	public UserEntity store(UserEntity userentity); //returns the user stored
	public UserEntity findUser(int id) throws UserNotFoundException; // return the user based on id
	//public void deleteItems(int id) throws UserNotFoundException;
	//public UserEntity updateItems(int id) throws UserNotFoundException;
	//public User updateUser(int id, User user) throws UserNotFoundException;
	//public List<User> fetchAllUsers();
}
