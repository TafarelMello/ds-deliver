package com.tafarelmello.dsdeliver.repositories;

import com.tafarelmello.dsdeliver.entities.Order;

import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long> {
  
}
