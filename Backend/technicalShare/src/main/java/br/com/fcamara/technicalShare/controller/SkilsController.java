package br.com.fcamara.technicalShare.controller;


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
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.fcamara.technicalShare.model.Skils;
import br.com.fcamara.technicalShare.repository.SkilsRepository;


@RestController
@RequestMapping("/skils")
@CrossOrigin(origins ="*")
public class SkilsController {
	
	@Autowired
	private SkilsRepository repository;
	
	@GetMapping
	public ResponseEntity<List<Skils>> getAll () {
		return ResponseEntity.ok(repository.findAll());
	}
	
	@GetMapping ("/{id}")
	public ResponseEntity<Skils> getById (@PathVariable Long id){
		return repository.findById(id).map(resp -> ResponseEntity.ok(resp)).orElse(ResponseEntity.notFound().build());
		
	}
	
	@GetMapping ("/nome/{skils}")
	public ResponseEntity<List<Skils>> getBySkils (@PathVariable String skils) {
		return ResponseEntity.ok(repository.findAllBySkilsContainingIgnoreCase(skils));
	}
	
	@PostMapping
	public ResponseEntity<Skils> post (@Valid @RequestBody Skils skils ){
		return ResponseEntity.status(HttpStatus.CREATED).body(repository.save(skils));
	}
	
	@PutMapping
	public ResponseEntity<Skils> put (@Valid @RequestBody Skils skils ){
		return ResponseEntity.status(HttpStatus.OK).body(repository.save(skils));
	}
	
	@DeleteMapping ("/{id}")
	public void delete (@PathVariable Long id) {
		repository.deleteById(id);
	}
	

	

}
