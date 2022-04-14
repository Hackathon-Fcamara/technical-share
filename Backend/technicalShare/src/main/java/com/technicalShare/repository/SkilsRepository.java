package com.technicalShare.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.technicalShare.model.Skills;

@Repository
public interface SkilsRepository extends JpaRepository<Skills, Long> {

	public List<Skills> findAllBySkillContainingIgnoreCase(String skill);
	public Optional<Skills> findAllBySkill(String skill);

}
