package com.example.demo.controller;

import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Sport;
import com.example.demo.service.SportService;
import com.fasterxml.jackson.core.JsonProcessingException;


@RestController
public class SportController {
	
	SportService SportService;
	
	@PostMapping("/post")
	public ResponseEntity<Sport> create(final @RequestBody Sport Sports){
		Sport createSport=SportService.create(Sports);
		return ResponseEntity.ok(createSport);
	}
	
	@GetMapping("/Sport")
	public ResponseEntity<Optional<Sport>> read(final @PathVariable Long id){
		Optional<Sport> createdCandidate=SportService.read(id);
		return ResponseEntity.ok(createdCandidate);
	}
	
	@PutMapping("/put")
	public ResponseEntity<Sport> update(final @RequestBody Sport Sport)throws  JsonProcessingException{
		final Sport updatedSport=SportService.update(Sport);
		return ResponseEntity.ok(updatedSport);
	}
	
	@DeleteMapping("/delete")
	public void delete(final @PathVariable Long id) {
		SportService.delete(id);
	}
}