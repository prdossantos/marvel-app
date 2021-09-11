[![Codacy Badge](https://app.codacy.com/project/badge/Grade/2fe26fdf59f244beb636b1d82eccb8d0)](https://www.codacy.com/gh/prdossantos/marvel-app/dashboard?utm_source=github.com&utm_medium=referral&utm_content=prdossantos/marvel-app&utm_campaign=Badge_Grade)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/2fe26fdf59f244beb636b1d82eccb8d0)](https://www.codacy.com/gh/prdossantos/marvel-app/dashboard?utm_source=github.com&utm_medium=referral&utm_content=prdossantos/marvel-app&_campaign=Badge_Coverage)

# Marvel APP

Seus personagens favoritos em um só lugar ;)

## Recursos utilizados

1.  ReactJS ( com create-ract-app )
2.  Typescript
3.  Boostrap
4.  Redux ( apenas nos formuários )
5.  Test ( Jest com @testing-library/react )
6.  React Query ( com axios )
7.  GULP ( para gerenciamento do sass )
8.  Doc ( com storybook )

## Como usar localmente

1.  Clone este repositório e execute o comando: `yarn install`.
2.  Execute o comando: `yarn start`.
3.  O arquivo `.env` contém as chaves para conexão com a API, este arquivo foi enviado para o repo, para facilitar os testes.
4.  Por padrão irá iniciar em <http://localhost:3000>.

## Use o docker e seja feliz :)

Se você tiver o docker e docker-compose, basta seguir os passos.

1.  Execute o comando: `docker-compose build`
2.  Execute o comando: `docker-compose up`,  isso pode demorar um pouco dependendo do seu PC.
3.  Aguarge a mensagem: `react-app    |   Local:            http://localhost:3000`
4.  Por padrão irá iniciar em <http://localhost:3000>.

## Estrutura de pastas

O projeto segue a seguinte estrutura.

```js
src/
  - components    # Contém os componentes globais do app
  - pages         # Contém as páginas de acesso
  - schemas       # Contém os esquemas da regra de negócio
  - forms         # Contém os formulários da aplicação
```

\*Os `components` e `forms` forão criados para serem independentes( sem lógica de negócio ), assim podem ser reaproveitados.
Desta forma toda lógica fica contida nas páginas, assim, temos componentes com teste unitário e as páginas com testes de integração( **não foram aplicados neste projeto** ).

## Documentação

1.  Foi feita a documentação dos componentes.
2.  Execute o comando: `yarn run storybook` para visualizar.
3.  Por padrão irá iniciar em <http://localhost:6006>.

## Alterando o tema

1.  Foi utilizado o gulp para manipulação do SCSS.
2.  Execute o comando: `yarn run gulp` para aplicar qualquer alteração no estilo.

## Como rodar os testes

Para rodar os testes utilize o camando abaixo:

Isso irá rodar todos os testes
`yarn test --collect-coverage`

Também será gerado um relatório de cobertura de código na pasta `./coverage`.
Você pode visualizar no navegador acessessando `./coverage/lcov-report/index.html`
