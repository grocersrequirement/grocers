package com.legatohealth.exceptions;

public class AccountNotFoundException extends RuntimeException {
	
	
	private String message ;

	public AccountNotFoundException(String message) {
		super();
		this.message = message;
	}
	
	

}
