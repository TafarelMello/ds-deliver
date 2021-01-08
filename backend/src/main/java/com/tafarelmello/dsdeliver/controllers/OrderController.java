package com.tafarelmello.dsdeliver.controllers;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.tafarelmello.dsdeliver.dto.OrderDTO;
import com.tafarelmello.dsdeliver.services.OrderService;

@RestController
@RequestMapping(value = "/orders")
public class OrderController {

	@Autowired
	private OrderService orderService;

	@GetMapping
	public ResponseEntity<List<OrderDTO>> findAll() {
		List<OrderDTO> orderDtoList = orderService.findAll();
		
		return ResponseEntity.ok().body(orderDtoList);
	}

	@PostMapping
	public ResponseEntity<OrderDTO> create(@RequestBody OrderDTO orderDTO){
		orderDTO = orderService.create(orderDTO);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
		.buildAndExpand(orderDTO.getId()).toUri();

		return ResponseEntity.created(uri).body(orderDTO);
	}

	@PutMapping("/{id}/delivered")
	public ResponseEntity<OrderDTO> setDelivered(@PathVariable Long id){
		OrderDTO orderDTO = orderService.setDelivered(id);

		return ResponseEntity.ok().body(orderDTO);
	}
}
