# Arena-Jovem
              - A Arena jovem é um espaço criado para conectar todas as pessoas
              - que querem fazer parte do Reino de Deus. Onde todas as crenças são
              - respeitadas, e Cristo se torna o centro. Um lugar de paz e
              - segurança, dentre tantas dificuldades que nos rodeiam.
# Como Usar
1. Clone este repositório em sua máquina.

- Caso esteja utilizando o ambiente de produção, crie o usuário para inserção no Banco de Dados SQLServer + adicione as credenciais para inserção em banco remoto e ajuste seu INSERT para que esteja de acordo com a tabela que receberá as medidas.

2. Acesse o local deste repositório no terminal (GitBash ou VSCode) e execute os comandos abaixo:

```
npm i
``` 
_O comando acima irá instalar as bibliotecas necessárias para o funcionamento da API. As bibliotecas a serem instaladas estão listadas no arquivo **package.json** então é muito importante que este não seja alterado. Será criada uma nova pasta/diretório chamado **node_modules** quando o comando for finalizado, que é onde as bibliotecas estão localizadas. Não altere a pasta/diretório._

```
npm start
``` 

_O comando acima irá iniciar sua API e efetuar os comandos de acordo com a sua parametrização feita nos passos anteriores._

3. Para "ver" sua API funcionando você pode visualizar os gráficos das capturas sendo exibidos no seu navegador pelo caminho **http://localhost:3300** ou efetuando SELECT no seu Banco de Dados, caso tenha optado por inseri-los.

4. Caso queira parar a API, tecle **CTRL+C** no terminal em que a API está rodando.
