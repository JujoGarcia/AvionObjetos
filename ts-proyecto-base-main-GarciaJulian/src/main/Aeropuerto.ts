import { Ciudad } from "./Ciudad";

export class Aeropuerto{
    private nombre: String;
    private ciudad: Ciudad;

    constructor(nombre: String, ciudad: Ciudad){
        this.ciudad = ciudad;
        this.nombre = nombre;
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
}