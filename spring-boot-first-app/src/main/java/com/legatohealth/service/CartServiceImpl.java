package com.legatohealth.service;

<<<<<<< HEAD
=======
import java.util.List;
import java.util.Optional;

import javax.persistence.ManyToOne;

>>>>>>> master
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
<<<<<<< HEAD
import com.legatohealth.dao.EmployeeDao;

=======

import com.legatohealth.beans.Cart;
import com.legatohealth.beans.ProductEntity;
import com.legatohealth.beans.UserEntity;
import com.legatohealth.dao.CartDao;
import com.legatohealth.dao.EmployeeDao;
import com.legatohealth.dao.UserDao;
import com.legatohealth.dao.UserEntityDao;
import com.legatohealth.exceptions.CartNotFoundException;
import com.legatohealth.exceptions.ProductNotFound;
import com.legatohealth.exceptions.UserNotFoundException;
>>>>>>> master

@Service
public class CartServiceImpl implements CartService {
	@Autowired
	private CartDao dao;
	@Autowired
	@ManyToOne
	private ProductEntity productentity;
	@Override
	@Transactional 
	public Cart selectItems(int id) {
		productentity.getProductname();
		return null;
	}
	@Override
	public Cart deleteItems(int id) throws CartNotFoundException {
		Cart cart=(Cart) viewItems(id);
		dao.delete(cart);
		
		return null;
		
	}
	@Override
	public Cart viewItems(int id) throws CartNotFoundException{
		Cart cart=null;
		Optional<Cart> optional = dao.findById(id);
		if (optional.isPresent()) {
			cart = optional.get();
		} else {
			throw new CartNotFoundException("Cart with ID : " + id + "is not present");
		}
		
		return (Cart) cart;
	}
	@Override
	public Cart checkout(CartService cartservice) {
		// TODO Auto-generated method stub
		return null;
	}
	
	
	
}
