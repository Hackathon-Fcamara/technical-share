package com.technicalShare.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.technicalShare.model.Usuarios;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuarios, Long> {
	
	public Optional<Usuarios> findByUsuario (String usuario);
	public Optional<Usuarios> findAllByNomeContainingIgnoreCase (String nome);

}
