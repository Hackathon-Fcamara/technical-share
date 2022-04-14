package com.technicalShare.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.technicalShare.model.Disponibilidade;
import com.technicalShare.repository.DisponibilidadeRepository;

@RestController
@RequestMapping("/disponibilidade")
@CrossOrigin(origins = "*",allowedHeaders = "*")
public class DisponibilidadeController {
	
	@Autowired
	private DisponibilidadeRepository repo;
	
	
	@GetMapping
	public ResponseEntity<List<Disponibilidade>> getAll (){
		return ResponseEntity.ok(repo.findAll());
	}
	
	@PostMapping
	public ResponseEntity<Disponibilidade> postDisponibilidade (@RequestBody Disponibilidade disponibilidade){
		return ResponseEntity.status(HttpStatus.CREATED).body(repo.save(disponibilidade));
	}

}
