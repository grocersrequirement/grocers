package com.legatohealth.controller;

import java.math.BigInteger;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.legatohealth.beans.CustomMessage;
import com.legatohealth.beans.Employee;
import com.legatohealth.beans.FundEntity;
import com.legatohealth.exceptions.FundNotFoundException;
import com.legatohealth.exceptions.UserNotFoundException;
import com.legatohealth.beans.UserEntity;
import com.legatohealth.service.FundService;
import com.legatohealth.service.UserEntityService;

import sun.nio.cs.ext.Big5;

@CrossOrigin(origins = "*",allowedHeaders = "*")
@RestController
@RequestMapping("api")
public class FundRest {

	/*Injecting the service instance*/
	@Autowired


	private FundService service;

	/*
	 * Storing the user object coming from the request body, consumes will convert json to user object, @RequestBody extracts
	 * User from the request and supplies the converted user object to the parameter
	 * but the user json must have name, password and age
	 */
	@PostMapping(path = "/fund", consumes = MediaType.APPLICATION_JSON_VALUE,produces = MediaType.APPLICATION_JSON_VALUE)

	public ResponseEntity<Object> saveUser(@RequestBody FundEntity 	fundentity) {
		//ResponseEntity<Object> response = null;
		service.addFundDetails(fundentity);
		System.out.println(fundentity.toString());
		return ResponseEntity.status(HttpStatus.CREATED).body(fundentity); // user will be passed and dao.save(user) will be called
	}
	
	
	@PutMapping(path = "/updateFund/{fund}", consumes=MediaType.APPLICATION_JSON_VALUE,produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Object> updateFund(@PathVariable(value="fund")int fundid,@RequestBody FundEntity fund) {
		ResponseEntity<Object> response = null;
	try {
	
		service.deductFunds(fund);
		// user will be passed and dao.save(user) will be called
		response = ResponseEntity.status(HttpStatus.ACCEPTED).body(fund);
	} catch (Exception e) {
		CustomMessage custom = new CustomMessage("User : Fund id "+fundid+" Deducted", 200);
		response = ResponseEntity.status(HttpStatus.ACCEPTED).body(custom);

	}
	return response;
		
	
	}


	@GetMapping(path = "/funds/{accountnumber}", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Object> fetchUser(@PathVariable("accountnumber") BigInteger Accountnumber) throws FundNotFoundException {
		ResponseEntity<Object> response = null;
		FundEntity getFund=service.showFundsByAcctNum(Accountnumber);
		//CustomMessage custom = new CustomMessage("User with an id "+id+" deleted", 200);
		response = ResponseEntity.status(HttpStatus.OK).body(getFund);
		return response;
	}
}
