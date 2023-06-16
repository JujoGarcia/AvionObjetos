import { Aeropuerto } from "./Aeropuerto";

export class Escala{
    private aeropuerto : Aeropuerto;
    private tiempoEsperaMinutos : number;


    constructor(aeropuerto : Aeropuerto, tiempoEsperaMinutos : number){
        this.aeropuerto = aeropuerto;
        this.tiempoEsperaMinutos = tiempoEsperaMinutos;
    }

    public getAeropuerto(): Aeropuerto{
        return this.aeropuerto;
    }

    public getTiempoEsperaMinutos() : number{
        return this.tiempoEsperaMinutos;
    }
}