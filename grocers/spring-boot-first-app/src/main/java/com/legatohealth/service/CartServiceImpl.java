package com.legatohealth.service;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;

import com.legatohealth.beans.Cart;
import com.legatohealth.beans.FundEntity;
import com.legatohealth.beans.Orders;
import com.legatohealth.beans.ProductEntity;
import com.legatohealth.dao.CartDao;
import com.legatohealth.dao.EmployeeDao;
import com.legatohealth.dao.ProductDao;
import com.legatohealth.exceptions.OrdersNotFound;
import com.legatohealth.exceptions.ProductNotFound;

@Service
public class CartServiceImpl implements CartService {

	@Autowired
	private ProductService service;

	@Autowired
	private CartDao dao;
	
	@Autowired
	private FundService fundService;
	
	@Autowired
	private OrdersService orderservice;

	double totalprice = 0d;

	Set<ProductEntity> prodlist= new HashSet<ProductEntity>();
	int count = 0;

	@Override
	@Transactional
	public ProductEntity selectItems(int id, int qty) throws ProductNotFound {
		ProductEntity prod = new ProductEntity();
		try {
			ProductEntity productfound = service.fetchProduct(id);
			productfound.setQuantity(productfound.getQuantity()-qty);
			prod = productfound;
			prodlist.add(productfound);
			//cart.setProduct(product);
			// ProductEntity produc =dao.save(product);
			//cart.setTotal(product.getPrice());
			totalprice = totalprice+((qty)* (productfound.getPrice()-((productfound.getDiscount()*productfound.getPrice())/100)));
			count= count + qty;
			service.updateProduct(id, productfound);
		} catch (ProductNotFound e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return prod;

	}

	@Override
	@Transactional
	@Query("delete product from cart"+" where INNER JOIN  product on cart.pid=product.pid"+" where product.pid=?1")
	public void deleteItems(int id) throws ProductNotFound {
		try {
			//if ((prodlist != null)&&(prodlist.contains(service.fetchProduct(id)))) {
			//if (prodlist.contains(service.fetchProduct(id))) {
				ProductEntity product = service.fetchProduct(id);
				product.setQuantity(product.getQuantity()+1);
				//totalprice = totalprice - (product.getPrice());
			//	product.setQuantity(product.getQuantity()+1);
				//System.out.println(product);
				//count= count -1;
				prodlist.remove(product);
				service.updateProduct(id, product);
			//}
		} catch (ProductNotFound e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}

	@Override
	public Set<ProductEntity> viewItems() {
		// TODO Auto-generated method stub(Set<ProductEntity>)
		return  prodlist;
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
		newcart.setProductEntity(prodlist);
		newcart.setTotal(totalprice);
		newcart=dao.save(newcart);
		return newcart;
	}

	@Override
	@Transactional
	public String checkout(BigInteger accountnummber) {
		FundEntity fundEntity=fundService.showFundsByAcctNum(accountnummber);
		Double balance=fundEntity.getBalance();
		String status= null;
		if(totalprice<=balance)
		{
			status="can place the order";
		}
		else {
			status = "cannot place the order";
		}
		return status;
		
	}
	
	

}
