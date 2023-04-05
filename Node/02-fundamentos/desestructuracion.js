const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    //edad:50,
    getNombre: function(){
        return `${this.nombre} ${this.apellido} ${this.poder}  `;
    }
}

    // const nombre = deadpool.nombre
    // const apellido = deadpool.apellido
    // const poder = deadpool.poder

    // //Desestructuracion de objetos
    // const { nombre, apellido, poder, edad = 50 } = deadpool;
    // //Al momento de desestructurar, podemos definir una atributo dentro desde la misma linea.
    // console.log(nombre, apellido, poder, edad );

    //Podemos realizar la desestructuracion desde los argumentos de la funcion
    function imprimeHeroe({nombre, apellido, poder, edad = 50}) {
        nombre = 'Joset'; //es mejor declarar las constantes para que no se modifiquen los datos ni dentro del scope.
        console.log(nombre, apellido, poder, edad );
    }

    //imprimeHeroe(deadpool);

    const heroes = ['Deadpool','Superman','Batman'];
    //Desestructurado(comun) de arreglo no asociativo
    // const hr1 = heroes[0];
    // const hr2 = heroes[1];
    // const hr3 = heroes[2];

    // const[h1, h2 ,h3]=heroes;//todos los contenidos
    const[,,hr3]=heroes;//Solo batman


    console.log(hr3);



