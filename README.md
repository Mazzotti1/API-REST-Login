## Sobre

Este projeto foi feito mobile first e com intuito de aplicar meus conhecimentos sobre desenvolvimento back-end<br>
node.js e banco de dados

## Utilização
No terminal, clone o projeto: 

```
git clone https://github.com/Mazzotti1/API-REST-Login.git
```
Entre na pasta do projeto: 

```
cd login
```
Instale as dependências: 

```
npm install
```
Execute a aplicação: 

```
npm start
```
Pronto, agora é possivel acessar a aplicação a partir da rota: https://localhost:3000/register ou https://localhost:3000/login

## O projeto é composto por:

- **Controladores:** Encriptações de senha para banco de dados, validações de credenciais e criação de token para login;
- **Modelos:** Modelos de como são aceitos credenciais para registro no banco de dados e login;
- **Validações:** Validação de dados que estão no banco de dados;
- **Rotas:** Separação de rotas para restrição de informações para usuários sem permições de admnistrador
- **Aplicativo:** Para conectar o banco de dados para as rotas de usuário e admin

## Tecnologias utilizadas:

<div>
    <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
    <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" /> 
    <img src="https://img.shields.io/badge/nodejs-339933?style=for-the-badge&logo=nodejs&logoColor=black" /> 
    <img src="https://img.shields.io/badge/mongodb-FFF?style=for-the-badge&logo=mongodb&logoColor=black" /> 
  
          
          
</div>

## Diagrama que explica como funciona a autenticação dos dados <br>

![node-js-express-login-example-mongodb-flow](https://user-images.githubusercontent.com/70278577/209692159-f54e2126-aee2-4a98-be5b-f7441ef4eba1.png)

## Bibliotecas utilizadas

    "@hapi/joi": "^17.1.1",
    "bcryptjs": "^2.4.3",
    "dotenv": "^16.0.3",
    "express": "^4.18.2",
    "jsonwebtoken": "^8.5.1",
    "mongoose": "^6.8.0",
    "nodemon": "^2.0.20",
    "save-dev": "^0.0.1-security"
---

<table>
    <td>
      Feito por <a href="https://github.com/Mazzotti1">Gabriel Mazzotti</a>
    </td>
</table>

