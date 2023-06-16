import { Aerolinea } from "../main/Aerolinea";
import { Aeropuerto } from "../main/Aeropuerto";
import { Avion } from "../main/Avion";
import { Ciudad } from "../main/Ciudad";
import { Tripulacion } from "../main/Tripulacion";
import { Vuelo } from "../main/Vuelo";

test("La tripulacion realizo 3 vuelos en agosto", () =>{
    const latam = new Aerolinea("Latam");
    const santiago = new Ciudad("Chile", "Santiago");
    const aeropuertoSantiago = new Aeropuerto("Aeropuerto de Santiago", santiago);
    const aeropuertoChile = new Aeropuerto("Aeropuerto de Chile", santiago);
    const avion = new Avion(10);
    const tripulacionEstrella = new Tripulacion();
    const vuelo = new Vuelo(aeropuertoSantiago, aeropuertoChile, avion, 30, new Date("2018-07-08"), tripulacionEstrella, latam);
    const vuelo1 = new Vuelo(aeropuertoSantiago, aeropuertoChile, avion, 30, new Date("2018-07-08"), tripulacionEstrella, latam);
    const vuelo2 = new Vuelo(aeropuertoSantiago, aeropuertoChile, avion, 30, new Date("2018-08-08"), tripulacionEstrella, latam);
    const vuelo3 = new Vuelo(aeropuertoSantiago, aeropuertoChile, avion, 30, new Date("2018-07-08"), tripulacionEstrella, latam);

    expect(tripulacionEstrella.getCantVuelosMensual(7)).toBe(3);
})