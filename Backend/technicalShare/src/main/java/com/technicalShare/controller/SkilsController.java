package com.technicalShare.controller;

import java.util.List;

import javax.validation.Valid;

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

import com.technicalShare.model.Skils;
import com.technicalShare.repository.SkilsRepository;

@RestController
@RequestMapping("/skils")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class SkilsController {

	@Autowired
	private SkilsRepository repo;

	@GetMapping("/all")
	public ResponseEntity<List<Skils>> getAll() {
		return ResponseEntity.ok(repo.findAll());
	}

	@GetMapping("/{id}")
	public ResponseEntity<Skils> getById(@PathVariable Long id) {
		return repo.findById(id).map(resp -> ResponseEntity.ok(resp)).orElse(ResponseEntity.notFound().build());
	}

	
	@GetMapping("/nome/{skil}")
	public ResponseEntity<List<Skils>> getBySkil(@PathVariable String skil) {
		return ResponseEntity.ok(repo.findAllBySkilContainingIgnoreCase(skil));
	}

	@PostMapping("/cadastrar")
	public ResponseEntity<Skils> cadastrarSkils (@Valid @RequestBody Skils skils){
		return ResponseEntity.status(HttpStatus.CREATED).body(repo.save(skils));
	}
	
	@PostMapping("/atualizar")
	public ResponseEntity<Skils> atualizarrSkils (@Valid @RequestBody Skils skils){
		return ResponseEntity.status(HttpStatus.OK).body(repo.save(skils));
	}
	
	@DeleteMapping ("/{id}")
	public void deletarSkils (@PathVariable Long id) {
		repo.deleteById(id);
	}

}
