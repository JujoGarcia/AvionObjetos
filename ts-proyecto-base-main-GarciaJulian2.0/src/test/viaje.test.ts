import { Aerolinea } from "../main/Aerolinea";
import { Aeropuerto } from "../main/Aeropuerto";
import { Avion } from "../main/Avion";
import { Ciudad } from "../main/Ciudad";
import { Escala } from "../main/Escala";
import { Pasajero } from "../main/Pasajero";
import { Tripulacion } from "../main/Tripulacion";
import { Viaje } from "../main/Viaje";
import { Vuelo } from "../main/Vuelo";

test("Duracion de un viaje es de 90 minutos", () => {
    const santiago = new Ciudad("Chile", "Santiago");
    const ezeiza = new Ciudad("Argentina", "Ezeiza");
    const aeropuertoSantiago = new Aeropuerto("Aeropuerto de Santiago", santiago);
    const aeropuertoChile = new Aeropuerto("Aeropuerto de Chile", santiago);
    const aeropuertoEzeiza = new Aeropuerto("Aeropuerto de Ezeiza", ezeiza);
    const latam = new Aerolinea("Latam");
    const pasajero = new Pasajero();
    const avion = new Avion(10);
    const vueloChile= new Vuelo(aeropuertoSantiago, aeropuertoChile, avion, 30, new Date("2018-07-08"), new Tripulacion(), latam);
    const vueloArgentina = new Vuelo(aeropuertoChile, aeropuertoEzeiza, avion, 30, new Date("2018-07-08"), new Tripulacion(), latam);
    const escalaChileArgentina = new Escala(aeropuertoChile, 30);
    
    const viaje = new Viaje();
    viaje.addVuelo(vueloChile);
    viaje.addVuelo(vueloArgentina);
    viaje.addEscala(escalaChileArgentina);
    
    vueloChile.agregarPasajero(pasajero);
    pasajero.addVuelo(vueloChile);
    pasajero.addVuelo(vueloArgentina);

    expect(viaje.duracionTotalViajeMinutos()).toBe(90);
});