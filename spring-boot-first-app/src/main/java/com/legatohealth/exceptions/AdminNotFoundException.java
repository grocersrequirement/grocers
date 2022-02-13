package com.legatohealth.exceptions;

@SuppressWarnings("serial")
public class AdminNotFoundException extends Exception {
	
	public AdminNotFoundException() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	String message;

	public AdminNotFoundException(String message) {
		super();
		this.message=message;
		// TODO Auto-generated constructor stub
	}

}
