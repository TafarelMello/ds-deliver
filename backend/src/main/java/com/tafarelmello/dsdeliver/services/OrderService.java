package com.tafarelmello.dsdeliver.services;

import java.time.Instant;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.tafarelmello.dsdeliver.dto.OrderDTO;
import com.tafarelmello.dsdeliver.dto.ProductDTO;
import com.tafarelmello.dsdeliver.entities.Order;
import com.tafarelmello.dsdeliver.entities.OrderStatus;
import com.tafarelmello.dsdeliver.entities.Product;
import com.tafarelmello.dsdeliver.repositories.OrderRepository;
import com.tafarelmello.dsdeliver.repositories.ProductRepository;

@Service
public class OrderService {

	@Autowired
	private OrderRepository orderRepository;

	@Autowired
	private ProductRepository productRepository;

	@Transactional(readOnly = true)
	public List<OrderDTO> findAll() {
	  List<Order> orderList = orderRepository.findOrdersPendingWithProdutsWhereOrderMomentAsc();
	  
	  return orderList.stream()
			  .map(order -> new OrderDTO(order))
			  .collect(Collectors.toList());
	}
	
	@Transactional
	public OrderDTO create(OrderDTO orderDto) {
		Order order = new Order(
			null, 
			orderDto.getAddress(),
			orderDto.getLatitude(),
			orderDto.getLongitude(),
			Instant.now(),
			OrderStatus.PENDING
			);

			for(ProductDTO productDto : orderDto.getProducts()){
				Product product = productRepository.getOne(productDto.getId());
				order.getProducts().add(product);
			}

			order = orderRepository.save(order);

			return new OrderDTO(order);
	}
}