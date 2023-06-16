import { Aeropuerto } from "./Aeropuerto";

export class Ciudad{
    private pais: String;
    private nombre: String;
    private aeropuertos: Aeropuerto[];

    constructor(pais: String, nombre : String){
        this.pais = pais;
        this.nombre = nombre;
        this.aeropuertos = [];
    }

    public getNombre(): String{
        return this.nombre;
    }

    
    public getCantAeropuertos() : number {
        return this.aeropuertos.length;
    }

    public addAeropuerto(aeropuerto : Aeropuerto){
        this.aeropuertos.push(aeropuerto);
    }

    public getCantVisitantesEnDia(dia: Date): number{

        let cantidadPasajeros = 0;
        const vuelos = this.aeropuertos.map(aeropuerto => aeropuerto.getCantVuelosLlegada(dia));

        vuelos.forEach(vuelosPorAeropuerto => {
            vuelosPorAeropuerto.forEach(vuelo =>{
                cantidadPasajeros += vuelo.cantPasajeros();
            })
        })





        return cantidadPasajeros;
    }
    

    public setNombre(nombre:String){
        this.nombre = nombre;
    }
}