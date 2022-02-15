//package com.groceries.repository;
package com.legatohealth.beans;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
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
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.Transient;

import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Parameter;
import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonProperty;
//import org.springframework.boot.configurationprocessor.json.JSONObject;

@Entity
@Table(name = "Orders")
public class OrderTemplate {
	
	@Id
	@Column(name = "orderID", insertable = false,updatable = false)
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long orderID;
	
	@JsonProperty(value = "user")
	@Column(name = "userID")
	private String userID;
	
	@Column(name = "nameID")
	private long nameID;
	
	//@Temporal(TemporalType.DATE)
	@Column(name = "orderDate")
	private String date;
	
//	@JoinColumn(name="orderID")
//	@OneToMany(fetch=FetchType.LAZY,cascade= {CascadeType.ALL})
//	@JsonProperty("products")
//	private List<ProductEntity>products=new ArrayList<ProductEntity>();
	
	@ManyToOne(targetEntity=ProductEntity.class,optional = false)
	@JoinColumn(name="pid",nullable = false)
	private ProductEntity productentity;
	
	@ManyToOne(targetEntity=UserEntity.class,optional = false)
	@JoinColumn(name="uid",nullable = false)
	private UserEntity userentity;
	
		
	public OrderTemplate(long orderID, String userID, long nameID, String date) {
		super();
		this.orderID = orderID;
		this.userID = userID;
		this.nameID = nameID;
		this.date = date;
	}
	public OrderTemplate() {
		super();
		
	}

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
	
	public long getNameID() {
		return nameID;
	}

	public void setNameID(long nameID) {
		this.nameID = nameID;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		
		DateTimeFormatter dateTimeFormatter=DateTimeFormatter.ofPattern("dd/mm/yyyy");
		LocalDateTime locateTime= LocalDateTime.now();
		this.date = dateTimeFormatter.format(locateTime);
	}
	@Override
	public String toString() {
		return "OrderTemplate [orderID=" + orderID + ", userID=" + userID + ", nameID=" + nameID + ", date=" + date
				+ "]";
	}
	
	
}