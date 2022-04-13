package com.technicalShare.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import io.swagger.v3.oas.annotations.media.Schema;

@Entity
@Table(name = "tb_usuarios")
public class Usuarios {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@NotNull
	private String nome;
	@Schema(example = "email@email.com.br")
	@NotNull(message = "O atributo Usuario é Obrigatorio!")
	@Email(message = "O atributo usuario deve ser um email valido!")
	private String usuario;
	@NotNull
	private String cargo;
	@NotNull
	private String nivel;
	@Size(min = 5, max = 500)
	private String descricao;
	private String portifolio;
	private String linkedin;
	@NotNull
	@Size(min = 4, max = 100)
	private String senha;

	@ManyToMany
	@JoinTable(name = "usuarios_skils", joinColumns = @JoinColumn(name = "id_pessoa", referencedColumnName = "id"), inverseJoinColumns = @JoinColumn(name = "id_skil", referencedColumnName = "id"))
	@JsonIgnoreProperties("usuarios")
	private List<Skils> skils;

	@OneToMany(mappedBy = "usuarios", cascade = CascadeType.REMOVE)
	@JsonIgnoreProperties("usuarios")
	private List<Depoimentos> depoimentos;

	@OneToMany(mappedBy = "usuarios", cascade = CascadeType.REMOVE)
	@JsonIgnoreProperties("usuarios")
	private List<Agenda> agenda;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getUsuario() {
		return usuario;
	}

	public void setUsuario(String usuario) {
		this.usuario = usuario;
	}

	public String getCargo() {
		return cargo;
	}

	public void setCargo(String cargo) {
		this.cargo = cargo;
	}

	public String getNivel() {
		return nivel;
	}

	public void setNivel(String nivel) {
		this.nivel = nivel;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public String getPortifolio() {
		return portifolio;
	}

	public void setPortifolio(String portifolio) {
		this.portifolio = portifolio;
	}

	public String getLinkedin() {
		return linkedin;
	}

	public void setLinkedin(String linkedin) {
		this.linkedin = linkedin;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

	public List<Skils> getSkils() {
		return skils;
	}

	public void setSkils(List<Skils> skils) {
		this.skils = skils;
	}

	public List<Depoimentos> getDepoimentos() {
		return depoimentos;
	}

	public void setDepoimentos(List<Depoimentos> depoimentos) {
		this.depoimentos = depoimentos;
	}

	public List<Agenda> getAgenda() {
		return agenda;
	}

	public void setAgenda(List<Agenda> agenda) {
		this.agenda = agenda;
	}

}
