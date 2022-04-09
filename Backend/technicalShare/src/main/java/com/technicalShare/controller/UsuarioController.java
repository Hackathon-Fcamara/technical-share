package com.technicalShare.controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.technicalShare.model.UsuarioLogin;
import com.technicalShare.model.Usuarios;
import com.technicalShare.repository.UsuarioRepository;
import com.technicalShare.service.UsuarioService;

@RestController
@RequestMapping("/usuarios")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class UsuarioController {

	@Autowired
	private UsuarioRepository repo;

	@Autowired
	private UsuarioService service;

	@GetMapping("/all")
	public ResponseEntity<List<Usuarios>> getAll() {
		return ResponseEntity.ok(repo.findAll());
	}

	@GetMapping("/{id}")
	public ResponseEntity<Usuarios> getById(@PathVariable Long id) {
		return repo.findById(id).map(resp -> ResponseEntity.ok(resp)).orElse(ResponseEntity.notFound().build());
	}

	@GetMapping("/nome/{nome}")
	public ResponseEntity<Optional<Usuarios>> getByName(@PathVariable String nome) {
		return ResponseEntity.ok(repo.findAllByNomeContainingIgnoreCase(nome));
	}

	@PostMapping("/cadastrar")
	public ResponseEntity<Usuarios> cadastrar(@RequestBody Usuarios usuario) {
		return service.cadastrarUsuario(usuario).map(resp -> ResponseEntity.ok(resp))
				.orElse(ResponseEntity.status(HttpStatus.BAD_REQUEST).build());

	}

	@PostMapping("/logar")
	public ResponseEntity<UsuarioLogin> Autentication(@Valid @RequestBody Optional<UsuarioLogin> user) {
		return service.logar(user).map(resp -> ResponseEntity.ok(resp))
				.orElse(ResponseEntity.status(HttpStatus.UNAUTHORIZED).build());
	}

	@PutMapping("/atualizar")
	public ResponseEntity<Usuarios> atualizarUsuario(@Valid @RequestBody Usuarios usuario) {
		return service.atualizarUsuario(usuario).map(resp -> ResponseEntity.status(HttpStatus.OK).body(resp))
				.orElse(ResponseEntity.status(HttpStatus.BAD_REQUEST).build());
	}

}
