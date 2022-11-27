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

function validarBTNLogin() {
  if (
      validar_usuario &&
      validar_senha
  ) {      
    entrar()
  }else {
      alert ('Houve um erro ao realizar login');
  }
}

function entrar() {
  var userVar = inputUsuario.value;
  var senhaVar = inputSenha.value;

  fetch("/usuarios/autenticar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userServer: userVar,
      senhaServer: senhaVar,
    }),
  })
    .then(function (resposta) {
      console.log("ESTOU NO THEN DO entrar()!");

      if (resposta.ok) {
        console.log(resposta);

        resposta.json().then((json) => {
          console.log(json);
          console.log(JSON.stringify(json));

          sessionStorage.USER_USUARIO = json.username;
          sessionStorage.NOME_USUARIO = json.nome;
          sessionStorage.ID_USUARIO = json.idUsuario;
          sessionStorage.ID_IGREJA = json.fkIgreja;
          sessionStorage.NOME_IGREJA = json.nomeIgreja;
          sessionStorage.LIDER_JOVEM = json.fkLiderJovem;

          setTimeout(function () {
            window.location = "perfil-agenda.html";
          }, 500); // apenas para exibir o loading
        });
      } else {
        alert("Houve um erro ao tentar realizar o login!");

        resposta.text().then((texto) => {
          console.error(texto);
        });
      }
    })
    .catch(function (erro) {
      console.log(erro);
    });

  return false;
}

function sumirMensagem() {
  cardErro.style.display = "none";
}
