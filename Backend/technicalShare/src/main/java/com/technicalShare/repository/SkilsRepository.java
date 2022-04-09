package com.technicalShare.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.technicalShare.model.Skils;

public interface SkilsRepository extends JpaRepository<Skils, Long> {

	public Optional<Skils> findAllBySkilContainingIgnoreCase(String skil);
	public Optional<Skils> findAllBySkil(String skil);

}
