package com.legatohealth.service;

import java.math.BigInteger;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.legatohealth.beans.FundEntity;
import com.legatohealth.beans.UserEntity;
import com.legatohealth.dao.FundDao;
import com.legatohealth.dao.UserEntityDao;
import com.legatohealth.exceptions.UserNotFoundException;
import com.sun.jmx.snmp.SnmpStringFixed;

@Service
public class FundServiceImpl implements FundService {
	@Autowired
	private FundDao funddao; // injects the proxy object of UserDao
	@Autowired
	private UserEntityDao dao;
	@Override
	@Query("select * from fund where accountnumber=?1")
	public FundEntity showFundsByAcctNum(BigInteger accountnumber) {
		// TODO Auto-generated method stub
		
		return funddao.findByAccountnumber(accountnumber);
	}

	@Override
	public void addFundDetails(FundEntity fundentity) {
		// TODO Auto-generated method stub
		try {
//			FundEntity fEntity=null;
//			Optional<UserEntity >uEntity=dao.findById(uid);
//			if(uEntity.isPresent())
//			{
//				fundentity.setUentity(uEntity.get());
				funddao.save(fundentity);
//			}
		
		}catch(Exception e) {
			e.printStackTrace();
		}
		
	}
	@Override
	public void addFunds(FundEntity fundentity) {
		// TODO Auto-generated method stub
		try {
		FundEntity fundObj =  funddao.save(fundentity);
		Double currentBal  = 0d;
		if(fundObj.getBalance()>currentBal)
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
		FundEntity fundObj =  funddao.findByAccountnumber(fundentity.getAccountnumber());
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
