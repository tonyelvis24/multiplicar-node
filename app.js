/*const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .command('crear', 'Genera un archivo con tabla de multiplicar', {
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
    .argv; */ //node app listar -b 5 = node app listar --base  5
const argv = require('./config/yargs').argv;
var Color = require('color');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
//console.log(argv); //node app listar --base 10
//node app crear listar borrar comer

let comando = argv._[0]; //_[] es para hacer referencia alñ arreglop

switch (comando) {
    case 'listar': // node app listar --limite 30 -b 3
        //console.log('LISTAR');
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear': //node app crear --base 10 ooo node app crear --limite 5 -b 3
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('comando no reconocido');


}

//const fs = require('fs'); //  que es propio de node q ya esta en node
//const fs = require('express');// no existe en la doc de node se tiene q instalar no es natico son expanciones
//const fs = require('./fs'); // archivosx q nosotros creamos en el proyecto
//let base = 2;
/*let base = 2;
let data = '';
for (let i = 1; i <= 10; i++) {

    data += `${base} * ${i}= ${base*i} \n`;
}

//const data = new Uint8Array(Buffer.from('Hello Node.js'));
fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
    if (err) throw err;
    console.log('El archivo ha sido creado');
});*/
//console.log(process.argv);
//mandar parametro desde la terminal
//node app --base=5

//node app --base=5

//let argv2 = process.argv;
//let parametro = argv[2];
//et base = parametro.split('=')[1];

//node app listar --base=5
//console.log(argv);
//console.log(argv2);
/*crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${archivo}`))
    .catch(e => console.log(e));*/