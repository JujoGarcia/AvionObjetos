import { Aerolinea } from "../main/Aerolinea";
import { Aeropuerto } from "../main/Aeropuerto";
import { Avion } from "../main/Avion";
import { Ciudad } from "../main/Ciudad";
import { Pasajero } from "../main/Pasajero";
import { Tripulacion } from "../main/Tripulacion";
import { Vuelo } from "../main/Vuelo";

test("Latam tuvo un cantidad de 6 pasajeros en junio", () =>{
    const santiago = new Ciudad("Chile", "Santiago");
    const ezeiza = new Ciudad("Argentina", "Ezeiza");
    const aeropuertoSantiago = new Aeropuerto("Aeropuerto de Santiago", santiago);
    const aeropuertoChile = new Aeropuerto("Aeropuerto de Chile", santiago);
    const aeropuertoEzeiza = new Aeropuerto("Aeropuerto de Ezeiza", ezeiza);
    const latam = new Aerolinea("Latam");
    const avion = new Avion(10);
    const vueloChile= new Vuelo(aeropuertoSantiago, aeropuertoChile, avion, 30, new Date("2018-06-08"), new Tripulacion(), latam);
    const vueloArgentina = new Vuelo(aeropuertoChile, aeropuertoEzeiza, avion, 30, new Date("2018-07-08"), new Tripulacion(), latam);

    for (let i = 0; i < 6; i++) {
        vueloChile.agregarPasajero(new Pasajero());
    }

    vueloArgentina.agregarPasajero(new Pasajero());


    expect(latam.getCantPasajerosMensual(6)).toBe(6);
})