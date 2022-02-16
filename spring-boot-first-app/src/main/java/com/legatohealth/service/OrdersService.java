package com.legatohealth.service;

import java.util.List;
import java.util.Set;

import com.legatohealth.beans.Orders;
import com.legatohealth.beans.ProductEntity;
import com.legatohealth.exceptions.OrdersNotFound;

public interface OrdersService {

	public Set<ProductEntity> showproducts();
	public Orders fetchOrder(int id) throws OrdersNotFound;
	public Orders updatestatus(int id,String status) throws OrdersNotFound;
	
}
