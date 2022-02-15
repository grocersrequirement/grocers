package com.legatohealth.beans;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonProperty;
//import org.springframework.boot.configurationprocessor.json.JSONObject;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;


@Entity
@Table(name = "order")
//@JsonIdentityInfo(generator=ObjectIdGenerators.PropertyGenerator.class ,property ="oid")
public class OrderTemplate {
	
	@Id
	@Column(name = "oid", insertable = false,updatable =false)
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long oid;
	
	//@Temporal(TemporalType.DATE)


	
	public OrderTemplate() {
		super();
		// TODO Auto-generated constructor stub
	}



	
	public long getOid() {
		return oid;
	}

	public void setOid(long oid) {
		this.oid = oid;
	}



}