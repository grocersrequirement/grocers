package com.legatohealth.beans;

import java.math.BigInteger;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "fund")
public class FundEntity {
	@Id
	@Column(name = "fid"  , insertable = false,updatable = false)
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@Column(name = "accountnumber")
	private BigInteger accountnumber;
	@Column(name = "bankaccount")
	private String bankaccount;
	@Column(name="balance")
	private Double balance;
	@Column(name= "depositamount")
	private Double depositamount;
	
	@ManyToOne(targetEntity=UserEntity.class,optional = false)
	@JoinColumn(name="uid",nullable = false)
	private UserEntity userentity;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
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
		return "FundEntity [id=" + id + ", accountnumber=" + accountnumber + ", bankaccount=" + bankaccount
				+ ", balance=" + balance + ", depositamount=" + depositamount + "]";
	}
	
	
	
}
