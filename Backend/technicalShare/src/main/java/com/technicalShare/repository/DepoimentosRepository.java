package com.technicalShare.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.technicalShare.model.Depoimentos;

@Repository
public interface DepoimentosRepository extends JpaRepository<Depoimentos, Long> {
	public List<Depoimentos> findAllByDepoimentosContainingIgnoreCase(String depoimentos);

}
