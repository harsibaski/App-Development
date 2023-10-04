package com.example.demo.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Sport;
import com.example.demo.repo.SportRepository;



@Service

public class SportService {
      
      @Autowired
  	SportRepository SportRepository;
  	public Sport create(Sport Sports) {
  		return SportRepository.save(Sports);
  	}
  	public Optional<Sport> read(Long id){
  		return SportRepository.findById(id);
  	}
  	public Sport update(Sport Sports) {
  		return SportRepository.save(Sports);
  		
  	}
  	public void delete(Long Id) {
  		SportRepository.deleteById(Id);
  	}
  	
}