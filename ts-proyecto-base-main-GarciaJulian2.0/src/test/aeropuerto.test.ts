import { Aerolinea } from "../main/Aerolinea";
import { Aeropuerto } from "../main/Aeropuerto";
import { Avion } from "../main/Avion";
import { Ciudad } from "../main/Ciudad";
import { Escala } from "../main/Escala";
import { Pasajero } from "../main/Pasajero";
import { Tripulacion } from "../main/Tripulacion";
import { Viaje } from "../main/Viaje";
import { Vuelo } from "../main/Vuelo";

test("3 vuelos en un dia en el aeropuerto de santiago", () => {
    const santiago = new Ciudad("Chile", "Santiago");
    const ezeiza = new Ciudad("Argentina", "Ezeiza");
    const aeropuertoSantiago = new Aeropuerto("Aeropuerto de Santiago", santiago);
    const aeropuertoChile = new Aeropuerto("Aeropuerto de Chile", santiago);
    const aeropuertoEzeiza = new Aeropuerto("Aeropuerto de Ezeiza", ezeiza);
    const latam = new Aerolinea("Latam");

    const pasajero = new Pasajero();
    const avion = new Avion(10);
    const vueloChile= new Vuelo(aeropuertoSantiago, aeropuertoChile, avion, 30,new Date("2018-07-08"), new Tripulacion(), latam);
    const vueloArgentina = new Vuelo(aeropuertoEzeiza, aeropuertoSantiago, avion, 30, new Date("2018-07-08"), new Tripulacion(),latam);
    const vueloChile2 = new Vuelo(aeropuertoChile, aeropuertoSantiago, avion, 30, new Date("2018-07-08"), new Tripulacion(), latam);
    
    const viaje = new Viaje();
    viaje.addVuelo(vueloChile);
    viaje.addVuelo(vueloArgentina);
    
    
    expect(aeropuertoSantiago.getCantVuelosEnUnDia(new Date("2018-07-08"))).toBe(3);
});


test("1 escala para el aeropuerto con menos escalas", () => {
    const santiago = new Ciudad("Chile", "Santiago");
    const ezeiza = new Ciudad("Argentina", "Ezeiza");
    const aeropuertoSantiago = new Aeropuerto("Aeropuerto de Santiago", santiago);
    const aeropuertoChile = new Aeropuerto("Aeropuerto de Chile", santiago);
    const aeropuertoEzeiza = new Aeropuerto("Aeropuerto de Ezeiza", ezeiza);
    const viaje1 = new Viaje();
    const viaje2 = new Viaje();
    const latam = new Aerolinea("Latam");

    const avion = new Avion(20);

    const vuelo1 = new Vuelo(aeropuertoSantiago, aeropuertoChile, avion, 30, new Date("2018-07-08"), new Tripulacion(), latam);
    const escala1 = new Escala(aeropuertoChile, 30);
    const vuelo2 = new Vuelo(aeropuertoChile, aeropuertoSantiago, avion, 30, new Date("2018-07-08"), new Tripulacion(), latam);
    const escala2 = new Escala(aeropuertoSantiago, 30);

    const vuelo3 = new Vuelo(aeropuertoSantiago, aeropuertoEzeiza, avion, 30, new Date("2018-07-08"), new Tripulacion(), latam);
    const escala3 = new Escala(aeropuertoEzeiza, 20);

    viaje1.addVuelo(vuelo1);
    viaje1.addVuelo(vuelo2);
    viaje1.addEscala(escala1);
    viaje1.addEscala(escala2);

    viaje2.addEscala(escala3);
    viaje2.addVuelo(vuelo3);

})