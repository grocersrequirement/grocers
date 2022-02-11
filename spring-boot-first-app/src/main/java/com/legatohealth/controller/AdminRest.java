package com.legatohealth.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.legatohealth.beans.EmployeeRequest;
import com.legatohealth.beans.ProductEntity;
import com.legatohealth.service.AdminService;
import com.legatohealth.service.ProductService;

@RestController
@RequestMapping("/api")
public class AdminRest {
	@Autowired
	private AdminService adminservice;
	
	@GetMapping(path = "/viewRequests", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Object> getAllRequest() {
		ResponseEntity<Object> response = null;
		List<EmployeeRequest> list = adminservice.fetchAllRequests();
		response = ResponseEntity.status(HttpStatus.OK).body(list);
		return response;
	}
	@GetMapping(path = "/generateReports", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Object> generateRequests(@RequestParam String duration) {
		ResponseEntity<Object> response = null;
		  adminservice.generateReports(duration);
		response = ResponseEntity.status(HttpStatus.OK).body("success");
		return response;
	}
	
	

}
