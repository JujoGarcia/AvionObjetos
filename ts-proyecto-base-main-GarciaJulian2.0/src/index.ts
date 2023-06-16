import { Aeropuerto } from "./main/Aeropuerto";
import { Avion } from "./main/Avion";
import { Ciudad } from "./main/Ciudad";
import { Pasajero } from "./main/Pasajero";
import { Vuelo } from "./main/Vuelo";

// OPCIONES PARA EL PUNTO 2, que cada vuelo tenga tramos, lo cual hace que si existen mas de dos tramos lo cuenta como escala y si hay uno solo lo cuente como directo.
// Esto haria que tramo pasase a tener casi todas las propiedades de vuelo

var ezeiza = new Ciudad("Argentina","Ciudad Autonoma de Buenos Aires");
var caba = new Ciudad("Argentina","Ezeiza");
var aeropuertoEzeiza = new Aeropuerto("Aeropuerto de Ezeiza",ezeiza);
var aeroparque = new Aeropuerto("Aeroparque",caba);
var boeing737 = new Avion(100);
var primerVuelo = new Vuelo(aeropuertoEzeiza, aeroparque, boeing737, 30, new Date());
//var primerVuelo = new Vuelo(boeing737);

for(var i = 0; i < 2; i++){
    let pasajero = new Pasajero();
    primerVuelo.agregarPasajero(pasajero);
    pasajero.addVuelo(primerVuelo);
    pasajero.getCantVuelos();
}

let date = new Date("2015-07-08");
console.log(date)

console.log("La ocupacion del avion es del " + primerVuelo.capacidadOcupadaPorPasajeros() + "%");


//console.log(aeroparque.getCiudad().getNombre());
