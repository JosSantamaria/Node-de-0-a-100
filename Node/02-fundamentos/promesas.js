const empleados = [

    {
        id:1,
        nombre:"Jos"
    }
    ,
    {
        id:2,
        nombre:"Maf"
    }
    ,
    {
        id:3,
        nombre:"Fernando"
    }
    ,
    {
        id:4,
        nombre:"Linda"
    }
    
];

const salarios  = [
    {
        id:1,
        salario:1000
    }
    ,
    {
        id:2,
        salario:1500
    }
    ,
    {
        id:3,
        salario:2000
    }
    
]; 

const getEmpleado = (id) => {

    //resolve: callback cuando todo es correcto.
    return new Promise( (resolve,reject) => {
        
            const empleado = empleados.find( e => e.id === id)?.nombre
            //Operador ternario:
            empleado
                ? resolve(empleado)
                : reject(`No existe el empleado con el ID ${id}`)
                
            });
    // return promesa;
}

const getSalario = (Sid) => {
    return new Promise( (resolve,reject)=>{
        const salario = salarios.find( s => s.id === Sid)?.salario

        salario ? resolve(salario) : reject(`No existe el salario con el ID:${Sid}`)
    });

}
const id = 4;//5: no existe
const Sid = 2;//4: no existe

// console.log(`Id de empleado: ${id} con el id de salario: ${Sid}`);
// getEmpleado(id)
// //En caso de no manejar la promesa o el error de la promesa tendremos un error feo 'ERR_UNHANDLED_REJECTION'
//     .then( empleado=> console.log('Empleado:',empleado) )
//     //Si agregamos el .catch() ya manejariamos mejor el error.
//     .catch(err => console.log(err) );

// getSalario(Sid)
//     .then(salario => console.log('Salario: ',salario) )
//     .catch( err => console.log(err));

//Este es un CODIGO dificil de leer y de mantener
// getEmpleado(id)
//     .then( empleado => {
//         getSalario(Sid)
//             .then(salario => {
//                 console.log('El empleado:', empleado, 'tiene un salario de:',salario)
//             }).catch(err => console.log(err))
// }).catch( err => console.log(err) );

/***
 * Promesas en cadena
 */

//s