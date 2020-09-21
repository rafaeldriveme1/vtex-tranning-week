# Configurando seu ambiente

Para utilizar o VTEX IO, é necessário fazer algumas configurações no seu computador e a forma com que são feitas depende do sistema operacional. Nas seções abaixo, você encontrará o passo a passo para fazer estas configurações no Windows, Linux ou Mac OS.

## Windows

Para usuários do Windows, os passos são os seguintes:

1. Baixe e instale o Git;
2. Baixe e instale o Node.js;
3. Baixe e instale o Yarn;
4. Abra o CMD, pressionando a tecla Windows e digitando cmd;
5. Rode o comando **yarn global add vtex**

## Debian/Ubuntu

1. Instale o Git através do seguinte comando: sudo apt-get install git-all;
2. Instale o Node.js utilizando o seguinte comando: sudo apt install nodejs;
3. Abra sua linha de comando e rode o comando yarn global add vtex.

## Mac

Para usuários do Mac OS, os passos são os seguintes:

1. Vá até a página do Homebrew;
2. Copie o link fornecido logo abaixo de Install Homebrew;
3. Abre um terminal, digitando Command + Space e digitando terminal;
4. No seu terminal, cole o link do Homebew e tecle Return (Enter);
5. Após a instalação do Homebrew finalizar, rode o comando brew install node;
6. Agora, instale o Yarn rodando brew install yarn;
7. E, finalmente, instale o VTEX Toobelt com yarn global add vtex.

# Logando em uma conta

Depois de concluir a instalação do VTEX Toolbelt, faça o seguinte:

1. Agora, no Terminal, rode vtex login appliancetheme.
2. Você deve ver uma página de login da VTEX sendo aberta no seu navegador. Faça o login com o e-mail fornecido para a assinatura do treinamento.
3. Volte ao CMD/Terminal, execute o comando vtex whoami e verifique se a mensagem de retorno é como essa:

```sh
info: Logged into appliancetheme as {your email} at production workspace master
```

4. Crie um workspace com o comando **vtex use {your workspace name}**. Note que o nome do workspace deve ser único, então use algo como o seu usuário no Github!

```sh
14:39:26.044 - info: You're now using the workspace vtextraining on account appliancetheme!
```


