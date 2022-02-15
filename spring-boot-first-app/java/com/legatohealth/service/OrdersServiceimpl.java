package com.legatohealth.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.legatohealth.beans.Cart;
import com.legatohealth.beans.Orders;
import com.legatohealth.beans.ProductEntity;

@Service
public class OrdersServiceimpl implements OrdersService {
	
	@Autowired
	private CartService cartservice;

	@Override
	public List<ProductEntity> showproducts(int cid) {
		//Cart cart = null;
		return cartservice.viewItems();
	}

	@Override
	@Transactional
	public Orders updatestatus(String status) {
		Orders orders = null;
		orders.setStatus(status);
		return orders;
	}

}
