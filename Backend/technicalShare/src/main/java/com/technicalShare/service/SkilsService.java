package com.technicalShare.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.technicalShare.model.Skils;
import com.technicalShare.repository.SkilsRepository;

@Service
public class SkilsService {
	@Autowired
	private SkilsRepository repo;
	
	public Optional<Skils> cadastrarSkil (Skils skil){
		if(repo.findAllBySkil(skil.getSkil()).isPresent()) {
			return Optional.empty();
		}
		
		skil.setSkil(skil.getSkil());
		return Optional.of(repo.save(skil));
	}
	
}
