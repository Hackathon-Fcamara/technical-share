package com.technicalShare.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.technicalShare.model.Skils;

public interface SkilsRepository extends JpaRepository<Skils, Long> {

	public List<Skils> findAllBySkilContainingIgnoreCase (String skils);
				   
}
