import { Ciudad } from "./Ciudad";
import { Vuelo } from "./Vuelo";

export class Aeropuerto{
    private nombre: String;
    private ciudad: Ciudad;
    private vuelos: Vuelo[];


    constructor(nombre: String, ciudad: Ciudad){
        this.ciudad = ciudad;
        this.nombre = nombre;
        this.ciudad.addAeropuerto(this);
        this.vuelos = [];
    }

    public getNombre(): String{
        return this.nombre;
    }

    public setNombre(nombre:String) {
        this.nombre = nombre;
    }

    public getCiudad(): Ciudad{
        return this.ciudad
    }

    public setCiudad(ciudad: Ciudad){
        this.ciudad = ciudad;
    }

    public addVuelo(vuelo: Vuelo) {
       this.vuelos.push(vuelo);
    }

    public getCantVuelosEnUnDia(dia: Date): number{
        return this.getCantVuelosLlegada(dia).length + this.getCantVuelosSalida(dia).length;
    }

    public getCantVuelosLlegada(dia:Date) : Vuelo[] {

        let vuelosLlegada = this.vuelos.filter(vuelo => vuelo.getAeropuertoDestino().getNombre() == this.getNombre() && vuelo.getFechaSalida().getTime() == dia.getTime());
        //console.log(dia);
        return vuelosLlegada
    }

    public getCantVuelosSalida(dia:Date) : Vuelo[] {
        let vuelosSalida = this.vuelos.filter(vuelo => vuelo.getAeropuertoInicio().getNombre() == this.getNombre() && vuelo.getFechaSalida().getTime() == dia.getTime());
        return vuelosSalida
    }

}