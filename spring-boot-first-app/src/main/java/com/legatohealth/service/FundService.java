package com.legatohealth.service;

import java.math.BigInteger;

import com.legatohealth.beans.FundEntity;

public interface FundService {
	
	//public FundEntity funds(int id);
	//public accountnunum AccountNumberFinfById(int id);
	public FundEntity showFundsByAcctNum(BigInteger accountnumber);
	public void addFunds(FundEntity fundentity);
 public void deductFunds(FundEntity fundentity);
	public void addFundDetails(FundEntity fundentity);
	

	

}
