package com.legatohealth.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.legatohealth.beans.Employee;
import com.legatohealth.dao.EmployeeDao;
import com.legatohealth.exceptions.EmployeeNotFoundException;
import com.legatohealth.exceptions.UserNotFoundException;


@Service
public class EmployeeServiceImpl implements EmployeeService {
	@Autowired
	private EmployeeDao dao;// injects the proxy object of EmployeeDao
	@Autowired
	private ProductService productservice;

	@Override
	@Transactional 
	public EmployeeService sendRequest(EmployeeService employeeservice) {
		
		return employeeservice;
		
	}


	@Override
	public EmployeeService updateOrderStatus(EmployeeService employeeservice) {
		
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public EmployeeService unlockUsers(EmployeeService employeeservice) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public EmployeeService editProfile(EmployeeService employeeservice) {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	@Transactional // required when you modify the data
	public Employee store(Employee Employee) {
		Employee userCreated = dao.save(Employee);
		return userCreated;
	}
	@Override
	public Employee findUser(int id) throws EmployeeNotFoundException {
		Employee user = null;
		Optional<Employee> optional = dao.findById(id);
		if(optional.isPresent()) {
			user = optional.get(); // returns the user
		} else {
			throw new EmployeeNotFoundException("User with an id "+id+" not found");
		}
		return user;
	}	
	@Override
    @Query("select * from employee where firstname=?1")
	@Transactional
	public Employee findUserbyUsername(String firstname) throws EmployeeNotFoundException {
		Employee user = null;
		 user = dao.findByFirstname(firstname);
		return user;
	}	
	@Override
	public List<Employee> fetchAllUsers() {
		List<Employee> users = dao.findAll();
		return users;
	}
	@Override
	@Transactional
	public Employee updateUser(int id, Employee user) throws EmployeeNotFoundException {
		Employee updateuser = findUser(id);
		updateuser.setPassword(user.getPassword());
		return dao.save(updateuser);  // return the updated user
	}
	@Override
	@Transactional
	public void deleteUser(int id) throws UserNotFoundException {
		 dao.deleteById(id);// throws UserNotFoundException if not found
	}
	
	
}
