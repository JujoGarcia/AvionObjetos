import { Aerolinea } from "./Aerolinea";
import { Aeropuerto } from "./Aeropuerto";
import { Avion } from "./Avion";
import { Pasajero } from "./Pasajero";
import { Tripulacion } from "./Tripulacion";

export class Vuelo{
    private nroVuelo: number;
    private aeropuertoInicio: Aeropuerto;
    private aeropuertoDestino: Aeropuerto;
    private fechaSalida : Date;
    private avion: Avion;
    private duracionInicioDestino: number;
    private pasajeros: Pasajero[];
    private tripulacion: Tripulacion;
    private aerolinea: Aerolinea;

    // constructor(avion : Avion){
    //     this.avion = avion;
    //     this.pasajeros = [];
    // }

    constructor(aeropuertoInicio : Aeropuerto, aeropuertoDestino : Aeropuerto, avion : Avion, duracionInicioDestino : number, fechaSalida:Date, tripulacion : Tripulacion, aerolinea: Aerolinea){
        //this.nroVuelo = nroVuelo;
        this.aeropuertoInicio = aeropuertoInicio;
        this.aeropuertoDestino = aeropuertoDestino;
        this.avion = avion;
        this.duracionInicioDestino = duracionInicioDestino;
        this.fechaSalida = fechaSalida;
        this.pasajeros = [];
        this.tripulacion = tripulacion;
        this.aerolinea = aerolinea;

        this.aeropuertoDestino.addVuelo(this);
        this.aeropuertoInicio.addVuelo(this);
        this.tripulacion.addVuelo(this);
        this.aerolinea.addVuelo(this);

    }

    public setAeropuertoInicio(aeropuerto: Aeropuerto){
        this.aeropuertoInicio = aeropuerto;
    }

    public getAeropuertoInicio():Aeropuerto{
        return this.aeropuertoInicio;
    }

    public setAeropuertoDestino(aeropuerto: Aeropuerto){
        this.aeropuertoDestino = aeropuerto;
    }

    public getAeropuertoDestino():Aeropuerto{
        return this.aeropuertoDestino;
    }


    public setNroVuelo(numeroVuelo: number){
        this.nroVuelo = numeroVuelo;
    }

    public getNroVuelo():number{
        return this.nroVuelo;
    }


    public setAvion(avion: Avion){
        this.avion = avion;
    }

    public getAvion(): Avion{
        return this.avion;
    }

    public agregarPasajero(pasajero: Pasajero){
        this.pasajeros.push(pasajero);
        pasajero.addVuelo(this);
    }

    public getPasajero(index: number): Pasajero{
        return this.pasajeros[index];
    }

    public getPasajeros(): Pasajero[]{
        return this.pasajeros;
    }

    public cantPasajeros(): number{
        return this.pasajeros.length;
    }

    public capacidadOcupadaPorPasajeros(): number{
        return (this.cantPasajeros()/this.avion.getCapacidadAsientos())*100;
    }

    
    public getDuracionInicioDestino() : number {
        return this.duracionInicioDestino;
    }
    
    public setDuracionInicioDestino(duracion : number) {
        this.duracionInicioDestino = duracion;
    } 

    public getFechaSalida() : Date {
        return this.fechaSalida;
    }

    public getTripulacion() : Tripulacion{
        return this.tripulacion;
    }

    public setTripulacion(tripulacion : Tripulacion){
        this.tripulacion = tripulacion;
    } 
}