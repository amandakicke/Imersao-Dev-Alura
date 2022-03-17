var listaFilmes = ["Yesterday", "A chegada", "Escola de Rock"];

/*var filme1 = "Yesterday";
var filme2 - "A chegada";
var filme3 = "Escola de Rock";*/

listaFilmes.push("Harry Potter");
listaFilmes.push("Harry Potter 2");
listaFilmes.push("Harry Potter 3");
listaFilmes.push("Harry Potter 4");
listaFilmes.push("Harry Potter 5");
listaFilmes.push("Harry Potter 6");
listaFilmes.push("Harry Potter 7");

//experimente o h1, strong
/*document.write("<p>" + listaFilmes[0] + "</p>");
document.write("<p>" + listaFilmes[1] + "</p>");
document.write("<p>" + listaFilmes[2] + "</p>");
document.write("<p>" + listaFilmes[3] + "</p>");*/

for (var indice = 0; indice < listaFilmes.lenght; indice = indice++) {
 
  document.write("<p>" + listaFilmes[indice] + "</p>");
}