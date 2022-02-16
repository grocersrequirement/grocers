package com.legatohealth.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.legatohealth.beans.ProductEntity;

public interface ProductDao extends JpaRepository<ProductEntity, Integer> {

}
