# Technical Share - Squad 31

## :dart:  API de back-end do Projeto Technical Share do Squad 31!

## ⚠️ Aviso importante

 Esta api se encontra hospedada no heroku e sua documentação pode ser acessada [Clicando aqui - API](https://ts31.herokuapp.com/) <br>
 Foi incluído um usuário em memória para realização de testes para acessar utilize:
* Usuário: root 
* Password: root

## 💡 Nossa proposta

A proposta desta API é fornecer serviços como cadastro de usuários, cadastro de depoimentos, cadastro de skills e habilidades de cada usuário, além de algumas regras de negócio facilitando o trabalho da equipe de Front-end.

## 👨🏽‍💻 Tecnologias utilizadas

- ☕ Java
- 🐘 MySQL e Postgre
- 🍃 Spring Boot

## 💻 Forma como foi construido

- Utilização do spring boot para criação do projeto base
- Utilização de algumas bibliotecas e dependências como JpaRepository, Devtools, SpringDocs, BasicSecurity, apache / commons-codec.
- Criação de camadas para determinadas funções como Model, Repository, Controller, service e Security
- Configuração do arquivo Applicantion.Properties para alternar entre desenvolvimento local e desenvolvimento em produção (Heroku)
