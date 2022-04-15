import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { FormInput } from "../FormInput";
import { FormSelect } from "../FormSelect";
import { FormSkillSelect } from "../FormSkillSelect";
import { FormTextarea } from "../FormTextarea";
import { api } from "../../services/api";
import { TagList } from "../TagList";

const {
  signUp,
  signUp__container,
  signUpForm,
  signUpForm__wrapper,
  signUpForm__textDivider,
  signUpForm__textNote,
  signUpForm__btn,
  signUp__message,
} = styles;

export const SignUp = ({ handleOpenNewTaskModal }) => {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [usuario, setUsuario] = useState("");
  const [cargo, setCargo] = useState("");
  const [nivel, setNivel] = useState("");
  const [descricao, setDescricao] = useState("");
  const [portifolio, setPortifolio] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [senha, setSenha] = useState("");
  const [skills, setSkills] = useState([]);

  const [ability, setAbility] = useState([]);

  function removeSkill(index) {
    const newSkills = skills.filter((data, idx) => idx !== index);

    setSkills(newSkills);
  }

  useEffect(() => {
    api.get("skills/all").then(({ data }) => {
      setAbility(data);
    });
  }, []);

  async function submit(e) {
    e.preventDefault();

    const data = {
      nome: `${nome} ${sobrenome}`,
      usuario: usuario,
      cargo: cargo,
      nivel: nivel,
      descricao: descricao,
      portifolio: portifolio,
      linkedin: linkedin,
      senha: senha,
      skills: skills,
    };

    const response = await api.post("usuarios/cadastrar", data);

    if (response.status === 200) {
      handleOpenNewTaskModal();
    } else {
      console.log(response.error);
    }
  }

  return (
    <section className={signUp}>
      <div className={signUp__container}>
        <h2 className="globalRegister__title">Cadastre-se agora</h2>
        <p className={`${signUp__message} globalRegister__message`}>
          E conheça o melhor caminho para o seu desenvolvimento profissional
        </p>
        <form onSubmit={submit} className={signUpForm}>
          <div className={signUpForm__wrapper}>
            <FormInput
              labelText="Nome*"
              inputType="text"
              idVal="firstName"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
            <FormInput
              labelText="Sobrenome*"
              inputType="text"
              idVal="lastName"
              value={sobrenome}
              onChange={(e) => setSobrenome(e.target.value)}
            />
          </div>
          <FormInput
            labelText="E-mail*"
            inputType="email"
            idVal="email"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />
          <FormInput
            labelText="Senha*"
            inputType="password"
            idVal="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <FormInput
            labelText="Confirmar senha*"
            inputType="password"
            idVal="password"
          />
          <p className={signUpForm__textDivider}>Informações do perfil</p>
          <div className={signUpForm__wrapper}>
            <FormSelect
              labelText="Cargo"
              idVal="role"
              optList={["Front-end", "Back-end", "UX/UI"]}
              value={cargo}
              onChange={(e) => setCargo(e.target.value)}
            />
            <FormSelect
              labelText="Nível"
              idVal="level"
              optList={["Júnior", "Pleno", "Sênior"]}
              value={nivel}
              onChange={(e) => setNivel(e.target.value)}
            />
          </div>
          <FormSkillSelect
            labelText="Habilidade"
            idVal="skill"
            optList={ability}
            onChange={(newSkill) => {
              const existeSkill = skills.some(
                (skill) => skill.skill === newSkill.skill
              );

              if (!existeSkill) {
                setSkills([...skills, newSkill]);
              }
            }}
          />
          <TagList tags={skills} removeSkill={removeSkill} />
          <p className={signUpForm__textNote}>
            Cite pelo menos uma habilidade que você se sente confortável em
            mentorar.
          </p>
          <FormTextarea
            labelText="Sobre"
            idVal="about"
            optList={[]}
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />
          <FormInput
            labelText="LinkedIn"
            inputType="text"
            idVal="linkedin"
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
          />
          <FormInput
            labelText="Portfolio"
            inputType="text"
            idVal="portfolio"
            value={portifolio}
            onChange={(e) => setPortifolio(e.target.value)}
          />
          <FormInput labelText="Rede Social" inputType="text" idVal="social" />
          <button
            type="submit"
            className={`${signUpForm__btn} globalBtn globalBtn--primary`}
          >
            Cadastrar
          </button>
        </form>
      </div>
    </section>
  );
};
