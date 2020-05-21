<h1 align="center">
  <img src=".github/logo.svg" alt="GoBarberAdmin" width="250px">
</h1>

<h3 align="center">
  Backend Admin Template
</h3>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/danilods/gobarber-admin?color=%235636D3">

  <a href="https://www.linkedin.com/in/eliasgcf/">
    <img alt="Made by" src="https://img.shields.io/badge/made%20by-Danilods">
  </a>
  
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/danilods/gobarber-admin?color=%235636D3">
  
  <a href="https://github.com/danilods/gobarber-admin/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/danilods/gobarber-admin?color=%235636D3">
  </a>
  
  <a href="https://github.com/danilods/gobarber-admin/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/danilods/gobarber-admin?color=%235636D3">
  </a>
  
  <img alt="GitHub" src="https://img.shields.io/github/license/danilods/gobarber-admin?color=%235636D3">
</p>

<p align="center">
  <a href="#-about-the-project">Sobre o projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-getting-started">Iniciando o projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-how-to-contribute">Como contribuir</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-license">Licença</a>
</p>



![Alt text](/public/mockup@2x.png?raw=true "gobarber-admin")

## 💰 About the project

  O GoBarber Admin é um projeto desenvolvido a partir da participação no Bootcamp GoStack da #RocketSeat. Durante o curso, a metodologia de ensino é voltada diretamente para atividades práticas, de modo a refletir, ao máximo, o ambiente real encontrado no mercado de trabalho. A partir da ideia da aplicação GoBarber ensinada no BootCamp, houve a iniciativa particular de praticar os conceitos ministrados no curso; sendo assim, essa atividade resultou na criação de um ambiente administrativo, abstraindo a simulação da gestão da aplicação. 


## 🚀 Tecnologias

- [Node.js](https://nodejs.org/)
- [ReactJS](https://reactjs.org/)
- [React Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [TypeORM](https://typeorm.io/#/)
- [Express](https://expressjs.com/pt-br/)
- [React Router DOM](https://reacttraining.com/react-router/)
- [React Navigation](https://reactnavigation.org/)
- [React Icons](https://react-icons.netlify.com/#/)
- [Styled Components](https://styled-components.com/)
- [Axios](https://github.com/axios/axios)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [EditorConfig](https://editorconfig.org/)


## 💻 Getting started


### Requirements

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/)


**Clone o projeto e acesse o diretório /gobarber-admin, conforme o comando abaixo **

```bash
$ git clone https://github.com/danilods/gobarber-admin.git && cd gobarber-admin
```


**Siga os passos a seguir**

### Backend para simulação de autenticação JWT

### O foco do projeto é no backoffice da aplicação, de modo que sua estrutura visual possa ser evoluída. Portanto, o backend foi substituído por um simulador de autenticação e API, utilizando json_server com JWT.

### Abra uma nova janela do terminal e acesse o diretório gobarber-admin/fake-backend-api

```bash
# Starting from the project root folder, go to backend folder
$ cd ../gobarber-admin/fake-backend-api

# Inicie o json_server
$ yarn start or npm start

# Você poderá acessar os dados para autenticação no arquivo users.json
# O arquivo databse.json possibilita você controlar os dados a serem utilizados em um CRUD

```bash
# Starting from the project root folder, go to backend folder
$ cd server

# Install the dependencies
$ yarn

# Create the instance of postgreSQL using docker
$ docker run --name gofinances-postgres -e POSTGRES_USER=docker -e POSTGRES_PASSWORD=docker -e POSTGRES_DB=gofinances -p 5432:5432 -d postgres

# Make sure the keys in 'ormconfig.json' to connect with your database
# are set up correctly.

# Once the services are running, run the migrations
$ yarn typeorm migration:run

# To finish, run the api service
$ yarn dev:server

# Well done, project is started!
```

### Web

_Obs.: Before to continue, be sure to have the API running_

```bash
# Starting from the project root folder, go to frontend folder
$ cd web

# Install the dependencies
$ yarn

# Be sure the file 'src/services/api.ts' have the IP to your API

# Start the client
$ yarn start
```

### Mobile

<!-- _ps: Antes de executar, lembre-se de iniciar o backend deste projeto_ -->

<p align="center">
 Yet in development!
 <br />
 <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt="loading">
</p>

## 🤔 How to contribute

**Make a fork of this repository**

```bash
# Fork using GitHub official command line
# If you don't have the GitHub CLI, use the web site to do that.

$ gh repo fork EliasGcf/gofinances
```

**Follow the steps below**

```bash
# Clone your fork
$ git clone your-fork-url && cd gofinances

# Create a branch with your feature
$ git checkout -b my-feature

# Make the commit with your changes
$ git commit -m 'feat: My new feature'

# Send the code to your remote branch
$ git push origin my-feature
```

After your pull request is merged, you can delete your branch

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with 💜 by Elias Gabriel 👋 [See my linkedin](https://www.linkedin.com/in/eliasgcf/)
