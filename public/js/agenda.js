function atualizarFeed() {
  fetch(`/avisos/listar/`)
    .then(function (resposta) {
      if (resposta.ok) {
        if (resposta.status == 204) {
          var notificacoes = document.getElementById("feed");
          var mensagem = document.createElement("span");
          mensagem.classList.add("mensagem");
          mensagem.innerHTML = "Nenhum resultado encontrado.";
          notificacoes.appendChild(mensagem);
          throw "Nenhum resultado encontrado!!";
        }

        resposta.json().then(function (resposta) {
          console.log("Dados recebidos: ", JSON.stringify(resposta));

          var notificacoes = document.getElementById("feed");
          notificacoes.innerHTML = "";
          for (let i = 0; i < resposta.length; i++) {
            var publicacao = resposta[i];

            // criando e manipulando elementos do HTML via JavaScript
            var divPublicacao = document.createElement("div");
            feed.appendChild(divPublicacao);

            function dataFormatada(){
              var data = new Date(publicacao.dataAnuncio),
                  dia  = data.getDate().toString(),
                  diaFormatado = (dia.length == 1) ? '0'+dia : dia,
                  mes  = (data.getMonth()+1).toString(), //+1 pois no getMonth Janeiro começa com zero.
                  mesFormatado = (mes.length == 1) ? '0'+mes : mes,
                  anoFormatado = data.getFullYear();
                  horaFormatada = data.getHours();
                  minutosFormatados = data.getMinutes();
              return diaFormatado+"/"+mesFormatado+"/"+anoFormatado+" "+horaFormatada+":"+minutosFormatados;
          }
            divPublicacao.innerHTML += `
                        
            
              <h4>Informações do Evento</h4>
                <p><b>Igreja:</b></p>
                    <p>${publicacao.nomeIgreja}</p>
                <p><b>Descrição:</b></p>
                    <p>${publicacao.descricao}</p>
                <p><b>Endereço:</b></p> <p>${publicacao.logradouro}, ${publicacao.numero}, ${publicacao.cep}, ${publicacao.cidade}, ${publicacao.bairro}</p>
                <p class="curtidas"><img id="imgCheck" src="assets/heart.png" width="50px" alt="" onclick="curtir()"><p class='textoCurtido'>${publicacao.curtidas}</p></p>
                <p class="data-hora"><b>${dataFormatada()}</b></p>
          
                        `;
            divPublicacao.className = "post";
          }
        });
      } else {
        throw console.log("Não está retornando nada", JSON.stringify(resposta));
      }
    })
    .catch(function (resposta) {
      console.log(resposta);
    });
}

function loggout(){
        sessionStorage.clear();
        link_index();
      }
      //link para página do login, quando fazer o logout
    
      function link_login() {
        window.location.href = "login.html";
      }
    
      function link_index() {
        window.location.href = "index.html";
      }
