package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Login;
import com.example.demo.model.Sport;
import com.example.demo.repo.SportRepository;



@Service

public class SportService {
      
    @Autowired
  	SportRepository SportRepository;
  	public Login create(Login Sports) {
  		return SportRepository.save(Sports);
  	}
  	public List<Login> read(){
  		return SportRepository.findAll();
  	}
  	public Login update(Login Sports) {
  		return SportRepository.save(Sports);
  		
  	}
  	public void delete(Long Id) {
  		SportRepository.deleteById(Id);
  	}
  	
}