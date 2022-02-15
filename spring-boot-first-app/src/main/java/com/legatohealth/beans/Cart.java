package com.legatohealth.beans;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.*;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;


@Entity
@Table(name = "cart")
//@JsonIdentityInfo(generator=ObjectIdGenerators.PropertyGenerator.class ,property ="cid")
public class Cart {
	@Id
	@Column(name = "cid",insertable = false,updatable =false)
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int cid;

	@Column(name = "total")
	private double total;

	@ManyToOne(targetEntity=UserEntity.class)
	@JoinColumn(name="uid",nullable = true,columnDefinition = "integer default null")//columnDefinition="default 'null'"
	private UserEntity userEntity;
	
	@ManyToOne(targetEntity=ProductEntity.class)
	@JoinColumn(name="pid",nullable = true,columnDefinition = "integer default null")//columnDefinition="default 'null'"
	private Set<ProductEntity> productEntity;
	public Cart() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Cart(int cid) {
		super();
		this.cid = cid;
	}

	public double getTotal() {
		return total;
	}

	public void setTotal(double total) {
		this.total = total;
	}

	public UserEntity getUserEntity() {
		return userEntity;
	}
	public void setUserEntity(UserEntity userEntity) {
		this.userEntity = userEntity;
	}
	public Set<ProductEntity> getProductEntity() {
		return productEntity;
	}
	public void setProductEntity(Set<ProductEntity> productEntity) {
		this.productEntity = productEntity;
	}
	
	
	public void setCid(int cid) {
		this.cid = cid;
	}

	public int getCid() {
		return cid;
	}
	@Override
	public String toString() {
		return "Cart [cid=" + cid + ", total=" + total  + "]";
	}
	
	
	
}