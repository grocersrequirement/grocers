package com.legatohealth.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.legatohealth.service.UserEntityService;

import com.legatohealth.beans.CustomMessage;
import com.legatohealth.beans.UserEntity;
import com.legatohealth.exceptions.UserNotFoundException;

@RestController
@RequestMapping("api")
public class UserEntityController {

	/* Injecting the service instance */
	@Autowired
	private UserEntityService service;

	/*
	 * Storing the user object coming from the request body, consumes will convert
	 * json to user object, @RequestBody extracts User from the request and supplies
	 * the converted user object to the parameter but the user json must have name,
	 * password and age
	 */
	@PostMapping(path = "/userentity", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Object> saveUser(@RequestBody UserEntity userentity) {
		ResponseEntity<Object> response = null;
		UserEntity createdUser = service.store(userentity); // user will be passed and dao.save(user) will be called
		response = ResponseEntity.status(HttpStatus.CREATED).body(createdUser);
		return response;
	}
	public ResponseEntity<Object> fetchUser(@PathVariable("userId") int id) {
		ResponseEntity<Object> response = null;
		try {
			UserEntity getUser=service.findUser(id);
			//CustomMessage custom = new CustomMessage("User with an id "+id+" deleted", 200);
			response = ResponseEntity.status(HttpStatus.OK).body(getUser);
		} catch (UserNotFoundException e) {
			CustomMessage custom = new CustomMessage(e.getMessage(), 404);
			response = ResponseEntity.status(HttpStatus.NOT_FOUND).body(custom);
		}
		return response;
	}

	/*
	 * @PutMapping(path = "/updateUser/{userId}",
	 * consumes=MediaType.APPLICATION_JSON_VALUE,produces =
	 * MediaType.APPLICATION_JSON_VALUE) public ResponseEntity<Object>
	 * updateUser(@PathVariable(value="userId")int userId,@RequestBody User user) {
	 * ResponseEntity<Object> response = null; User uUser = null; try { uUser=
	 * service.updateUser(userId, user); // user will be passed and dao.save(user)
	 * will be called CustomMessage custom = new
	 * CustomMessage("User : "+uUser.getUserId()+" Updated", 200); response =
	 * ResponseEntity.status(HttpStatus.ACCEPTED).body(custom); } catch
	 * (UserNotFoundException e) { CustomMessage custom = new
	 * CustomMessage(e.getMessage(), 404); response =
	 * ResponseEntity.status(HttpStatus.NOT_FOUND).body(custom); } return response;
	 * }
	 * 
	 * Getting all the users
	 * 
	 * @GetMapping(path = "/user", produces = MediaType.APPLICATION_JSON_VALUE)
	 * public ResponseEntity<Object> getUsers() { ResponseEntity<Object> response =
	 * null; List<User> list = service.fetchAllUsers(); response =
	 * ResponseEntity.status(HttpStatus.OK).body(list); return response; }
	 * 
	 * Deleting the user by id
	 * 
	 * @DeleteMapping(path = "/user/{userId}") public ResponseEntity<Object>
	 * deleteUser(@PathVariable("userId") int id) { ResponseEntity<Object> response
	 * = null; try { service.deleteUser(id); CustomMessage custom = new
	 * CustomMessage("User with an id "+id+" deleted", 200); response =
	 * ResponseEntity.status(HttpStatus.OK).body(custom); } catch
	 * (UserNotFoundException e) { CustomMessage custom = new
	 * CustomMessage(e.getMessage(), 404); response =
	 * ResponseEntity.status(HttpStatus.NOT_FOUND).body(custom); } return response;
	 * }
	 * 
	 * Fetch the user by id
	 * 
	 * @GetMapping(path = "/user/{userId}") public ResponseEntity<Object>
	 * fetchUser(@PathVariable("userId") int id) { ResponseEntity<Object> response =
	 * null; try { User getUser=service.fetchUser(id); //CustomMessage custom = new
	 * CustomMessage("User with an id "+id+" deleted", 200); response =
	 * ResponseEntity.status(HttpStatus.OK).body(getUser); } catch
	 * (UserNotFoundException e) { CustomMessage custom = new
	 * CustomMessage(e.getMessage(), 404); response =
	 * ResponseEntity.status(HttpStatus.NOT_FOUND).body(custom); } return response;
	 * }
	 */
}
