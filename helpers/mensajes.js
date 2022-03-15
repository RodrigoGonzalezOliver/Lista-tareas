const mostrarMenu = () => {

    console.clear();
    console.log('========================');
    console.log(' Seleccione una opcion');
    console.log('========================\n');

    console.log(`1. Crear tarea`);
    console.log(`2. Listar tarea`);
    console.log(`3. Listar tarea completada`);
    console.log(`4. Listar tarea pendiente`);
    console.log(`5. Completar tarea`);
    console.log(`6. Borrar tarea`);
    console.log(`0. Salir \n`);

}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Seleccione una opcion: ', (opt) =>{
    console.log(opt);
    readline.close();
})

module.exports = {
    mostrarMenu
}