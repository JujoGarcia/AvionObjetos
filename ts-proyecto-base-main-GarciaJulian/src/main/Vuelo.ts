import { Aeropuerto } from "./Aeropuerto";
import { Avion } from "./Avion";
import { Pasajero } from "./Pasajero";

export class Vuelo{
    private nroVuelo: number;
    private aeropuertoInicio: Aeropuerto;
    private aeropuertoDestino: Aeropuerto;
    private avion: Avion;
    private duracionInicioDestino: number;
    private pasajeros: Pasajero[];


    constructor(nroVuelo : number,aeropuertoInicio : Aeropuerto, aeropuertoDestino : Aeropuerto, avion : Avion, duracionInicioDestino : number){
        this.nroVuelo = nroVuelo;
        this.aeropuertoInicio = aeropuertoInicio;
        this.aeropuertoDestino = aeropuertoDestino;
        this.avion = avion;
        this.duracionInicioDestino = duracionInicioDestino;
        this.pasajeros = [];
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
        var porcentajeOcupado: number = (this.cantPasajeros()/this.avion.getCapacidadAsientos())*100
        return porcentajeOcupado;
    }

    
    public getDuracionInicioDestino() : number {
        return this.duracionInicioDestino;
    }
    
    public setDuracionInicioDestino(duracion : number) {
        this.duracionInicioDestino = duracion;
    } 
}