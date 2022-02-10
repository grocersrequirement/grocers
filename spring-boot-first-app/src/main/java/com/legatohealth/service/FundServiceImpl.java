package com.legatohealth.service;

import java.math.BigInteger;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.legatohealth.beans.FundEntity;
import com.legatohealth.beans.User;
import com.legatohealth.dao.FundDao;
import com.legatohealth.dao.UserDao;
import com.legatohealth.exceptions.UserNotFoundException;

@Service
public class FundServiceImpl implements FundService {
	@Autowired
	private FundDao funddao; // injects the proxy object of UserDao

	@Override
	public FundEntity showFundsByAcctNum(BigInteger accountnumber) {
		// TODO Auto-generated method stub
		funddao.findById(accountnumber);
		return null;
	}

	@Override
	public void addFunds(FundEntity fundentity) {
		// TODO Auto-generated method stub
		try {
		FundEntity fundObj =  funddao.findById(fundentity.getAccountnumber());
		Double currentBal  = 0d;
		if(fundObj!=null)
			 currentBal  =fundObj.getBalance();
		
		currentBal = currentBal+fundentity.getDepositamount();
		fundObj.setBalance(currentBal);
		
		funddao.save(fundentity);
		}catch(Exception e) {
			e.printStackTrace();
		}
		
	}

	@Override
	public void deductFunds(FundEntity fundentity) {
		// TODO Auto-generated method stub
		
		try {
		boolean flag = false;
		FundEntity fundObj =  funddao.findById(fundentity.getAccountnumber());
		Double currentBal  = 0d;
		if(fundObj!=null)
			 currentBal  =fundObj.getBalance();
		if(currentBal < fundentity.getDepositamount()) {
		flag = true ;	
		}else {
			currentBal = currentBal-fundentity.getDepositamount();
		}
		fundObj.setBalance(currentBal);
		
		funddao.save(fundentity);
		
		}catch(Exception e) {
			e.printStackTrace();
		}
	}

	

	
}
