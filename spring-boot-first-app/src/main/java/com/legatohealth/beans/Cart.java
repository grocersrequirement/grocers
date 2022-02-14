package com.legatohealth.beans;
import java.util.*;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

@Entity
@Table(name = "cart")
//@JsonIdentityInfo(generator=ObjectIdGenerators.PropertyGenerator.class ,property ="eid")
public class Cart {
	@Id
	@Column(name = "cid")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@JoinColumn(name = "pid")
	@OneToMany
	private Set<ProductEntity> product;
	
	@JoinColumn(name = "uid")
	private UserEntity user;
	
	@Column(name = "total")
	private double total;

	public Cart(int id) {
		super();
		this.id = id;
	}

	public Cart(int id, Set<ProductEntity> product, UserEntity user, double total) {
		super();
		this.id = id;
		this.product = product;
		this.user = user;
		this.total = total;
	}




	public Set<ProductEntity> getProduct() {
		return product;
	}

	public void setProduct(Set<ProductEntity> product) {
		this.product = product;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}
	

//	public ProductEntity getProduct() {
//		return product;
//	}
//
//	public void setProduct(ProductEntity product) {
//		this.product = product;
//	}

	public UserEntity getUser() {
		return user;
	}

	public void setUser(UserEntity user) {
		this.user = user;
	}

	public double getTotal() {
		return total;
	}

	public void setTotal(double total) {
		this.total = total;
	}
	
	

	public Cart() {
		super();
		// TODO Auto-generated constructor stub
	}
	

	@Override
	public String toString() {
		return "Cart [id=" + id + "]";
	}
	
	
	
}