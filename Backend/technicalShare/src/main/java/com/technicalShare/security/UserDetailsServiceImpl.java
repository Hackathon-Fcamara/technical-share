package com.technicalShare.security;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.technicalShare.model.Usuarios;
import com.technicalShare.repository.UsuarioRepository;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

	@Autowired
	private UsuarioRepository usuarioRepository;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Optional<Usuarios> usuario = usuarioRepository.findByUsuario(username);

		usuario.orElseThrow(() -> new UsernameNotFoundException(username + " Este usuario não foi encontrado"));
		return usuario.map(UserDetailsImpl::new).get();
	}

}
