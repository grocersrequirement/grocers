package com.groceries.repository;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.Transient;

import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Parameter;

import com.fasterxml.jackson.annotation.JsonProperty;
//import org.springframework.boot.configurationprocessor.json.JSONObject;

@Entity
@Table(name = "Orders")
public class OrderTemplate {
	
	@Id
	@Column(name = "orderID")
	@GenericGenerator(name = "num_gen", strategy = "com.example.backendjava.utils.NumericGenerator",
		parameters = {
				@Parameter(name = "value", value = "22")
		}
	)
	@GeneratedValue(strategy = GenerationType.AUTO, generator="num_gen")
	private long orderID;
	
	@JsonProperty(value = "user")
	@Column(name = "userID")
	private String userID;
	
	@Column(name = "nameID")
	private long nameID;
	
	@Temporal(TemporalType.DATE)
	@Column(name = "orderDate")
	private Date date = new Date();
	
	@OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JoinColumn(name = "orderAddressID")
	@JsonProperty("address")
	private ShippingAddressTemplate shipAddress;
	
	@JoinColumn(name = "orderID")
	@OneToMany(fetch = FetchType.LAZY, cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REMOVE})
	@JsonProperty("products")
	private List<ProductsOrderTemplate> products = new ArrayList<ProductsOrderTemplate>();
	
	
	public String getUser() {
		return userID;
	}

	public void setUser(String userID) {
		this.userID = userID;
	}

	public long getOrderID() {
		return orderID;
	}

	public void setOrderID(long orderID) {
		this.orderID = orderID;
	}


	public ShippingAddressTemplate getShipAddress() {
		return shipAddress;
	}

	public void setShipAddress(ShippingAddressTemplate shipAddress) {
		this.shipAddress = shipAddress;
	}

	public List<ProductsOrderTemplate> getProducts() {
		return products;
	}

	public void setProducts(List<ProductsOrderTemplate> products) {
		this.products = products;
	}
	
	

	public long getNameID() {
		return nameID;
	}

	public void setNameID(long nameID) {
		this.nameID = nameID;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}
}