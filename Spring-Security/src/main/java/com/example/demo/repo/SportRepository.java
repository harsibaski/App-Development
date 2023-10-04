package com.example.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Login;
import com.example.demo.model.Sport;

public interface SportRepository extends JpaRepository<Login, Long> {
}
