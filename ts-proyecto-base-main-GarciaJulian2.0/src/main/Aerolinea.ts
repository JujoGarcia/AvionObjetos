import { Avion } from "./Avion";
import { Vuelo } from "./Vuelo";

export class Aerolinea{
    private nombre : string;
    private aviones: Avion[];
    private vuelos: Vuelo[];

constructor(nombre: string){
    this.nombre = nombre;
    this.aviones = [];
    this.vuelos =[];
}

public addVuelo(vuelo: Vuelo){
    this.vuelos.push(vuelo);
}

public getCantPasajerosMensual(mes: number): number{
    let cantidadPasajeros = 0;
    
    let vuelosMensuales = this.vuelos.filter(vuelo => vuelo.getFechaSalida().getMonth() == mes - 1);

    vuelosMensuales.forEach(vuelo => {
        cantidadPasajeros += vuelo.cantPasajeros();
    })

    return cantidadPasajeros;
}




}