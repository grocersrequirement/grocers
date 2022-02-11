package com.legatohealth.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "products")
public class ProductEntity {
	@Id
	@Column(name = "pid" , insertable = false,updatable = false)
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int productId;
	@Column(name = "name")
	private String productname;
	@Column(name = "description")
	private String description;
	@Column(name = "quantity")
	private int quantity;
	@Column(name = "price")
	private double price;
	
	@ManyToOne(targetEntity=Employee.class,optional = false)
	@JoinColumn(name="id",nullable = false)
	private Employee employee;

	public int getProductId() {
		return productId;
	}

	public void setProductId(int productId) {
		this.productId = productId;
	}

	public String getProductname() {
		return productname;
	}

	public void setProductname(String productname) {
		this.productname = productname;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

}
