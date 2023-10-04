package com.example.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Sport;

public interface SportRepository extends JpaRepository<Sport, Long> {
}
