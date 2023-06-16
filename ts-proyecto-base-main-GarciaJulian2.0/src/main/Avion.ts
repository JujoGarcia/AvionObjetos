export class Avion{
    private nombreAvion: String;
    private capacidadAsientos: number;

    constructor(capacidadAsientos : number){
        this.capacidadAsientos = capacidadAsientos;
    }

    public setNombreAvion(nombre: String){
        this.nombreAvion = nombre;
    }

    public getnombreAvion(): String{
        return this.nombreAvion;
    }

    public setCapacidadAsientos(capacidad: number){
        this.capacidadAsientos = capacidad;
    }

    public getCapacidadAsientos(): number{
        return this.capacidadAsientos;
    }
}