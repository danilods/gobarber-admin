<h1 align="center">
  <img src=".github/logo.svg" alt="GoBarberAdmin" width="250px">
</h1>

<h3 align="center">
  Backend Admin Template
</h3>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/danilods/gobarber-admin?color=%FF9000">

  <a href="https://www.linkedin.com/in/danilo-de-sousa-97594b187/">
    <img alt="Made by" src="https://img.shields.io/badge/made%20by">
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

## 💰 Sobre o projeto

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


## 💻 Iniciando


### Requisitos

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/)


**Clone o projeto e acesse o diretório /gobarber-admin, conforme o comando abaixo **

```bash
$ git clone https://github.com/danilods/gobarber-admin.git && cd gobarber-admin
```
**Se você for utilizar autenticação com JWT, siga os passos abaixo. Caso opte por utilizar autenticação via Firebase, pule esta estapa e vá para o item "autenticação via Firebase"**

**Siga os passos a seguir**

### Backend para simulação de autenticação JWT

**O foco do projeto é no backoffice da aplicação, de modo que sua estrutura visual possa ser evoluída. Portanto, o backend foi substituído por um simulador de autenticação com JWT e uma API simulada, utilizando json_server.**

## **Abra uma nova janela do terminal e acesse o diretório gobarber-admin/fake-backend-api**

```bash
# Starting from the project root folder, go to backend folder
$ cd ../gobarber-admin/fake-backend-api

# Inicie o json_server
$ yarn start or npm start

# Acompanhe a inicialização do servidor.

# Você poderá acessar os dados para autenticação no arquivo users.json
# O arquivo databse.json possibilita você controlar os dados a serem utilizados em um CRUD


```

### Autenticação via Firebase 
### Em caso de dúvidas quanto à criação de uma base de dados no Firebase, consulte ...


**Abra o arquivo firebaseAPI.ts, situado no diretório src/services/firebaseAPI e preencha os campos de configuração com os dados fornecidos pelo firebase, ao criar sua base de dados.**

```bash
// Initialize Firebase
import * as firebase from 'firebase/app';
import 'firebase/auth';

  const app = firebase.initializeApp({
  apiKey: "API_KEY",
    authDomain: "XXXXXX.firebaseapp.com",
    databaseURL: "https://xxxxxx.firebaseio.com",
    projectId: "PROJECT_ID",
    storageBucket: "xxxxxx.appspot.com",
    messagingSenderId: "MESSAGE_ID",

});

export default app;

### A seguir, vá no arquivo src/routes/Route.tsx e altere o hook de autenticação da seguinte forma:

Substitua:

const {user} = useAuth();

por

const {userFire} = useAuth();

### Pronto! A partir de agora, a aplicação fará autenticação pelo Firebase.

```

### Aplicação

Obs.: Antes de continuar, verifique se a API está incializada.

```bash
# Acesse o diretório da aplicação
$ cd gobarber-admin

# Instale as dependências
$ yarn

# Rode a aplicação
$ yarn start
```

### Funcionalidades e componentes previstos para serem implementados:

1. Skeleton - LoadContent;
2. Pagination Component;
3. Modal Component;
4. Chart Component;
5. Autenticação via GMAIL;
6. Autenticação via Facebook;
...

## 🤔 Como contribuir?

**Faça um fork para este repositório**

```bash
# Fork using GitHub official command line
# Se você não tem GitHub CLI, use o website para isto.

$ gh repo fork EliasGcf/gofinances
```

**Siga os passos abaixo**

```bash
# Clone seu fork
$ git clone your-fork-url && cd gofinances

# Criar branch com sua feature
$ git checkout -b my-feature

# Faça um commit com suas alterações
$ git commit -m 'feat: My new feature'

# Envie seu código para o repo remoto
$ git push origin my-feature
```

Depois que seu pull request for mesclado (merged), você poderá excluir sua branch.

## 📝 Licença

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Desenvolvido por 💜 by Danilo de Sousa 👋 [Veja meu linkedin](https://www.linkedin.com/in/danilo-de-sousa-97594b187/)
