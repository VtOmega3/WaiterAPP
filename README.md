<h1 align="center">WaiterAPP</h1>

<div id='Sobre'>

<p align="center">O WaiterApp é uma API direcionada para qualquer local gastronônimo como lanchonetes, bares, restaurantes etc. Projeto desenvolvido junto de uma live no Youtube com o Mateus Silva para um melhor conhecimento de seus alunos.</p> 

## Tabela de conteúdos
  
   * [Sobre](#Sobre)
   * [Instalação](#instalacao)    
   * [Tecnologias](#tecnologias)
   * [Aprendizados](#aprendizados)
   * [Status](#status)
   * [Contatos](#contatos)
  
  
<div id ='instalacao'>
  
## Instalando o projeto e executando
  
Será necessário ter instalado:
  
  - Node.js LTS
  - Expo para executar o emulador de Android ou IOS, podendo também executar em seu próprio telefone
  - MongoDB para caso desejar criar e editar os pedidos e categorias
  
Será necessário que acesse cada página do projeto individualmente e execute o comando `yarn install`.
Para melhor entendimento a pasta FE (Front-End) é a página web, pasta APP (Mobile) e pasta API (Back-End)
  

## Rotas
  
Ao utilizar o projeto deve-se trocar as rotas da aplicação nos arquivos:

<div>
       
\WaiterAPP\app\src\components\ProductModal\index.tsx
\WaiterAPP\app\src\components\Menu\index.tsx
\WaiterAPP\app\src\components\Cart\index.tsx
 
</div>
Lembrando que a porta padrão da aplicação é a `:3001`. Para alterar basta acessar:
`\WaiterAPP\api\src\index.ts`
  
Para rodar a aplicação entrar no terminal na pasta API e a FE e rodar o comando `yarn dev`, após isso
entre na pasta APP ainda no terminal e execute `yarn start`.
  
Caso queira rodar a API fora do do ambiente de desenvolvimento basta executar o comendo `yarn build` e
após isso `yarn start` no terminal na pasta da API
  
<div id='tecnologias'> 
	 
 ## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:
  
 **Front-End**
	
- [Expo](https://expo.io/)
- [React](https://pt-br.reactjs.org/)
- [React Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Axios](https://axios-http.com/)
- [Styled-Components](https://styled-components.com/)
- [Intl](https://pub.dev/packages/intl/)
 
 **Back-End**
  
- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/) 
- [Express](https://expressjs.com/pt-br/) 
- [Mongoose](https://mongoosejs.com/) 
- [Multer](https://www.npmjs.com/package/multer) 
- [Socket.io](https://socket.io/) 
  
   
<div id ='aprendizados'>
	
  ## Aprendizados
  
No projeto aprendi como consumir API através do Axios, a criação de rotas através do `node`, `express` e `multer`,
a utilizar os Hooks do React de `useEffetc` e `useState`, utilizar `interfaces` para garantir que um objeto possua
suas propriedades e metodos e a como utilizar o `Styled-Components` para ajudar na estilização e também na leitura
do código sem precisar criar um arquivo a parte para estilizar.
   
   
<div id='status'>
  
<h4 align="center"> 
	✅  Projeto concluído  ✅
</h4>

  

### Autor
---
    
<a href="https://github.com/VtOmega3">
 <sub><b>Vitor Lobo</b></sub></a> <a href="https://github.com/VtOmega3" title="GitHub"></a>


Feito com ❤️ por Vitor Lobo 👋🏽 Entre em contato!

  
<div id='contatos'>  
  
[![Linkedin Badge](https://img.shields.io/badge/-Vitor-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/vitor-lobo-07197914a/)](https://www.linkedin.com/in/vitor-lobo-07197914a/) 
[![Gmail Badge](https://img.shields.io/badge/-vitorloboomega@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:vitorloboomega@gmail.com)](mailto:vitorloboomega@gmail.com)
