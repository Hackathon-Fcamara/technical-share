package com.technicalShare.service;

import java.nio.charset.Charset;
import java.util.Optional;

import org.apache.tomcat.util.codec.binary.Base64;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.technicalShare.model.UsuarioLogin;
import com.technicalShare.model.Usuarios;
import com.technicalShare.repository.UsuarioRepository;

@Service
public class UsuarioService {

	@Autowired
	private UsuarioRepository repo;

	public Optional<Usuarios> cadastrarUsuario(Usuarios usuario) {

		if (repo.findByUsuario(usuario.getUsuario()).isPresent()) {
			return Optional.empty();
		}

		usuario.setSenha(criptografarSenha(usuario.getSenha()));

		return Optional.of(repo.save(usuario));
	}

	private boolean compararSenhas(String senhaDigitada, String senhaDoBanco) {
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

		return encoder.matches(senhaDigitada, senhaDoBanco);
	}

	private String criptografarSenha(String senha) {
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

		return encoder.encode(senha);
	}

	private String geradorBasicToken(String usuario, String senha) {
		String token = usuario + ":" + senha;
		byte[] tokenBase64 = Base64.encodeBase64(token.getBytes(Charset.forName("US-ASCII")));

		return "Basic " + new String(tokenBase64);
	}

	public Optional<UsuarioLogin> logar(Optional<UsuarioLogin> user) {

		Optional<Usuarios> usuario = repo.findByUsuario(user.get().getUsuario());

		if (usuario.isPresent()) {
			if (compararSenhas(user.get().getSenha(), usuario.get().getSenha())) {
				user.get().setId(usuario.get().getId());
				user.get().setNome(usuario.get().getNome());
				user.get().setSobreNome(usuario.get().getSobreNome());
				user.get().setCargo(usuario.get().getCargo());
				user.get().setNivel(usuario.get().getNivel());
				user.get().setDescricao(usuario.get().getDescricao());
				user.get().setPortifolio(usuario.get().getPortifolio());
				user.get().setLinkedin(usuario.get().getLinkedin());
				user.get().setToken(geradorBasicToken(user.get().getUsuario(), user.get().getSenha()));
				user.get().setSenha(usuario.get().getSenha());

				return user;
			}
		}
		return Optional.empty();
	}

	public Optional<Usuarios> atualizarUsuario(Usuarios usuario) {
		if (repo.findById(usuario.getId()).isPresent()) {
			Optional<Usuarios> buscarUsuario = repo.findByUsuario(usuario.getUsuario());
			if (buscarUsuario.isPresent()) {
				if (buscarUsuario.get().getId() != usuario.getId())
					throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Usuario já existe!", null);
			}

			usuario.setSenha(criptografarSenha(usuario.getSenha()));
			return Optional.of(repo.save(usuario));

		}
		throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Usuario não encontrado", null);
	}
}