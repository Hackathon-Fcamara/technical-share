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
@Table(name = "tb_skills")
public class Skills {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@NotNull
	private String skill;

	@ManyToMany
	@JoinTable(name = "usuarios_skills", joinColumns = @JoinColumn(name = "id_skill", referencedColumnName = "id"), inverseJoinColumns = @JoinColumn(name = "id_pessoa", referencedColumnName = "id"))
	@JsonIgnoreProperties("skills")
	private List<Usuarios> usuarios;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getSkill() {
		return skill;
	}

	public void setSkill(String skill) {
		this.skill = skill;
	}

	public List<Usuarios> getUsuarios() {
		return usuarios;
	}

	public void setUsuarios(List<Usuarios> usuarios) {
		this.usuarios = usuarios;
	}

	

}
