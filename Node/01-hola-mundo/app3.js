//Numero de ejecucion
console.log("Inicio de Programa");//*1


setTimeout( ()=>{
    console.log("Primer Timeout");//5
},3000 );


setTimeout( ()=>{
    console.log("Segundo Timeout");//3
},0 );


setTimeout( ()=>{
    console.log("Tercero Timeout");//4
},0 );


console.log("Fin de Programa");//2

/***
 * Primero se ejecuta el 1 y 2,
 * las ejecuciones de los timer's primero el 3 y 4 se ejecutan,
 * pero lo hacen justo despues de el 1 y 2, ya que al hacer una funcion de tipo
 * NO Blocking, osea son callbacks, primero leen los valores del timer ( 0 ), luego 
 * pasan a la cola (enqueque) de ejecucion de node, pero por temas ms de procesamiento 
 * quedan detras de el 1 y 2.
 * 
 * En el caso del timer con 3000ms, se ejecuto de ultimo por la espera que tenia en el timer
 * antes de poder encolar la ejecucion de esas sentencias en especifico.
 * 
 */

//console.log("Nodemon Instalado");