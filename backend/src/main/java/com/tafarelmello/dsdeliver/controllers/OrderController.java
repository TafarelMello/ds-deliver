package com.tafarelmello.dsdeliver.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tafarelmello.dsdeliver.dto.OrderDTO;
import com.tafarelmello.dsdeliver.services.OrderService;

@RestController
@RequestMapping(value = "/orders")
public class OrderController {

	@Autowired
	private OrderService orderService;

	@GetMapping
	public ResponseEntity<List<OrderDTO>> findAll() {
		List<OrderDTO> orderList = orderService.findAll();
		
		return ResponseEntity.ok().body(orderList);
	}
}