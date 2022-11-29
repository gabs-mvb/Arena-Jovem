/* Validando os campos do cadastro do Usuario */
//Validando Nome de usuario
var validar_usuario = false;
function validarUsuario() {
  var usuario = inputUsuario.value;
  /* Verifica se o usuario tem mais de 6 caractéres */
  if (usuario.length < 6) {
    inputUsuario.classList.add("red");
    inputUsuario.classList.remove("green");
  } else {
    inputUsuario.classList.remove("red");
    inputUsuario.classList.add("green");
    validar_usuario = true;
  }
}
//Validando Senha do Usuario
var validar_senha = false;
function validarSenha() {
  var senha = inputSenha.value;
  var fortificador =
    /^(?=.*\d)(?=.*[a-z])([0-9a-zA-Z]){6,}$/;
  /*
  
  (?=.*\d)         // deve conter ao menos um dígito
  (?=.*[a-z])      // deve conter ao menos uma letra minúscula

  ([0-9a-z): é uma classe de caracteres contendo números, 
    letras e os caracteres especiais que você está considerando. 
  Eles estão dentro de parênteses para formar um grupo de captura
  
  */
 /* Verifica se a senha está com as requisições acima */
 if (fortificador.test(senha)) {
    inputSenha.classList.remove("red");
    inputSenha.classList.add("green");
    validar_senha = true;
} else {
    inputSenha.classList.add("red");
    inputSenha.classList.remove("green");
  }
}
//Validando Nome Do usuario
var validar_nome = false;
function validarNome() {
    var nome = inputNome.value;
    /* Devolve a quantidade de nomes em numeros Ex: Sherlock Homes -> vai retornar 2 */
    const nomeCompleto = nome.split(" ");
    /* Verifica se a quantidade de nomes é menor que 1, pois ninguém tem um nome completo de um nome apenas */
    if (nomeCompleto.length <= 1) {
        inputNome.classList.add("red");
        inputNome.classList.remove("green");
    } else {
        inputNome.classList.remove("red");
        inputNome.classList.add("green");
        validar_nome = true;
    }
    /* Faz a substituição das primeiras letras dos nomes caso o usuário coloque a primeira leta do nome minuscula */
    for (let i = 0; i < nomeCompleto.length; i++) {
        nomeCompleto[i] =
        nomeCompleto[i][0].toUpperCase() + nomeCompleto[i].substr(1);
  }
  /* Junta os nomes novamente */
  nomeCompleto.join(" ");
}
//Validando Contato do Usuario
var validar_contato = false;
function validarContato() {
    var contato = inputContato.value;
    if (contato.length == 0){
      validar_contato = true;
      console.log(validar_contato);  
    }else if(contato.length == 11){
      inputContato.classList.remove("red");
      inputContato.classList.add("green");
      validar_contato = true;
    } else {    
      inputContato.classList.remove("green");
      inputContato.classList.add("red");
      validar_contato = false;
    }
}

function mostrarSenha() {
    const senha = document.getElementById("inputSenha");
    if (senha.type === "password") {
      senha.type = "text";
    } else {
        senha.type = "password";
    }
  }

function validarBTNCadastro() {
    if (
        validar_usuario &&
    validar_senha &&
    validar_nome &&
    validar_contato
    ) {      
        cadastrar()
    }else {
        alert ('Houve um erro ao cadastrar');
    }
}


function  cadastrar(){
    var valorFk = document.querySelector('input[name="liderJovem"]:checked').value;
    
    if (valorFk == 'SIM') {
        valorFk = 1;      
    }else{
        valorFk = null;
    }
    //Recupere o valor da nova input pelo nome do id
    // Agora vá para o método fetch logo abaixo
    var userVar = inputUsuario.value;
    var senhaVar = inputSenha.value;
    var nomeVar = inputNome.value;
    var contatoVar = inputContato.value;
    var igrejaVar = comboIgreja.value;
    var liderJovemVar = valorFk;
    
    // Enviando o valor da nova input
    fetch("/usuarios/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            userServer: userVar,
            senhaServer: senhaVar,
            nomeServer: nomeVar,
            contatoServer: contatoVar,
            igrejaServer: igrejaVar,
            liderJovemServer: liderJovemVar
        })
    }).then(function (resposta) {
    
        console.log("resposta: ", resposta);
    
        if (resposta.ok) {
            alert("Cadastro realizado com sucesso! Redirecionando para tela de Login...");
    
            setTimeout(() => {
                window.location = "login.html";
            }, "500")
            
        } else {
            alert ("Houve um erro ao tentar realizar o cadastro!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });
    
    return false;
    }