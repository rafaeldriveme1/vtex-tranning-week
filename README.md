# VTEX IO

#### Instalando Toolbelt

yarn
```sh
yarn global add vtex
```

npm
```sh
npm i -g vtex
```

#### Para confirmar se a instalação do Toolbelt ocorreu como esperado.

```sh
vtex-v
```

## Login

#### Fazendo login

```sh
vtex login contaVTEX
```

#### Para confirmar em qual conta e workspace você está

```sh
vtex whoami
```

## Workspaces

Os workspaces nada mais são do que o que o homônimo sugere. No VTEX IO, as contas têm três tipos principais de workspace, a saber master, produção e desenvolvimento.

Ambientes de trabalho protegidos que representam uma cópia bem próxima do está montado em produção, possibilitando a evolução de temas sem que nada na loja seja afetado. 

*** Há três diferentes tipos de workspaces: ***

Workspace de desenvolvimento: um ambiente onde é possível linkar, desenvolver, instalar e publicar aplicações. É um workspace onde você tem mais liberdade nas configurações que irá fazer. Não lida com o tráfego de clientes de produção, não pode ser promovido a master e nem pode ser utilizado para testes A/B;

Workspace de produção: lida com tráfego de lojas em produção, pode ser utilizado para testes A/B e pode ser promovido ao workspace master. Não é permitido linkar aplicações;

Workspace Master: um workspace de produção único em que o conteúdo dele reflete no que é apresentado ao usuário final da loja.

#### Acessando seu workspace

Depois de criar o workspace, você poderá acessá-lo neste link: https://{workspace}-{conta}.myvtex.com, substituindo{workspace}e{conta}com o nome do workspace e conta criados anteriormente. Por exemplo, https://devworkspace-appliancetheme.myvtex.com

#### Ver todos os workspaces

```sh
vtex workspace -ls
```

#### Problemas de conflito porque fez outros treinamentos, tente rodar o seguinte comando

```sh
vtex workspace reset
```

#### Criando um workspace de desenvolvimento

https://devworkspace--appliancetheme.myvtex.com

```sh
vtex use nome-do-workspace
```

#### Criando um workspace de produção

```sh
vtex use {WorkspaceName} --production
```

#### Boilerplate

Para começar a tirar o melhor proveito deste curso, começaremos com um repositório de tema de loja básico, que você pode clonar neste link. Neste tema, existem alguns arquivos iniciais necessários e você pode seguir as instruções em seu README.md para cloná-lo corretamente.

https://github.com/vtex-apps/minimum-boilerplate-theme

## Link

#### Rodar o projeto

```sh
vtex link --verbose
```

#### Abrir no browser

```sh
vtex browse
```

#### Deslinkar

```sh
vtex unlink
```

## Apps

https://vtex.io/docs/components/all

#### Ver apps instalados

```sh
vtex ls
vtex list
```

#### Instalar app

```sh
vtex install compracerta.store-theme
```

#### Help

```sh
vtex help
```

#### inpecionar elementos

```sh
https://rafaelcr1--appliancetheme.myvtex.com/?__inspect
```

## Publicando uma aplicação no VTEX IO

#### Introdução

Após ser apresentado ao conceitos dos diferentes tipos de workspaces, vamos então ensinar como publicar uma aplicação no VTEX IO. Para realizar operações como esta, são utilizados comandos no VTEX Toolbelt, nossa CLI que dá acesso aos recursos da plataforma.

#### Usando o VTEX Toolbelt para publicar uma app

Para publicar uma app no VTEX IO, é necessário utilizar o seguinte comando do VTEX Toolbelt, dentro da pasta da aplicação:

```sh
vtex publish
```

Com uma aplicação de um tema qualquer, vá ao arquivo manifest.json e mude o nome da app para o seguinte formato:

```sh
trainingweek-{{devname}}
```

Onde devname é um nome de sua escolha, que te identifique. Além disso, é necessário mudar o vendor da aplicação, que precisará ser appliancetheme.

Abaixo, você pode encontrar um exemplo de parte do manifest.json feitas as mudanças citadas acima:

```sh
{
    "vendor": "appliancetheme",
    "name": "trainingweek-fabiana",
    ...
}
```

Ao fim desses passos, vamos efetivamente publicar a app! Dentro do diretório da sua app, rode o comando mencionado no início deste passo. Dentro da pasta da aplicação, rode o comando que foi citado anteriormente, no início deste passo. Ao rodar o comando, você precisará confirmar a ação

Após a confirmação, o build da app começará e, após ser finalizado, você deverá ver uma mensagem informando que a publicação foi bem sucedido

Pronto! Você acabou de fazer sua primeira publicação!

## Instalando uma app em uma conta VTEX

Uma vez que você publica uma app, é possível instalá-la em uma conta VTEX. Em geral, depois de instalar, há um robô chamado House Keeper, que se assegura de que todas as contas VTEX se mantenham com as apps atualizadas com a versão mais recente. Versões minors e patches que são lançadas, são automaticamente atualizadas nas contas.

Porém, para instalar uma app pela primeira vez ou uma nova versão major, é necessário que seja feito manualmente. Neste passo, você aprenderá como fazer isso.

#### Instalando a app

```sh
vtex install {vendor}.{appName}@{version}
```

#### Já no caso de ter projeto da app, você precisar ir na pasta do projeto e rodar o seguinte comando:

```sh
vtex install
```

#### Listar as apps que estão atualmente instaladas em uma conta

```sh
vtex ls
```

## Outros

#### html-to-jsx

https://transform.tools/html-to-jsx

#### CSS handles

https://vtex.io/docs/recipes/style/using-css-handles-for-store-customization/

https://homolog1--compracerta.myvtex.com/admin/cms/site-editor

https://vtex.io

https://lab.github.com/vtex-trainings/store-framework?overlay=register-box-overlay

https://developers.vtex.com/docs

https://www.notion.so/Blocos-b-sicos-Store-Framework-92ab69f4193c431888a3df243e7c53c2

https://developers.vtex.com/docs/vtex-condition-layout

https://tachyons.io/
