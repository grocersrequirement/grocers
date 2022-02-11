package com.legatohealth.service;

import com.legatohealth.beans.UserEntity;
import com.legatohealth.exceptions.UserNotFoundException;

public interface CartService {
	public CartService selectItems(CartService cartservice); 
	public CartService deleteItems(CartService cartservice); 
	public CartService viewItems(CartService cartservice); 
	public CartService checkout(CartService cartservice); 
	
}
