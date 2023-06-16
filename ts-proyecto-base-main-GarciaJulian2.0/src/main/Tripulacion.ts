import { Vuelo } from "./Vuelo";

export class Tripulacion{
    private cantTripulantes: number;
    private vuelos: Vuelo[];


    constructor(){
        this.vuelos = [];
    }


    public getCantTripulantes(): number{
        return this.cantTripulantes
    }

    public addVuelo(vuelo: Vuelo){
        this.vuelos.push(vuelo);
    }

    public getCantVuelos() : number{
        return this.vuelos.length;
    }

    public getCantVuelosMensual(mes : number): number{

        let vuelosMensuales = this.vuelos.filter( vuelo => vuelo.getFechaSalida().getMonth() == mes - 1);

        return vuelosMensuales.length;
    }
}