package com.legatohealth.beans;

public class EmployeeRequest {
	
	private int productId;
	private int employeeId;
	private String action;
	
	public int getProductId() {
		return productId;
	}
	public void setProductId(int productId) {
		this.productId = productId;
	}
	public int getEmployeeId() {
		return employeeId;
	}
	public void setEmployeeId(int employeeId) {
		this.employeeId = employeeId;
	}
	public String getAction() {
		return action;
	}
	public void setAction(String action) {
		this.action = action;
	}
	@Override
	public String toString() {
		return "EmployeeRequest [productId=" + productId + ", employeeId=" + employeeId + ", action=" + action + "]";
	}
	
	

}
