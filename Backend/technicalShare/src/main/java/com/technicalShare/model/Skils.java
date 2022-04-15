package com.technicalShare.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "tb_skils")
public class Skils {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@NotNull
	private String skil;

	@ManyToMany
	@JoinTable(name = "usuarios_skils", joinColumns = @JoinColumn(name = "id_skil", referencedColumnName = "id"), inverseJoinColumns = @JoinColumn(name = "id_pessoa", referencedColumnName = "id"))
	@JsonIgnoreProperties("skils")
	private List<Usuarios> usuarios;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getSkil() {
		return skil;
	}

	public void setSkil(String skil) {
		this.skil = skil;
	}

	public List<Usuarios> getUsuarios() {
		return usuarios;
	}

	public void setUsuarios(List<Usuarios> usuarios) {
		this.usuarios = usuarios;
	}

}
