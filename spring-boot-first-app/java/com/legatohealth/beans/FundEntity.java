package com.legatohealth.beans;

import java.math.BigInteger;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "fund")
public class FundEntity {
	@Id
	@Column(name = "fid")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int fid;
	@Column(name = "accountnumber",nullable=false, columnDefinition = "double precision default 0")
	private BigInteger accountnumber;
	@Column(name = "bankaccount")
	private String bankaccount;
	@Column(name="balance", nullable=false, columnDefinition = "double precision default 0" )
	private Double balance;
	@Column(name= "depositamount", nullable=false, columnDefinition = "double precision default 0" )
	private Double depositamount;
	
	@OneToOne(targetEntity=UserEntity.class)
	@JoinColumn(name="uid",nullable = true,columnDefinition = "integer default null")//columnDefinition="default 'null'"
	private UserEntity uentity;
	



	public void setUentity(UserEntity uentity) {
		this.uentity = uentity;
	}




	public UserEntity getUentity() {
		return uentity;
	}




	public FundEntity() {
		super();
	
	}
	
	


	public FundEntity(int id, BigInteger accountnumber, String bankaccount, Double balance, Double depositamount) {
		super();
		this.fid = fid;
		this.accountnumber = accountnumber;
		this.bankaccount = bankaccount;
		this.balance = balance;
		this.depositamount = depositamount;
	}




	public int getFid() {
		return fid;
	}
//	public UserEntity getUid() {
//		return uid;
//	}
//
//
//	public void setUser(int uid) {
//		this.uid = uid;
//	}


	public void setFid(int fid) {
		this.fid = fid;
	}



	public BigInteger getAccountnumber() {
		return accountnumber;
	}
	public void setAccountnumber(BigInteger accountnumber) {
		this.accountnumber = accountnumber;
	}
	public String getBankaccount() {
		return bankaccount;
	}
	public void setBankaccount(String bankaccount) {
		this.bankaccount = bankaccount;
	}
	public Double getBalance() {
		return balance;
	}
	public void setBalance(Double balance) {
		this.balance = balance;
	}
	
	public Double getDepositamount() {
		return depositamount;
	}
	public void setDepositamount(Double depositamount) {
		this.depositamount = depositamount;
	}
	@Override
	public String toString() {
		return "FundEntity [fid=" + fid + ", accountnumber=" + accountnumber + ", bankaccount=" + bankaccount
				+ ", balance=" + balance + ", depositamount=" + depositamount + "]";
	}
	
	
	
}
