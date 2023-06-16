import { Escala } from "./Escala";
import { Vuelo } from "./Vuelo";

export class Viaje{
    private vuelos : Vuelo[];
    private escalas : Escala[];


    constructor(){
        this.vuelos = [];
        this.escalas = [];
    }

    public getVuelos() : Vuelo[] {
        return this.vuelos;
    }

    public addVuelo(vuelo: Vuelo){
        this.vuelos.push(vuelo);
    }

    public getEscalas() : Escala[] {
        return this.escalas;
    }

    public addEscala(escala: Escala){
        this.escalas.push(escala);
    }

    public duracionTotalViajeMinutos() : number{
        var duracionTotal: number = 0;

        this.vuelos.forEach(vuelo => {
            duracionTotal += vuelo.getDuracionInicioDestino();
        });

        this.escalas.forEach(escala => {
            duracionTotal += escala.getTiempoEsperaMinutos();
        });

        return duracionTotal;
    }

     public duracionTotalViajeMinutosSeparado() : number{
        return this.duracionEscalas() + this.duracionVuelos();
    }

    public duracionEscalas(): number{
        var duracionTotal: number = 0;

        for (let i = 0; i < this.escalas.length; i++) {
            const escala = this.escalas[i];
            duracionTotal += escala.getTiempoEsperaMinutos();
        }

        return duracionTotal;
    }

    public duracionVuelos(): number{
        var duracionTotal : number = 0

        this.vuelos.forEach(vuelo => {
            duracionTotal += vuelo.getDuracionInicioDestino();
        });

        return duracionTotal;
    }
    
} 