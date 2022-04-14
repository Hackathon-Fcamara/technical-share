package com.technicalShare.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.technicalShare.model.Depoimentos;
import com.technicalShare.repository.DepoimentosRepository;



@RestController
@RequestMapping ("/depoimentos")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class DepoimentosController {
	
	@Autowired
	private DepoimentosRepository repo;
	
	@GetMapping
	public ResponseEntity<List<Depoimentos>> getAll (){
		return ResponseEntity.ok(repo.findAll());
	}
	
	@PostMapping
	public ResponseEntity<Depoimentos> postDepoimentos (@RequestBody Depoimentos depoimentos){
		return ResponseEntity.status(HttpStatus.CREATED).body(repo.save(depoimentos));
	}
	
	@DeleteMapping ("/{id}")
	public void delete (@PathVariable Long id) {
		repo.deleteById(id);
	}

}
