var express = require("express");
var router = express.Router();

var avisoController = require("../controllers/avisoController");

router.get("/", function (req, res) {
    avisoController.testar(req, res);
});

router.get("/listar", function (req, res) {
    avisoController.listar(req, res);
});
// router.get("/listarCurtida/:idPosts", function (req, res) {
//     avisoController.listarCurtida(req, res);
// });

router.post("/cadastrarEvento", function (req, res) {
    avisoController.cadastrarEvento(req, res);
})

router.get("/pesquisar/:descricao", function (req, res) {
    avisoController.pesquisarDescricao(req, res);
});

router.post("/IncrementarCurtida/:idPosts", function (req, res) {
    avisoController.IncrementarCurtida(req, res);
});

router.delete("/DecrementarCurtida/:idPosts", function (req, res) {
    avisoController.DecrementarCurtida(req, res);
});

module.exports = router;