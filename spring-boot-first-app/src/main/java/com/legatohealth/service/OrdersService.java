package com.legatohealth.service;

import java.util.List;

import com.legatohealth.beans.Orders;
import com.legatohealth.beans.ProductEntity;

public interface OrdersService {

	public List<ProductEntity> showproducts(int cid);
	public Orders updatestatus(String status);
	
}
