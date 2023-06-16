import { Aerolinea } from '../main/Aerolinea';
import { Aeropuerto } from '../main/Aeropuerto';
import { Avion } from '../main/Avion';
import { Pasajero } from '../main/Pasajero';
import { Tripulacion } from '../main/Tripulacion';
import { Vuelo } from '../main/Vuelo';
import { Ciudad } from './../main/Ciudad';
test("El pasajero visito 2 veces santiago", () => {
    const santiago = new Ciudad("Chile", "Santiago");
    const aeropuertoSantiago = new Aeropuerto("Aeropuerto de Santiago", santiago);
    const aeropuertoChile = new Aeropuerto("Aeropuerto de Chile", santiago);
    const pasajero = new Pasajero();
    const avion = new Avion(10);
    const latam = new Aerolinea("Latam");
    const vuelo = new Vuelo(aeropuertoSantiago, aeropuertoChile, avion, 30, new Date("1974-08-06"), new Tripulacion(), latam);
    vuelo.agregarPasajero(pasajero);

    expect(pasajero.getCantVecesEnCiudad(santiago)).toBe(2);
})


test("El pasajero realizo 2 vuelos", () =>{
    const santiago = new Ciudad("Chile", "Santiago");
    const aeropuertoSantiago = new Aeropuerto("Aeropuerto de Santiago", santiago);
    const aeropuertoChile = new Aeropuerto("Aeropuerto de Chile", santiago);
    const julian = new Pasajero();
    const avion = new Avion(10);
    const latam = new Aerolinea("Latam");
    const vuelo = new Vuelo(aeropuertoSantiago, aeropuertoChile, avion, 30, new Date("1974-08-06"), new Tripulacion(),latam);
    const vuelo2 = new Vuelo(aeropuertoChile, aeropuertoSantiago , avion, 30, new Date("1974-08-06"), new Tripulacion(), latam);
    vuelo.agregarPasajero(julian);
    vuelo2.agregarPasajero(julian);

    expect(julian.getCantVuelos()).toBe(2)
})