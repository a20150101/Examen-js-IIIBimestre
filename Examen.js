//
var nombre = (prompt("Ingrese su nombre") );
alert ("Revise los datos en la consola presionando F12");

//
var nom = nombre
var incorrecta = 0
var correctas = 0
var res1 =
//

console.log("Su nombre es: " + nom);

var res1 = prompt("¿Cuánta agua hay en la Tierra?\n A: Alrededor de un 41% de la superficie terrestre es agua.\nB: Alrededor de un 51% de la superficie terrestre es agua\nC: Alrededor de un 71% de la superficie terrestre es agua");
if(res1=="C"){
    res1 = 33.33;
}else{
    res1 = 0;
};

var res2 = prompt("¿Qué océano es el más grande?\n A: El Pacífico \nB: El Atlántico\nC: El Índico");
if(res2=="A"){
    res2 = 33.33;
}else{
    res2 = 0;
};

var res3 = prompt("¿Cuamtp mide la parte mas profunda del los Oceanos?\n A: 11Km \nB: 23Km \nC: 31Km");
if(res3=="A"){
    res3 = 33.33;
}else{
    res3 = 0;
};

var total = res1 + res2 + res3 

document.write("<h1>Examen</h1>");
document.write("Respuestas<br>");
document.write(nom +  " Tus resultados son<br>");
document.write(total + "% de respuewstas correctas");