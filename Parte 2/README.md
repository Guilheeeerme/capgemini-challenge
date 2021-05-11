# Desafio Capgemini - 2° Parte: Cadastro de anúncios e relatórios.

## ⚙ Requisitos

- Node.js e Npm ou Yarn (Npm já vem junto com o Node.js)

## 🔥 Instalação e execução

- Faça um clone desse repositório;
- Dentro da **Pasta 2**, execute `npm install` ou `yarn` no terminal para instalar as dependências;
- Dentro da **Pasta 2**, execute `npm run typeorm migration:run` ou `yarn typeorm migration:run` para criar o banco de dados Sqlite em memória, para persistência de dados;
- Execute `npm run dev` ou `yarn dev` para iniciar o app; </br> </br>
- Acesse `http://localhost:3333/api-docs/` para criar os anúncios e visualizar os relatórios.
- Por último execute `npm run test` ou `yarn test` para rodar o teste unitário Calculator.spec.ts

Obs: Nas rotas do tipo **GET**, é necessário passar query params para filtrar os relatórios, os parametros devem ser passados como string da mesma forma como foram passados na rota do tipo **POST** para criar um anúncio.

</br>

![api](https://user-images.githubusercontent.com/61475431/117725583-b9415780-b1bb-11eb-882e-6417722d8947.PNG)
