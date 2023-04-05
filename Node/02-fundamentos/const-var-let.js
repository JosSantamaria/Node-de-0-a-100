//Creada en un ambito global
//var nombre = "Wolverine -scp:global{var}";
//let nombre = "Wolverine -scp:global{let}";//no es le mismo que el del scope del if()

//Las const no se pueden redeclarar ni reasignar valores
const nombre2 = "Spiderman -scp:global{constante}";// las contantes no tienen getters y setters

if (true){ //incio scope

    /*let */ 
    //nombre = "Magneto -scp:if{ ambito }";
    //console.log(nombre);//Solo toma el nombre dentro de su scope- en caso de redeclarar la variable con let
const nombre2 = "Spiderman -scp:if{const}"
console.log(nombre2);
}//fin scope


//console.log(nombre);
console.log(nombre2);
