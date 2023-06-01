export class Pasajero{
    private nombre: String;
    private apellido: String;



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
}