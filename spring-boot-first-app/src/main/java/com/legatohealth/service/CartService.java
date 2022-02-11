package com.legatohealth.service;

<<<<<<< HEAD
=======
import com.legatohealth.beans.Cart;
import com.legatohealth.beans.UserEntity;
import com.legatohealth.exceptions.CartNotFoundException;
import com.legatohealth.exceptions.ProductNotFound;
import com.legatohealth.exceptions.UserNotFoundException;

>>>>>>> master
public interface CartService {
	public Cart selectItems(int id); 
	public Cart deleteItems(int id) throws CartNotFoundException; 
	public Cart viewItems(int id) throws CartNotFoundException;
	public Cart checkout(CartService cartservice); 
	
}
