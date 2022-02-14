package com.legatohealth.controller;

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
import com.legatohealth.beans.ProductEntity;

import com.legatohealth.exceptions.ProductNotFound;
import com.legatohealth.exceptions.UserNotFoundException;
import com.legatohealth.service.ProductService;
@CrossOrigin(origins = "*",allowedHeaders = "*")
@RestController
@RequestMapping("api")
public class ProductController {
	
	@Autowired
	private ProductService service;
	
	@PostMapping(path = "/product", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Object> saveproduct(@RequestBody ProductEntity product){
		ResponseEntity<Object> response = null;
		ProductEntity productCreated = service.storeProduct(product);
		response = ResponseEntity.status(HttpStatus.CREATED).body(productCreated);
		return response;
	}
	
	@PutMapping(path = "/putProduct/{productId}", consumes=MediaType.APPLICATION_JSON_VALUE,produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Object> updateProduct(@PathVariable(value="productId")int productId,@RequestBody ProductEntity product) {
		ResponseEntity<Object> response = null;
		ProductEntity updatedProduct = null;
		try {
			updatedProduct= service.updateProduct(productId, product);
		// user will be passed and dao.save(user) will be called
		CustomMessage custom = new CustomMessage("Product : "+updatedProduct.getProductId()+" Updated", 200);
		response = ResponseEntity.status(HttpStatus.ACCEPTED).body(custom);
		} catch (ProductNotFound e) {
			CustomMessage custom = new CustomMessage(e.getMessage(), 404);
			response = ResponseEntity.status(HttpStatus.NOT_FOUND).body(custom);
		}
		return response;
	}
	/*
	 * Getting all the users
	 */
	@GetMapping(path = "/getProduct", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Object> getProducts() {
		ResponseEntity<Object> response = null;
		List<ProductEntity> list = service.fetchAllProducts();
		response = ResponseEntity.status(HttpStatus.OK).body(list);
		return response;
	}
	/*
	 * Deleting the user by id
	 */
	@DeleteMapping(path = "/deleteProduct/{productId}")
	public ResponseEntity<Object> deleteUser(@PathVariable("productId") int id) {
		ResponseEntity<Object> response = null;
		try {
			service.deleteProduct(id);
			CustomMessage custom = new CustomMessage("Product with an id "+id+" deleted", 200);
			response = ResponseEntity.status(HttpStatus.OK).body(custom);
		} catch (ProductNotFound e) {
			CustomMessage custom = new CustomMessage(e.getMessage(), 404);
			response = ResponseEntity.status(HttpStatus.NOT_FOUND).body(custom);
		}
		return response;
	}
	/*
	 * Fetch the user by id
	 */
	@GetMapping(path = "/product/{productId}")
	public ResponseEntity<Object> fetchProduct(@PathVariable("productId") int id) {
		ResponseEntity<Object> response = null;
		try {
			ProductEntity getProduct=service.fetchProduct(id);
			//CustomMessage custom = new CustomMessage("User with an id "+id+" deleted", 200);
			response = ResponseEntity.status(HttpStatus.OK).body(getProduct);
		} catch (ProductNotFound e) {
			CustomMessage custom = new CustomMessage(e.getMessage(), 404);
			response = ResponseEntity.status(HttpStatus.NOT_FOUND).body(custom);
		}
		return response;
	}

}
