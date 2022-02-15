package com.legatohealth.controller;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.legatohealth.beans.Orders;
import com.legatohealth.beans.ProductEntity;
import com.legatohealth.service.OrdersService;
@CrossOrigin(origins = "*",allowedHeaders = "*")
@RestController
@RequestMapping("orders")
public class OrdersController {
	
	@Autowired
	private OrdersService orderservice;
	
	@GetMapping(path = "/showproducts/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Object> fetchProducts(@PathVariable("id")int cid){
		ResponseEntity<Object> response = null;
		Set<ProductEntity> list = orderservice.showproducts(cid);
		response = ResponseEntity.status(HttpStatus.OK).body(list);
		return response;
	}
	
	@PutMapping(path = "/updatestatus/{status}", consumes=MediaType.APPLICATION_JSON_VALUE,produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Object> setstatus(String status){
		ResponseEntity<Object> response = null;
		Orders order=orderservice.updatestatus(status);
		response = ResponseEntity.status(HttpStatus.OK).body(order);
		return response;
	}
	
}
