var avisoModel = require("../models/avisoModel");

function listar(req, res) {
    var idUsuario = req.body.UsuarioServer;
    avisoModel.listar(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function cadastrarEvento(req, res) {

    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
   var descricao = req.body.descricaoServer;
   var data = req.body.dataServer;
   var fkUsuario = req.body.UsuarioServer;

    // Faça as validações dos valores
    if (descricao == undefined) {
        res.status(400).send("O nome da empresa está undefined!");
    } else if (data == undefined) {
        res.status(400).send("O CNPJ está undefined!");
    } else if (fkUsuario == undefined) {
        res.status(400).send("O logradouro está undefined!");
    }
    else {
        
        // Passe os valores como parâmetro e vá para o arquivo empresaModel.js
        avisoModel.cadastrarEvento(descricao,data,fkUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}


function IncrementarCurtida(req, res) {
    var fkUsuario = req.body.UsuarioServer;
    var idPosts = req.params.idPosts;

    avisoModel.IncrementarCurtida(fkUsuario, idPosts)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );

}

function DecrementarCurtida(req, res) {
    var idPosts = req.params.idPosts;
    var fkUsuario = req.body.UsuarioServer;
    avisoModel.DecrementarCurtida(fkUsuario,idPosts)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao DecrementarCurtida o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = {
    listar,
    cadastrarEvento,
    DecrementarCurtida,
    IncrementarCurtida
}