package com.legatohealth.service;

import java.math.BigInteger;
import java.util.List;
import java.util.Set;

import org.springframework.data.jpa.repository.Query;

import com.legatohealth.beans.Cart;
import com.legatohealth.beans.ProductEntity;
import com.legatohealth.exceptions.ProductNotFound;

public interface CartService {
	public ProductEntity selectItems(int id, int qty) throws ProductNotFound; 
	public void deleteItems(int id) throws ProductNotFound; 
	public void updatequantity(int id, int qty) throws ProductNotFound;
	public Set<ProductEntity> viewItems();
	public Cart savecart();
	public String checkout(BigInteger  accountnummber); 
	
}
