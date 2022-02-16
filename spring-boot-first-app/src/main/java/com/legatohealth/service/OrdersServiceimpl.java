package com.legatohealth.service;

import java.util.List;
import java.util.Optional;
import java.util.Set;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.legatohealth.beans.Cart;
import com.legatohealth.beans.Orders;
import com.legatohealth.beans.ProductEntity;
import com.legatohealth.dao.OrdersDao;
import com.legatohealth.exceptions.OrdersNotFound;
import com.legatohealth.exceptions.ProductNotFound;

@Service
public class OrdersServiceimpl implements OrdersService {
	
	@Autowired
	private CartService cartservice;
	
	@Autowired
	private OrdersDao ordersdao;

	@Override
	public Set<ProductEntity> showproducts() {
		//Cart cart = null;
		return cartservice.viewItems();
	}

	@Override
	@Transactional
	public Orders updatestatus(int id,String status) throws OrdersNotFound {
		Orders orders = null;
		Optional<Orders> optional = ordersdao.findById(id);
		if (optional.isPresent()) {
			orders = optional.get();
		} else {
			throw new OrdersNotFound("Orders with ID : " + id + "is not present");
		}
		orders.setStatus(status);
		ordersdao.save(orders);
		return orders;
	}

	@Override
	public Orders fetchOrder(int id) throws OrdersNotFound {
		Orders orders = null;
		Optional<Orders> optional = ordersdao.findById(id);
		if (optional.isPresent()) {
			orders = optional.get();
		} else {
			throw new OrdersNotFound("Orders with ID : " + id + "is not present");
		}
		//orders.setStatus(status);
		//ordersdao.save(orders);
		return orders;
	}

}
