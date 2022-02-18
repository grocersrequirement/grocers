package com.legatohealth.beans;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "orders")
public class Orders {

	@Id
	@Column(name = "oid")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int orderId;
	



	@Column(name = "orderDate")
	private String date ;
	@Column(name = "status")
	private String status;
	
	@ManyToOne(targetEntity=Cart.class)
	@JoinColumn(name="cid",nullable = true,columnDefinition = "integer default null")//columnDefinition="default 'null'"
	private Cart cart;
	
	@ManyToOne(targetEntity=UserEntity.class)
	@JoinColumn(name = "uid",nullable = true,columnDefinition = "integer default null")
	private UserEntity user;

	public Orders() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Orders(int orderId, String date, String status) {
		super();
		this.orderId = orderId;
		this.date = date;
		this.status = status;
	
	}
	public String getDate() {
		return date;
	}

	public void setDate(String date) {
	DateTimeFormatter dateTimeFormatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");
	 LocalDateTime lDateTime =LocalDateTime.now();
		this.date= dateTimeFormatter.format(lDateTime);
	}

	public int getOrderId() {
		return orderId;
	}

	public void setOrderId(int orderId) {
		this.orderId = orderId;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Cart getCart() {
		return cart;
	}

	public void setCart(Cart cart) {
		this.cart = cart;
	}
	public UserEntity getUser() {
		return user;
	}

	public void setUser(UserEntity user) {
		this.user = user;
	}

	

	@Override
	public String toString() {
		return "Oreders [orderId=" + orderId + ", status=" + status + ", cart=" + cart + ", user=" + user + "]";
	}
	
	
	
}
