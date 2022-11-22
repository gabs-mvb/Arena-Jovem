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
