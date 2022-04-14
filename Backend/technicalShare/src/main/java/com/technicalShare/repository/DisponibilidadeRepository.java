package com.technicalShare.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.technicalShare.model.Disponibilidade;

@Repository
public interface DisponibilidadeRepository extends JpaRepository<Disponibilidade, Long> {

}
