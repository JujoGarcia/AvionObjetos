export class Ciudad{
    private nombre: String;

    constructor(nombre : String){
        this.nombre = nombre;
    }

    public getNombre(): String{
        return this.nombre;
    }

    public setNombre(nombre:String){
        this.nombre = nombre;
    }
}