package com.legatohealth.service;

import java.util.List;

import com.legatohealth.beans.Cart;
import com.legatohealth.beans.ProductEntity;
import com.legatohealth.exceptions.ProductNotFound;

public interface CartService {
	public ProductEntity selectItems(int id, int qty) throws ProductNotFound; 
	public void deleteItems(int id) throws ProductNotFound; 
	public void updatequantity(int id, int qty) throws ProductNotFound;
	public List<ProductEntity> viewItems();
	public Cart savecart();
//	public void checkout(Cart); 
	
}
