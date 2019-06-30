const fs = require('fs'); //  que es propio de node q ya esta en node
//const fs = require('express');// no existe en la doc de node se tiene q instalar no es natico son expanciones
//const fs = require('./fs'); // archivosx q nosotros creamos en el proyecto
var Color = require('color');
let listarTabla = (base, limite = 10) => {

    console.log('=================='.green);
    console.log(`tabla de ${ base }`.green);
    console.log('=================='.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${ base } * ${ i } = ${ base * i }`)
    }


}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('No es un numero');
            return;
        }

        let data = '';
        for (let i = 1; i <= limite; i++) {

            data += `${base} * ${i}= ${base*i} \n`;
        }

        //const data = new Uint8Array(Buffer.from('Hello Node.js'));
        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla - ${ base }-al-${limite}.txt`)
                //console.log('El archivo ha sido creado');
        });

    });
};
//crearArchivo=crearArchivo es lo mismo ponerlo solo una vez<
module.exports = {
    crearArchivo,
    listarTabla
}