package com.legatohealth.controller;

import java.math.BigInteger;
import java.util.List;
import java.util.Set;

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

import com.legatohealth.beans.Cart;
import com.legatohealth.beans.CustomMessage;
import com.legatohealth.beans.ProductEntity;
import com.legatohealth.exceptions.ProductNotFound;
import com.legatohealth.service.CartService;
@CrossOrigin(origins = "*",allowedHeaders = "*")
@RestController
@RequestMapping("api")
public class CartController {

	@Autowired
	private CartService cartservice;
	
	@PostMapping(path = "/addCart/{productId}/{quantity}", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Object> addItems(@PathVariable(value="productId")int pid, @PathVariable(value="quantity") int quantity){
	ResponseEntity<Object> response = null;
	ProductEntity prod = null;
	try {
		prod = cartservice.selectItems(pid, quantity);
	} catch (ProductNotFound e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
	response = ResponseEntity.status(HttpStatus.OK).body(prod);
		return response;
	}
	
	@DeleteMapping(path = "/deletecCart/{productId}")
	public ResponseEntity<Object> deleteUser(@PathVariable(value="productId") int id) {
		ResponseEntity<Object> response = null;
		try {
			cartservice.deleteItems(id);
			CustomMessage custom = new CustomMessage("Product with an id "+id+" deleted", 200);
			response = ResponseEntity.status(HttpStatus.OK).body(custom);
		} catch (ProductNotFound e) {
			CustomMessage custom = new CustomMessage(e.getMessage(), 404);
			response = ResponseEntity.status(HttpStatus.NOT_FOUND).body(custom);
		}
		return response;
	}
	
	@PutMapping(path= "/updateCart/{productId}/{quantity}", consumes=MediaType.APPLICATION_JSON_VALUE,produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Object> updatequantity(@PathVariable(value="productId")int pid, @PathVariable(value="quantity") int quantity){
		ResponseEntity<Object> response = null;
	try {
		cartservice.updatequantity(pid, quantity);
		response = ResponseEntity.status(HttpStatus.ACCEPTED).body("updated");
	} catch (ProductNotFound e) {
		response = ResponseEntity.status(HttpStatus.ACCEPTED).body(e.getMessage());
	}
		return response;
	}
	
	@GetMapping(path = "/viewCart")
	public ResponseEntity<Object> getProducts() {
		ResponseEntity<Object> response = null;
		Set<ProductEntity> list = cartservice.viewItems();
		response = ResponseEntity.status(HttpStatus.OK).body(list);
		return response;
	}
	
	@PostMapping(path = "/saveCart",produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Object> savecart(){
		ResponseEntity<Object> response = null;
		Cart cart = cartservice.savecart();
		response = ResponseEntity.status(HttpStatus.CREATED).body(cart);
		return response;
	}
	
	@GetMapping(path = "/checkout/{accountnumber}",  produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Object> checkoutstatus(@PathVariable(value="accountnumber")BigInteger accountnumber) {
		ResponseEntity<Object> response = null;
		Double balance = cartservice.checkout(accountnumber);
		response = ResponseEntity.status(HttpStatus.OK).body(balance);
		return response;
	}

}
