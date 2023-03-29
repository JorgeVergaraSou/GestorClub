
const fs = require('fs')
const readlineSync = require('readline-sync')

import { Deporte, Jugador } from "./Jugador"

export default class GestorClub{
    constructor(){
       // fs.writeFileSync('./socios.json', '[]')
    }
/* funcion que lee archivo json y retorna los datos */
    data() { return JSON.parse(fs.readFileSync('./socios.json')) }    

    agregarSocio(){
        let nombre = readlineSync.question('Escriba nombre del socio: ').toLowerCase();
        let apellido = readlineSync.question('Escriba apellido del socio: ').toLowerCase();
        let fechaNacimiento = readlineSync.question('Escriba Fecha nacimiento en formato YYYY/MM/DD del socio: ');
        let documento = readlineSync.question('Escriba DNI del socio: ');
        let telefono = readlineSync.question('Escriba telefono del socio: ');

        let arrayDeporte = ["futbol", "basket", "zumba", "voley", "natacion", "gym"]
        let deporte = readlineSync.keyInSelect(arrayDeporte, 'Seleccione deporte del socio');

        let nuevoSocio = new Jugador(nombre, apellido, fechaNacimiento, documento, telefono, deporte);

        // agrega los socios existentes y el nuevo
        let socios = [...this.data(), nuevoSocio]

        //escribo en el archivo json, todos los socios
        // fs.writeFileSync('./socios.json', socios)

        fs.writeFileSync('./socios.json', JSON.stringify(socios, null, 2));

    }

    buscarXNombre(nombre:string){
        let nombreSocio = this.data().find((socio: { nombre: string }) => socio.nombre === nombre.toLowerCase())
        console.log(nombreSocio);
        return nombreSocio;
    }
}
