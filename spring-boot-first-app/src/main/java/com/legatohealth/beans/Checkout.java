package com.legatohealth.beans;

import java.util.Date;

public class Checkout {

	private Boolean orderStatus;
	private String message;
	private Date date;
	public Boolean getOrderStatus() {
		return orderStatus;
	}
	public void setOrderStatus(Boolean orderStatus) {
		this.orderStatus = orderStatus;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	@Override
	public String toString() {
		return "Checkout [orderStatus=" + orderStatus + ", message=" + message + ", date=" + date + "]";
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public Checkout(Boolean orderStatus, String message, Date date) {
		super();
		this.orderStatus = orderStatus;
		this.message = message;
		this.date = date;
	}
	public Checkout() {
		super();
		// TODO Auto-generated constructor stub
	}
	
}
