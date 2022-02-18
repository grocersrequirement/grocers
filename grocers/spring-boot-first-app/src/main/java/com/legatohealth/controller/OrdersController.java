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

import com.legatohealth.beans.CustomMessage;
import com.legatohealth.beans.Orders;
import com.legatohealth.beans.ProductEntity;
import com.legatohealth.exceptions.OrdersNotFound;
import com.legatohealth.exceptions.ProductNotFound;
import com.legatohealth.service.OrdersService;
@CrossOrigin(origins = "*",allowedHeaders = "*")
@RestController
@RequestMapping("orders")
public class OrdersController {
	
	@Autowired
	private OrdersService orderservice;
	
	@GetMapping(path = "/showproduct", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Object> fetchProducts(){
		ResponseEntity<Object> response = null;
		Set<ProductEntity> list = orderservice.showproducts();
		response = ResponseEntity.status(HttpStatus.OK).body(list);
		return response;
	}
	
	@PutMapping(path = "/updatestatus/{oid}/{status}", consumes=MediaType.APPLICATION_JSON_VALUE,produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Object> setstatus(@PathVariable(value="oid")int oid, @PathVariable(value="status")String status){
		ResponseEntity<Object> response = null;
		Orders order = null;
		try {
			order = orderservice.updatestatus(oid,status);
		} catch (OrdersNotFound e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		response = ResponseEntity.status(HttpStatus.OK).body(order);
		return response;
	}
	
	
	@GetMapping(path = "/getOrder/{oid}", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Object> fetchOrder(@PathVariable(value="oid") int oid) {
		ResponseEntity<Object> response = null;
		try {
			Orders order=orderservice.fetchOrder(oid);
			//CustomMessage custom = new CustomMessage("User with an id "+id+" deleted", 200);
			response = ResponseEntity.status(HttpStatus.OK).body(order);
		} catch (OrdersNotFound e) {
			CustomMessage custom = new CustomMessage(e.getMessage(), 404);
			response = ResponseEntity.status(HttpStatus.NOT_FOUND).body(custom);
		}
		return response;
	}
}
