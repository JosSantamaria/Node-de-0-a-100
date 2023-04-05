// //Tipo callback
// setTimeout(function(){
//     console.log("Hola Timer (1seg-despues)");
// },1000);


// //Callback con arrow => function
// setTimeout( 
//     () => {
//         console.log("Hola Timer desde de arrow function (1.5seg)");
//     }
//     ,1500 
// );

const getUsuarioById = ( id, funcionCallback ) => {

    const usuario = {
        //id:id //siendo la propiedad igual a el argumento. Se puede poner solo la propiead :: valido en ES^
        id,
        nombre: 'Joset'
    }

    setTimeout(
        () => { 
            funcionCallback(usuario);
        },
        1500 );

}

getUsuarioById( 10, (usuario)=>{
    console.log(usuario.id);
    console.log(usuario.nombre.toUpperCase() );

} );