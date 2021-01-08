package com.tafarelmello.dsdeliver.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.tafarelmello.dsdeliver.dto.OrderDTO;
import com.tafarelmello.dsdeliver.entities.Order;
import com.tafarelmello.dsdeliver.repositories.OrderRepository;

@Service
public class OrderService {

	@Autowired
	private OrderRepository orderRepository;

	@Transactional(readOnly = true)
	public List<OrderDTO> findAll() {
	  List<Order> orderList = orderRepository.findOrdersPendingWithProdutsWhereOrderMomentAsc();
	  
	  return orderList.stream()
			  .map(order -> new OrderDTO(order))
			  .collect(Collectors.toList());
  }
}