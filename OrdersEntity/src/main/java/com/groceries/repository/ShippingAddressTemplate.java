package com.groceries.repository;


import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Table;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;


import com.fasterxml.jackson.annotation.JsonProperty;



@SuppressWarnings("serial")
@Entity(name = "ShippingAddresses")
@Table(name = "ShippingAddresses")

public class ShippingAddressTemplate implements Serializable {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@JoinColumn(name = "orderAddressID")
	private long orderAddressID;
		
	@Column(name = "streetAddress")
	@JsonProperty(value = "streetAddress")
	private String streetAddress;
	
	@Column(name = "city")
	@JsonProperty(value = "city")
	private String city;
	
	@Column(name = "state")
	@JsonProperty(value = "state")
	private String state;
	
	@Column(name = "zipcode")
	@JsonProperty(value = "zipcode")
	private String zipCode;
	
	public String getStreetAddress() {
		return streetAddress;
	}

	public void setStreetAddress(String streetAddress) {
		this.streetAddress = streetAddress;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getZipCode() {
		return zipCode;
	}

	public void setZipCode(String zipCode) {
		this.zipCode = zipCode;
	}

	public long getOrderAddressID() {
		return orderAddressID;
	}

	public void setOrderAddressID(long orderAddressID) {
		this.orderAddressID = orderAddressID;
	}

	@Override
	public String toString() {
		return "ShippingAddressTemplate [orderAddressID=" + orderAddressID + ", streetAddress=" + streetAddress
				+ ", city=" + city + ", state=" + state + ", zipCode=" + zipCode + "]";
	}
	
	
	
	
}