package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Login;
import com.example.demo.model.Sport;
import com.example.demo.service.SportService;
import com.fasterxml.jackson.core.JsonProcessingException;


@RestController
public class SportController {
	@Autowired
	SportService SportService;
	
	@PostMapping("/post")
	public ResponseEntity<Login> create(final @RequestBody Login Sports){
		Login createSport=SportService.create(Sports);
		return ResponseEntity.ok(createSport);
	}
	
	@GetMapping("/")
	public ResponseEntity<List<Login>> read(){
		List<Login> createdCandidate=SportService.read();
		return ResponseEntity.ok(createdCandidate);
	}
	
	@PutMapping("/put")
	public ResponseEntity<Login> update(final @RequestBody Login Sport)throws  JsonProcessingException{
		final Login updatedSport=SportService.update(Sport);
		return ResponseEntity.ok(updatedSport);
	}
	
	@DeleteMapping("/delete")
	public void delete(final @PathVariable Long id) {
		SportService.delete(id);
	}
}