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

#### Fazendo logout

```sh
vtex logout
```

#### Para confirmar em qual conta e workspace você está

```sh
vtex whoami
```

#### Token pessoal

vtex local token

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

#### Teste de performace

Google Page Speed

https://appliancetheme.myvtex.com/?workspace=rafaelcr1

Lighthouse Scoring Calculator

## Boilerplate

Para começar a tirar o melhor proveito deste curso, começaremos com um repositório de tema de loja básico, que você pode clonar neste link. Neste tema, existem alguns arquivos iniciais necessários e você pode seguir as instruções em seu README.md para cloná-lo corretamente.

https://github.com/vtex-apps/minimum-boilerplate-theme

#### Demostore-theme

https://github.com/vtex-apps/demostore-theme

#### Store Block course template

https://github.com/vtex-trainings/store-block-template

#### Store theme

https://github.com/vtex-apps/store-theme

#### React App Template

https://github.com/vtex-apps/react-app-template

#### Service example

https://github.com/vtex-apps/service-example

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

#### Agora, para evitar conflitos, vá ao terminal e unlinke qualquer tema ou aplicação que você tenha linkado no seu workspace:

```sh
vtex unlink --all
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

## Site Editor

O Site Editor é um painel que se encontra dentro da página de admin de uma loja que permite você alterar propriedades dos blocos referentes à frente de loja. A página de admin de sua loja pode ser acessada adicionando /admin na url. As mudanças que são feitas aqui são automaticamente refletidas na loja e todos os blocos que estão na frente de loja podem ser alterados através deste painel. Por exemplo, é possível alterar o conteúdo de um rich text, propriedades de uma prateleira, como as coleções sendo mostradas, entre outras coisas.

## Imagens

#### Pontos de otimização

No Store Framework, existem basicamente dois pontos em que as imagens podem ser otimizadas:

** product-image: **  é a imagem de produto que é mostrada em sua página (pdp);
** product-summary-image: **  é a imagem de produto que é exibida em prateleiras e resultados de busca;
** image: **  são imagens comuns, usadas para banners, carrosséis e infocards

#### Compressor

https://squoosh.app/

#### Performace

Alguns links para vcs aprenderem mais sobre performance! Como o Tiago disse, essa é uma área muito vasta, então vale a pena ler sobre porque tem muita coisa legal! :D

- [https://web.dev/interactive/](https://web.dev/interactive/)
- [https://web.dev/mainthread-work-breakdown/](https://web.dev/mainthread-work-breakdown/)
- [https://web.dev/bootup-time/](https://web.dev/bootup-time/)
- [https://web.dev/lighthouse-total-blocking-time/](https://web.dev/lighthouse-total-blocking-time/)
- [https://web.dev/long-tasks-devtools/#what-is-causing-my-long-tasks](https://web.dev/long-tasks-devtools/#what-is-causing-my-long-tasks)
- [https://web.dev/cls/](https://web.dev/cls/)
- [https://web.dev/optimize-cls/](https://web.dev/optimize-cls/)
- [https://web.dev/vitals/](https://web.dev/vitals/)
- [https://www.youtube.com/watch?v=zIJuY-JCjqw&feature=youtu.be&ab_channel=estellevw](https://www.youtube.com/watch?v=zIJuY-JCjqw&feature=youtu.be&ab_channel=estellevw)
- [https://www.youtube.com/watch?v=AQqFZ5t8uNc&ab_channel=GoogleChromeDevelopers](https://www.youtube.com/watch?v=AQqFZ5t8uNc&ab_channel=GoogleChromeDevelopers)

## Serviços

## App inicial

https://github.com/vtex-apps/events-example

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

https://squoosh.app/

https://developers.vtex.com/docs/vtex-io-documentation-edition-app

## Inspirações de App

#### Boilerplate para começar uma app custom

vtex-appx/react-app-template

#### App com testes

vtex-appx/disclosure-layout

#### App que cumpre uma função

vtex-appx/product-specifications

#### App que usa o IOMessageWithMarkers

vtex-appx/product-price

#### App Store

https://apps.vtex.com/

#### Estilos custom

https://developers.vtex.com/docs/vtex-io-documentation-5-customizingstyles

#### Para testar sua loja em outros idiomas

para testar sua loja em outros idiomas basta adicionar a query string 

/?cultureInfo=pt-br ou /?cultureInfo=en-ar na UR

## Admin framework

#### react app template

```sh
git clone https://github.com/vtex-apps/react-app-template admin-course
```

#### Paletas de corretamente

Happy Hues

#### Mostrar as alterações feitas pelo Store Editor

?UserDisableLand?

#### Aqui estão os materiais das nossas palestras:

@VTEX - Gris - IO Overview: https://docs.google.com/presentation/d/1uMQPytdBBM_AX0lRy5Y-ODqdbF1XfKoowaP1a_GXsmY/edit?usp=sharing

Athos - VTEX IO Infra: https://drive.google.com/file/d/1QnpJdaxwrRX9ZFB_MrQMk_IfQN8YYjc7/view?usp=sharing

@gimenes - Webframework:  https://docs.google.com/presentation/d/129HHfjcwQlGWI0coqmRy4EHeZu92aV2LJVl_9LdWOQI/edit?usp=sharing

@VTEX - Breno - Store Framework: https://docs.google.com/presentation/d/1pnPTV9pXRoIwufZBSofQirhHEcy_ttvM1b2DxCvMbyg/edit?usp=sharing

@VTEX - Victoria UX/UI: https://docs.google.com/presentation/d/1Kvjq0bs1LwLINF7v7_NoXoWLgqLw96PEQeCV6puTvV8/edit?userstoinvite=davi.costa%40vtex.com.br&ts=5f6b5a68&actionButton=1#slide=id.g8d32e1c056_0_78

#### Apresentação com links e referências: 

https://docs.google.com/presentation/d/1Kvjq0bs1LwLINF7v7_NoXoWLgqLw96PEQeCV6puTvV8/edit?usp=sharing

Checklist com os tópicos da apresentação, para vocês copiarem como template no Notion: https://www.notion.so/Experi-ncia-do-usu-rio-interface-e-estilo-e-o-que-voc-pode-fazer-com-isso-271a36f3aac648ddbe333ffdb582231d
Figma com anotações e fluxo: https://www.figma.com/community/file/890663077257791572

Boa sorte, galera

#### docs-ui

https://github.com/vtex-apps/docs-ui/blob/master/react/typings/vtex.styleguide.d.ts

#### IOClients

https://github.com/vtex/node-vtex-api/blob/ccf4d8f8d3208007c4bfd558baf979df8d825af8/src/clients/IOClients.ts

#### Curl

curl --location --request GET "https://api.vtex.com/api/dataentities/course_backend_product_list/search?_fields=slug,count&_schema=v1&an=appliancetheme" \
--header "Content-Type: application/json"

## Query Params para ajudar no desenvolvimento

#### Remove cache 

?__disableSSR=true

#### Exibe classes 

?__inspect

#### Encontrando as APIs do VTEX Commerce

https://developers.vtex.com/reference/get-to-know-vtex-apis

## Conteudo do token

https://jwt.io

## Endpoints

https://{workspace}--{account}.myvtex.com/_v/status/:code