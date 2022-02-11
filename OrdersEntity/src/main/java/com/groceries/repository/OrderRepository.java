package com.groceries.repository;




import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepository extends JpaRepository<OrderTemplate, Integer> {
	@Query(value = "SELECT * FROM Orders", nativeQuery = true)
	public List<OrderTemplate> getAllOrders();
	
	@Query(value = "SELECT * FROM Orders WHERE userID=?1", nativeQuery = true)
	public List<OrderTemplate> getAllUserOrders(String userID);
	
	@Query(value = "SELECT * FROM Orders WHERE userID=?1 AND orderID=?2", nativeQuery = true)
	public OrderTemplate getUserOrder(String userId, String orderId);
}