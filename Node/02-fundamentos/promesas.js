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

const getEmpleado = (id,funcionCallback) => {

    //resolve: callback cuando todo es correcto.
    const promesa = new Promise( (resolve,reject) => {
        //reject: callback cuando hay error.
            const empleado = empleados.find( (e) => e.id === id)?.nombre
                
                
            });
}

getEmpleado(id)
    .then( empleado=> console.log(empleado) );