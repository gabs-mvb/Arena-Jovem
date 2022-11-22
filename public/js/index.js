if (sessionStorage.ID_USUARIO != null) {
    login.innerHTML = `<a href="perfil-agenda.html">Acesse</a>`
} else {
    login.innerHTML = `<a href="login.html">Participe</a>`
}