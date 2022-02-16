package com.legatohealth.service;

import java.util.List;
import java.util.Set;

import com.legatohealth.beans.Orders;
import com.legatohealth.beans.ProductEntity;

public interface OrdersService {

	public Set<ProductEntity> showproducts(int cid);
	public Orders updatestatus(String status);
	
}
