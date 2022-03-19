/*
function adicionarFilme() {
    var filmeFavorito = document.getElementById("filme").value;
    if (filmeFavorito.endsWith("jpg")) {
      var elementoFilmeFavorito = "<img src=" + filmeFavorito + ">";
      var elementoListaFilmes = document.getElementById("listaFilmes");
      elementoListaFilmes.innerHTML =
        elementoListaFilmes.innerHTML + elementoFilmeFavorito;
      filmeFavorito.value = "";
    } else {
      console.error("Endereço de imagem inválido");
    }
  document.getElementById("filme").value = "";
}*/

function adicionarFilme() {
  var filmeFavorito = document.getElementById("filme").value;
  if (filmeFavorito.endsWith(".jpg")) {
    listarFilmesNaTela(filmeFavorito);
  } else {
    console.error("Endereço de imagem inválido");
  }
  document.getElementById("filme").value = "";
}

function listarFilmesNaTela(filme) {
  console.log(filme);
  var elementoFilmeFavorito = "<img src=" + filme + ">";
  var elementoListaFilmes = document.getElementById("listaFilmes");
  elementoListaFilmes.innerHTML =
    elementoListaFilmes.innerHTML + elementoFilmeFavorito;
}
