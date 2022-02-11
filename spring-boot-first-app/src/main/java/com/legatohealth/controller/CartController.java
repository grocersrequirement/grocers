package com.legatohealth.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.legatohealth.beans.Cart;
import com.legatohealth.beans.CustomMessage;
import com.legatohealth.exceptions.CartNotFoundException;
import com.legatohealth.service.CartService;

@RestController
@RequestMapping("/api")
public class CartController{
	
	@Autowired
	private CartService service;
	
	@DeleteMapping(path = "/cart/{cartId}")
	public ResponseEntity<Object> deleteUser(@PathVariable("cartId") int id) {
		ResponseEntity<Object> response = null;
		try {
			service.deleteItems(id);
			CustomMessage custom = new CustomMessage("Cart with an id "+id+" deleted", 200);
			response = ResponseEntity.status(HttpStatus.OK).body(custom);
		} catch (CartNotFoundException e) {
			CustomMessage custom = new CustomMessage(e.getMessage(), 404);
			response = ResponseEntity.status(HttpStatus.NOT_FOUND).body(custom);
		}
		return response;
	}
	
	
	@GetMapping(path = "/cart/{cartId}")
	public ResponseEntity<Object> viewItems(@PathVariable("cartId") int id) throws CartNotFoundException {
		ResponseEntity<Object> response = null;
		Cart cart=service.viewItems(id);
		//CustomMessage custom = new CustomMessage("User with an id "+id+" deleted", 200);
		response = ResponseEntity.status(HttpStatus.OK).body(cart);
		return response;
	}
	
	}
	