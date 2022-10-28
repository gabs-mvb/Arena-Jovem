function mostrarSenha() {
  const senha = document.getElementById("inputSenha");
  if (senha.type === "password") {
    senha.type = "text";
  } else {
    senha.type = "password";
  }
}
var selecionado = 1;
function lembrarSenha() {
  const check = document.getElementById("imgCheck");
  selecionado += 1;
  var cont = selecionado / 2;
  if (cont % 1 == 0) {
    check.src = "assets/login/checked.png";
  } else {
    check.src = "assets/login/unchecked.png";
  }
  console.log(selecionado);
}
function voltarPagina() {
  window.history.back();
}
