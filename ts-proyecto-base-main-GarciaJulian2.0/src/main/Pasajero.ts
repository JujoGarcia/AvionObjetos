import { Ciudad } from "./Ciudad";
import { Vuelo } from "./Vuelo";

export class Pasajero{
    private nombre: String;
    private apellido: String;
    private vuelosTomados : Vuelo[];
    private ciudadesVisitadas : Ciudad[];

    constructor(){
        this.vuelosTomados = [];
        this.ciudadesVisitadas = [];  
     }

     public getCantVuelos() : number{
        return this.vuelosTomados.length;
     }

     public addVuelo(vuelo : Vuelo) {
        this.vuelosTomados.push(vuelo);
        this.ciudadesVisitadas.push(vuelo.getAeropuertoInicio().getCiudad())
        this.ciudadesVisitadas.push(vuelo.getAeropuertoDestino().getCiudad())
     }

    public setNombre(nombre: String){
        this.nombre = nombre;
    }

    public getNombre(): String{
        return this.nombre;
    }

    public setApellido(apellido: String){
        this.apellido = apellido;
    }

    public getApellido(): String{
        return this.apellido;
    }

    public getCiudadesVisitadas(): Ciudad[]{
        return this.ciudadesVisitadas; 
    }


    public getCantVecesEnCiudad(ciudad : Ciudad): number{
        let ciudadesFiltradas = this.ciudadesVisitadas.filter(ciu => ciu.getNombre() == ciudad.getNombre())
        return ciudadesFiltradas.length;
    }
}