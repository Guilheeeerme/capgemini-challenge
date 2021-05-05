# Desafio Capgemini - 1° Parte: Uma calculadora de alcance de anúncio online.

Fiz a resolução do desafio utilizando TypeScript no Node.js, está toda no arquivo `calculadora.ts`.

## ⚙ Requisitos

- Node.js e Npm ou Yarn (Npm já vem junto com o Node.js)

## 🔥 Instalação e execução

- Faça um clone desse repositório;
- Dentro da pasta, rode `npm install` ou `yarn` no terminal para instalar as dependências;
- Rode `npm run dev` ou `yarn dev` para executar o arquivo `calculadora.ts` e fazer as projeções; </br> </br>

## Testes

- Para rodar os testes, comente as linhas 52,53 e 55 do arquivo `calculadora.ts` e execute `npm run test` ou `yarn test` no terminal; </br> </br>

# Sobre o desafio

## Requisitos funcionais

- Deve ser possível realizar uma projeção aproximada da quantidade máxima de pessoas que visualizarão o mesmo anúncio (considerando o anúncio original + os compartilhamentos);

## Regras de negócio

- A cada 100 pessoas que visualizam o anúncio 12 clicam nele;
- A cada 20 pessoas que clicam no anúncio 3 compartilham nas redes sociais;
- Cada compartilhamento nas redes sociais gera 40 novas visualizações;
- 30 pessoas visualizam o anúncio original (não compartilhado) a cada R$ 1,00 investido;
- O mesmo anúncio é compartilhado no máximo 4 vezes em sequência
