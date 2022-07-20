const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(arr){
    const mySet = new Set(arr);

    return [...mySet];
    //return mySet; para 1 SET
}

console.log(valoresUnicos(meuArray));

/*function getAdmins(map){
    let admins = [];
    for ([key, value] of map){
     if (value == 'Admin'){
         admins.push(key);
 }}
 return admins;
}

const usuarios = new Map();

usuarios.set('Luiz', 'Admin');
usuarios.set('Stephany', 'Admin');
usuarios.set('Jorge', 'Usuer');
usuarios.set('Nat', 'Admin');

console.log(getAdmins(usuarios));*/


//var lista = ["maça", "pera", "laranja"];
//lista.push("uva"); // add 1 item na lista
//lista.pop(); //retira o ultimo item da lista
//console.log(lista[0]);
//console.log(lista);
//console.log(lista.reverse());
//console.log(lista.toString()[0]);
//console.log(lista.toString()[0]);
//console.log(lista.toString());
//console.log(lista.join(" - "))
//console.log(lista.join(" | "))
//console.log(lista.length);
//alert(lista[3]);

/*var nome = "Jonas Carvalho";
var n1 = 33;
var n2 = 10;
var frase = "Japão e o melhor";
//alert(nome + " tem " + idade + " anos");
//alert(idade + idade2);
console.log(nome);
console.log(n1 + n2);
console.log(frase.toUpperCase());
//console.log(frase.replace("Japãp", "Brasil"));
//alert(frase.replace("Japão", "Brasil")); */