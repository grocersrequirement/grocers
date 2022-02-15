package com.legatohealth.service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.legatohealth.beans.Cart;
import com.legatohealth.beans.ProductEntity;
import com.legatohealth.dao.CartDao;
import com.legatohealth.dao.EmployeeDao;
import com.legatohealth.dao.ProductDao;
import com.legatohealth.exceptions.ProductNotFound;

@Service
public class CartServiceImpl implements CartService {

	@Autowired
	private ProductService service;

	@Autowired
	private CartDao dao;

	double totalprice = 0d;

	//List<ProductEntity> list = new ArrayList<ProductEntity>();
	Set<ProductEntity> prodlist= new HashSet<ProductEntity>();
	int count = 0;

	@Override
	@Transactional
	public ProductEntity selectItems(int id, int qty) throws ProductNotFound {
		ProductEntity prod = new ProductEntity();
		try {
			ProductEntity productfound = service.fetchProduct(id);
			productfound.setQuantity(qty);
			prod = productfound;
			Cart cart = null;
			prodlist.add(productfound);
			//cart.setProduct(product);
			// ProductEntity produc =dao.save(product);
			//cart.setTotal(product.getPrice());
			totalprice = totalprice+ ((productfound.getQuantity())* productfound.getPrice());
			count= count + productfound.getQuantity();
			//dao.save(cart);
		} catch (ProductNotFound e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return prod;

	}

	@Override
	@Transactional
	public void deleteItems(int id) throws ProductNotFound {
		try {
			
			if (prodlist != null && prodlist.contains(service.fetchProduct(id))) {
				ProductEntity product = service.fetchProduct(id);
				totalprice = totalprice - (product.getQuantity()*(product.getPrice()));
				count= count -product.getQuantity();
				prodlist.remove(product);
			}
		} catch (ProductNotFound e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}

	@Override
	public List<ProductEntity> viewItems() {
		// TODO Auto-generated method stub
		return (List<ProductEntity>) prodlist;
	}

	@Override
	@Transactional
	public void updatequantity(int id, int qty) throws ProductNotFound {
		try {
			if(prodlist.contains(service.fetchProduct(id))) {
				ProductEntity prod= service.fetchProduct(id);
				this.deleteItems(id);
				this.selectItems(id, qty);
			}
		} catch (ProductNotFound e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}		
	}

	@Override
	@Transactional
	public Cart savecart() {
		Cart newcart = new Cart();
		//newcart.setProduct(prodlist);
		newcart.setTotal(totalprice);
		return newcart;
	}
	
	

}
