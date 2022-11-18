function cadastrar() {
    var fkLiderJovemAtribuida = null;
    if (liderJovemSim.value == 'Sim') {
        fkLiderJovemAtribuida = comboIgreja.value;      
    } else {
        fkLiderJovemAtribuida = null;
    }
    //Recupere o valor da nova input pelo nome do id
    // Agora vá para o método fetch logo abaixo
    var userVar = inputUsuario.value;
    var senhaVar = inputSenha.value;
    var nomeVar = inputNome.value;
    var contatoVar = inputContato.value;
    var igrejaVar = comboIgreja.value;
    var liderJovemVar = fkLiderJovemAtribuida;
    
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
            }, "2000")
            
        } else {
            alert ("Houve um erro ao tentar realizar o cadastro!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });
    
    return false;
    }