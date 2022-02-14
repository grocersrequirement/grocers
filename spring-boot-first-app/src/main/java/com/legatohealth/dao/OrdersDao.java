package com.legatohealth.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.legatohealth.beans.Orders;

public interface OrdersDao extends JpaRepository<Orders, Integer> {

}
