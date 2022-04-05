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

import br.com.fcamara.technicalShare.model.Pessoas;
import br.com.fcamara.technicalShare.repository.PessoasRepository;

@RestController
@RequestMapping("/pessoas")
@CrossOrigin(origins = "*")
public class PessoasController {

	@Autowired
	private PessoasRepository repo;

	@GetMapping
	public ResponseEntity<List<Pessoas>> getAll() {
		return ResponseEntity.ok(repo.findAll());
	}

	@GetMapping("/{id}")
	public ResponseEntity<Pessoas> getById(@PathVariable Long id) // metodo captura valor pelo PathVariable
	{
		return repo.findById(id).map(resp -> ResponseEntity.ok(resp)).orElse(ResponseEntity.notFound().build());
	}

	@GetMapping("/nome/{nome}")
	public ResponseEntity<List<Pessoas>> getByName(@PathVariable String nome) {
		return ResponseEntity.ok(repo.findAllByNomeContainingIgnoreCase(nome));
	}

	@GetMapping("/funcao/{funcao}")
	public ResponseEntity<List<Pessoas>> getByFuncao(@PathVariable String funcao) {
		return ResponseEntity.ok(repo.findAllByFuncaoContainingIgnoreCase(funcao));
	}

	@PostMapping
	public ResponseEntity<Pessoas> post(@Valid @RequestBody Pessoas pessoas) {
		return ResponseEntity.status(HttpStatus.CREATED).body(repo.save(pessoas));
	}

	@PutMapping
	public ResponseEntity<Pessoas> put(@RequestBody Pessoas pessoas) {
		return ResponseEntity.status(HttpStatus.OK).body(repo.save(pessoas));
	}
	
	@DeleteMapping("/{id}")
	public void delete (@PathVariable Long id) {
		repo.deleteById(id);
	}

}
