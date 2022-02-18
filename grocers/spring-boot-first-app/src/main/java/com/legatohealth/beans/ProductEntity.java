package com.legatohealth.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.sun.jersey.spi.StringReader.ValidateDefaultValue;


@Entity
@Table(name = "products")//,columnDefinition="default 'null'"
public class ProductEntity {
	@Id
	@Column(name = "pid", insertable = false,updatable =false)
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int productId;
	


	@Column(name = "name")
	private String productname;
	@Column(name = "description")
	private String description;
	@Column(name = "quantity")
	private int quantity;
	@Column(name = "price", nullable=false, columnDefinition = "double precision default 0" )
	private double price;
	@Column(name = "discount", nullable=false, columnDefinition = "double precision default 0" )
	private double discount;

	@ManyToOne(targetEntity=Admin.class)
	@JoinColumn(name="aid",nullable = true,columnDefinition = "integer default null")//columnDefinition="default 'null'"
	private Admin admin;

	public ProductEntity() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public ProductEntity(int productId, String productname, String description, int quantity, double price,
			double discount) {
		super();
		this.productId = productId;
		this.productname = productname;
		this.description = description;
		this.quantity = quantity;
		this.price = price;
		this.discount = discount;
	}


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

	public double getDiscount() {
		return discount;
	}

	public void setDiscount(double discount) {
		this.discount = discount;
	}


	public Admin getAdmin() {
		return admin;
	}

	public void setAdmin(Admin admin) {
		this.admin = admin;
	}



	@Override
	public String toString() {
		return "ProductEntity [productId=" + productId + ", productname=" + productname + ", description=" + description
				+ ", quantity=" + quantity + ", price=" + price + ", discount=" + discount + "]";
	}






}
