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

## Outros

#### html-to-jsx

https://transform.tools/html-to-jsx

#### CSS handles

https://vtex.io/docs/recipes/style/using-css-handles-for-store-customization/

https://homolog1--compracerta.myvtex.com/admin/cms/site-editor

https://vtex.io

https://lab.github.com/vtex-trainings/store-framework?overlay=register-box-overlay

https://developers.vtex.com/docs
