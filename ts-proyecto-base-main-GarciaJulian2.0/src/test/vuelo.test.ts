import { Pasajero } from './../main/Pasajero';
import { Avion } from "../main/Avion"
import { Vuelo } from '../main/Vuelo';
import { Aeropuerto } from '../main/Aeropuerto';
import { Ciudad } from '../main/Ciudad';
import { Tripulacion } from '../main/Tripulacion';
import { Aerolinea } from '../main/Aerolinea';

test("Capacidad del 20% de un vuelo", () => {
    const santiago = new Ciudad("Chile", "Santiago");
    const aeropuertoSantiago = new Aeropuerto("Aeropuerto de Santiago", santiago);
    const aeropuertoChile = new Aeropuerto("Aeropuerto de Chile", santiago);
    const latam = new Aerolinea("Latam");
    const avion = new Avion(10);
    const vuelo = new Vuelo(aeropuertoSantiago, aeropuertoChile, avion, 30, new Date("2018-07-08"), new Tripulacion(), latam);

    for(var i = 0; i < 2; i++){
        var pasajero = new Pasajero()
        vuelo.agregarPasajero(pasajero)
    }

    expect(vuelo.capacidadOcupadaPorPasajeros()).toBe(20);
})

