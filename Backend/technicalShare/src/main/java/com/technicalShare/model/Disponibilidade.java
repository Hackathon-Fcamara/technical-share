package com.technicalShare.model;


import java.time.LocalDateTime;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "tb_disponibilidade")
public class Disponibilidade {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;	
	private LocalDateTime disponibilidade;

	@ManyToOne
	@JsonIgnoreProperties("disponibilidade")
	private Usuarios usuarios;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public LocalDateTime getDisponibilidade() {
		return disponibilidade;
	}

	public void setDisponibilidade(LocalDateTime disponibilidade) {
		this.disponibilidade = disponibilidade;
	}

	public Usuarios getUsuarios() {
		return usuarios;
	}

	public void setUsuarios(Usuarios usuarios) {
		this.usuarios = usuarios;
	}

}
