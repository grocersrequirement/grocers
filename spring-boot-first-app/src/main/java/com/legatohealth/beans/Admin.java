package com.legatohealth.beans;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;


@Entity
@Table(name = "admin")
public class Admin {
	
	@Id
	@Column(name = "id" , insertable = false,updatable = false)
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@Column (name="username")
	private String username;
	@Column(name="password")
	private String password;
	
	@OneToMany(targetEntity=Employee.class,mappedBy="admin",cascade = CascadeType.ALL,fetch = FetchType.LAZY)
	private List<Employee> employee;
	
//	private Employee employee;
//	private ArrayList<Employee> empList = new ArrayList<Employee>();
	
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	@Override
	public String toString() {
		return "Admin [username=" + username + ", password=" + password + "]";
	}
	
	
	
	

}
