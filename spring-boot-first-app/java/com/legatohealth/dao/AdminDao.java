package com.legatohealth.dao;

import org.bouncycastle.jcajce.provider.asymmetric.rsa.CipherSpi.PKCS1v1_5Padding_PublicOnly;
import org.springframework.data.jpa.repository.JpaRepository;
import com.legatohealth.beans.Admin;
import com.legatohealth.beans.UserEntity;

public interface AdminDao  extends JpaRepository<Admin, Integer>{
	default void generateReports(String duration) {
		 
		
	}
	public Admin findByUsername(String username);
}



