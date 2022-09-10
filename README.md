# Template react-native-expo

<br/>

# 🚀 Começando

### 📋 Pré-requisitos

O que você precisa para usar esse projeto?

- Ambiente react-native
- [Node LTS](https://nodejs.org/en/)

<br/>

# 🔧 Instalação

- Clone o projeto para sua máquina

```bash
$ git clone https://github.com/Samuel-Rodrigues/network-code-leap.git
```

- Instale as dependências

```bash
$ npm install
```

- Instale dependências do IOS

```bash
$ cd ios && pod install && cd ..
```

# 🔧 Rodando projeto local

```bash
#com Android
$ npm run android

#com IOS
npm run ios
```

<br/>

# 🔩 Analise de testes do Typescript e lint

```bash
$ npm run lint
```

<br/>

# 🛠️ Construído com

A arquitetura deste projeto foi pensada para ser escalável e duradoura. Segue uma explicação clara e objetiva de cada biblioteca / método utilizado

### [Expo](https://docs.expo.dev/)

- [SKD atualizada](https://docs.expo.dev/development/compatibility/) com as mais `novas` `features` do `react-native`
- `Acesso` aos projetos `Android` e `IOS` (expo bare workflow)
- Documentação recheada e [APIs](https://docs.expo.dev/versions/latest/) `frequentimente atualizadas`
- Não vi `nenhuma desvantagem` em relação ao `react-native CLI`

### [Material](https://www.react-native-material.com/docs/getting-started)

- Interface bonita da google com vários componentes prontos para serem utilizados

### [Navigation](https://reactnavigation.org/docs/getting-started/)

- Lida com toda parte de `navegação` da aplicação `stack`, `tab` etc

### [Type script](https://reactnative.dev/docs/typescript)

- Ajuda no `ambiente de desenvolvimento`
- Abre novas possibilidades, como por exemplo o `Path mapping`
- Aumenta a `produtividade` no trabalho em `equipe`

### [Reactotron](https://github.com/infinitered/reactotron)

- Ferramenta que auxilia no `debug` e `log` da aplicação, uma pena que ainda não tenha suporte ao novo Redux toolkit.

### [Redux Toolkit](https://redux-toolkit.js.org/)

- O Redux ficou muito conhecido com o amplo uso da `arquitetura Flux`, trazendo uma boa abordagem para `gerenciar estado` da aplicação. Com o passar do tempo, foi observado que o código necessário estava ficando custoso / verboso e aumentava muito a complexidade do projeto, por este motivo surgiu a nova forma de utiliar essa lib - O `Redux toolkit` faz uma `abastração do redux` e diminui bastante os arquivos que precisariamos para usar o redux nativamente.

### [Styled components](https://styled-components.com/)

- Styled components é minha lib favorita no mundo react, com ela consigo `abstrair` todo `css` do componente (particulamente não gosto de css declarativo)
- Outra vantagem é que podemos trabalhar muito bem com `mudanças` do `css a partir das propriedades` dos componentes, nunca foi tão fácil unir condicionais com css.

### [Path mapping](https://reactnative.dev/docs/typescript)

- Os `alias` personalizados nos permite fazer `imports` mais bonitos e mais fácies de utilizar.
  <details><summary>Exemplo</summary>
  <img width="676" alt="image" src="https://user-images.githubusercontent.com/28707053/187322870-83d0f2b5-c6ed-40a7-9829-dafd46971b0a.png">
</details>

### [Snippets](https://code.visualstudio.com/docs/editor/userdefinedsnippets)

- A utilização de snippets é um forma de criamos `modelos` para alguns tipos de `códigos` da aplicação. a utilização por todos membros da equipe vai garantir uma fácil manuntenção e `padronização` de componentes / arquivos.
  <details><summary>Exemplo</summary>
  <img width="838" alt="image" src="https://user-images.githubusercontent.com/28707053/187322906-bda63546-9dd2-441c-bea1-054e45d59ff0.png">
</details>



