package com.legatohealth.beans;
import java.util.*;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

@Entity
@Table(name = "cart")
//@JsonIdentityInfo(generator=ObjectIdGenerators.PropertyGenerator.class ,property ="eid")
public class Cart {
	@Id
	@Column(name = "cid")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	public Cart(int id) {
		super();
		this.id = id;
	}
	public Cart() {
	
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	@Override
	public String toString() {
		return "Cart [id=" + id + "]";
	}
	
	
	
}