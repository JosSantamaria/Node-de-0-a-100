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
//Empleados
const getEmpleado = (id,funcionCallback) => {

    const empleado = empleados.find( (e) => e.id === id).nombre

    if(empleado){

       funcionCallback(null,empleado);

    }else{

        funcionCallback(`Empleado con id ${id} no existe`);

    }

}

//Salarios
const getSalario = (id,funcionCallback) => {

    const salario = salarios.find( (e) => e.id === id)?.salario;

    if(salario){

       funcionCallback(null,salario);

    }else{

        funcionCallback(`El Salario para el empleado con id ${id} no existe`);

    }

}

const id = 3;

getEmpleado(id,( err ,empleado) => {
    
    if( err ){
        console.log('Error!');
        return console.log( err);
    }

    getSalario(id,( err , salario) => {
    
        if( err ){
            return console.log( err);
        }
    
        console.log( 'El empleado:', empleado,'tiene un salario de:',salario);
    })

})

