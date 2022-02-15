package com.legatohealth.controller;

import java.util.List;

import javax.ws.rs.POST;

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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonTypeInfo.Id;
import com.legatohealth.beans.Admin;
import com.legatohealth.beans.Employee;
//import com.legatohealth.beans.EmployeeRequest;
import com.legatohealth.beans.ProductEntity;
import com.legatohealth.exceptions.EmployeeNotFoundException;
import com.legatohealth.exceptions.ProductNotFound;
import com.legatohealth.service.*;
//import com.legatohealth.service.AdminServiceImpl;
//import com.legatohealth.service.ProductService;
@CrossOrigin(origins = "*",allowedHeaders = "*")
@RestController
@RequestMapping("/api")
public class AdminRest {
	//@Autowired
	//private Admin admin;
	@Autowired
	private ProductService productservice;
	@Autowired
	private AdminService adminservice;
	
	
	//to view the requests from employee
	@GetMapping(path = "/viewRequests", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Object> getAllRequest(@RequestBody ProductEntity productentity) {
		ResponseEntity<Object> response = null;
		List<ProductEntity> list = adminservice.fetchAllRequests(productentity);
		response = ResponseEntity.status(HttpStatus.OK).body(list);
		return response;
		
	
	}
	
	//to perform operations (like delete update and add) when the employee sends the request
	@GetMapping(path = "/performAction", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Object> performAction(@RequestBody Employee employee) {
		ResponseEntity<Object> response = null;
		boolean result = adminservice.performAction(employee, "request");
		response = ResponseEntity.status(HttpStatus.OK).body(result);
		return response;
	}
	
	// to generate reports like daily,weekly,monthly and yearly.
	@GetMapping(path = "/generateReports", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Object> generateRequests(@RequestParam String duration) {
		ResponseEntity<Object> response = null;
		  adminservice.generateReports(duration);
		response = ResponseEntity.status(HttpStatus.OK).body("success");
		return response;
	}
	
	//admin store the products 
	@GetMapping(path = "/addProduct", consumes = MediaType.APPLICATION_JSON_VALUE,produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Object> productadd(@RequestBody ProductEntity product) {
		ResponseEntity<Object> response = null;
		ProductEntity productEntity=productservice.storeProduct(product);
		response = ResponseEntity.status(HttpStatus.OK).body(productEntity);
		return response;
	}
	//admin delete the products based on id
	@DeleteMapping(path = "/deleteProduct/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Object> deleteProduct(@PathVariable int id) {
		ResponseEntity<Object> response = null;
		try {
			productservice.deleteProduct(id);
		} catch (ProductNotFound e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		response = ResponseEntity.status(HttpStatus.OK).body("deleted");
		return response;			
	}
	//admin update the products..
	@PutMapping(path = "/updateProduct", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Object> storeProduct(@RequestBody ProductEntity product) throws ProductNotFound {
		ResponseEntity<Object> response = null;
		ProductEntity productEntity=productservice.updateProduct(product.getProductId(),product );
		
		response = ResponseEntity.status(HttpStatus.OK).body(productEntity);
		return response;
			
	}
	
	
	//admin delete the employee based on id.
		 @DeleteMapping(path = "/deleteEmployee/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
		public ResponseEntity<Object> deleteEmployee(@PathVariable int id)  {
			ResponseEntity<Object> response = null;	
			try {
				adminservice.deleteEmloyee(id);
			} catch (EmployeeNotFoundException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			response = ResponseEntity.status(HttpStatus.OK).body("deleted");
			return response;			
		} 
	//admin store the employee 
		@PostMapping(path = "/addEmployee", consumes = MediaType.APPLICATION_JSON_VALUE,produces = MediaType.APPLICATION_JSON_VALUE)
		public ResponseEntity<Object> addEmployee(@RequestBody Employee employee) {
			ResponseEntity<Object> response = null;
			Employee resultsemployee=adminservice.addEmployee(employee);
			response = ResponseEntity.status(HttpStatus.OK).body(resultsemployee);
			return response;
		}
	
	
}