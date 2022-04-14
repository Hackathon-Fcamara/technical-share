package com.technicalShare.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.technicalShare.model.Skills;
import com.technicalShare.repository.SkilsRepository;

@Service
public class SkilsService {
	@Autowired
	private SkilsRepository repo;
	
	public Optional<Skills> cadastrarSkill (Skills skill){
		if(repo.findAllBySkill(skill.getSkill()).isPresent()) {
			return Optional.empty();
		}
		
		skill.setSkill(skill.getSkill());
		return Optional.of(repo.save(skill));
	}
	
}
