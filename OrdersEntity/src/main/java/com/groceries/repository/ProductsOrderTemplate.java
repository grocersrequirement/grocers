package com.groceries.repository;




import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Transient;

import com.fasterxml.jackson.annotation.JsonProperty;


@Entity(name = "ProductOrders")
@Table(name = "ProductOrders")
public class ProductsOrderTemplate {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "productOrderID")
	private long productOrderID;
	
	@Column(name = "title")
	@JsonProperty(value = "title")
	private String title;
	
	@Column(name = "price")
	@JsonProperty(value = "price")
	private float price;
	
	@Column(name = "category")//description
	@JsonProperty(value = "category")
	private String category;
	
	@Column(name = "quantity")
	@JsonProperty(value = "quantity")
	private int quantity;
	
	@Transient
	@JsonProperty(value = "imageUrl")
	private String imageUrl;
	
	@Transient
	@JsonProperty(value = "image")
	private String image;
	
	@ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.PERSIST)
	@JoinColumn(name = "orderID", referencedColumnName = "orderID", nullable = false)
	private OrderTemplate orders;
		
	public long getProductOrderID() {
		return productOrderID;
	}

	public void setOrderProductsID(long productOrderID) {
		this.productOrderID = productOrderID;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public float getPrice() {
		return price;
	}

	public void setPrice(float price) {
		this.price = price;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public String getImageUrl() {
		return imageUrl;
	}

	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public OrderTemplate getOrders() {
		return orders;
	}

	public void setOrders(OrderTemplate orders) {
		this.orders = orders;
	}	
	
	
}
