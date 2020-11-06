const argv = require('yargs').argv
.command('listar', 'Imprime en pantalla la tabla de multiplicar', {
base: {
demand: true,
alias: 'b'
},
limite: {
    alias: 'l',
    default: 10
}
})
.command('crear', 'Crea un archivo con la tabla de multiplicar', {
    base: {
        demand: true,
        alias: 'b'
      },
      limite: {
          alias: 'l',
          default: 10
      }
  })
.help()
.argv;

const { listarTabla } = require('./multiplicacion/multiplicacion');
const multiplicar = require('./multiplicacion/multiplicacion');
// console.log('La base insertada fue: ', argv.base);
// console.log('El límite insertado fue: ', argv.limite);

let comando = argv._[0];
let base = argv.base;
let limite = argv.limite;


switch(comando){
    case 'listar': 
    multiplicar.listarTabla(base, limite)
    .then()
    .catch(error => console.log(`Ocurrió un error ${error}`));
    // console.log('Usted eligió listar.');
    break;

    case 'crear':

    multiplicar
.crearArchivo(base, limite)
.then(archivo => console.log(`El archivo ${archivo} ha sido generado`))
.catch(error => console.log (`Ocurrio un error ${error}`));
        // console.log('Usted eligió crear.');
    break;
    
    default:
    console.log('Comando no reconocido.');
}


