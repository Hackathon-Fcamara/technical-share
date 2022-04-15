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
import com.technicalShare.model.Skills;
import com.technicalShare.repository.SkilsRepository;
import com.technicalShare.service.SkilsService;

@RestController
@RequestMapping("/skills")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class SkilsController {

	@Autowired
	private SkilsService service;

	@Autowired
	private SkilsRepository repo;

	@GetMapping("/all")
	public ResponseEntity<List<Skills>> getAll() {
		return ResponseEntity.ok(repo.findAll());
	}

	@GetMapping("/{id}")
	public ResponseEntity<Skills> getById(@PathVariable Long id) {
		return repo.findById(id).map(resp -> ResponseEntity.ok(resp)).orElse(ResponseEntity.notFound().build());
	}

	@GetMapping("/nome/{skill}")
	public ResponseEntity<List<Skills>> getBySkil(@PathVariable String skill) {
		return ResponseEntity.ok(repo.findAllBySkillContainingIgnoreCase(skill));
	}

	@PostMapping("/cadastrar")
	public ResponseEntity<Skills> cadastrarSkil(@RequestBody Skills skill) {
		return service.cadastrarSkill(skill).map(resp -> ResponseEntity.ok(resp))
				.orElse(ResponseEntity.status(HttpStatus.BAD_REQUEST).build());

	}

	//não será implementado
	@PostMapping("/atualizar")
	public ResponseEntity<Skills> atualizarrSkils(@Valid @RequestBody Skills skills) {
		return ResponseEntity.status(HttpStatus.OK).body(repo.save(skills));
	}

	@DeleteMapping("/{id}")
	public void deletarSkils(@PathVariable Long id) {
		repo.deleteById(id);
	}

}
