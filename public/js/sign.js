function mostrarSenha() {
  const senha = document.getElementById("inputSenha");
  if (senha.type === "password") {
    senha.type = "text";
  } else {
    senha.type = "password";
  }
}
var selecionado = 1;
function curtir() {
  const check = document.getElementById("imgCheck");
  selecionado += 1;
  var cont = selecionado / 2;
  if (cont % 1 == 0) {
    check.src = "assets/heartCheck.png";
  } else {
    check.src = "assets/heart.png";
  }
  console.log(selecionado);
}
function voltarPagina() {
  window.history.back();
}
