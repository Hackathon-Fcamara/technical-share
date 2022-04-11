package com.technicalShare.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.technicalShare.model.Skils;

@Repository
public interface SkilsRepository extends JpaRepository<Skils, Long> {

	public List<Skils> findAllBySkilContainingIgnoreCase(String skil);
	public Optional<Skils> findAllBySkil(String skil);

}
