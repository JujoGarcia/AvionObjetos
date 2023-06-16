import { Aerolinea } from '../main/Aerolinea';
import { Avion } from '../main/Avion';
import { Pasajero } from '../main/Pasajero';
import { Tripulacion } from '../main/Tripulacion';
import { Vuelo } from '../main/Vuelo';
import { Aeropuerto } from './../main/Aeropuerto';
import { Ciudad } from './../main/Ciudad';
test("Cantidad de aeropuertos en una ciudad es de 2", ()=>{
    const santiago = new Ciudad("Chile","Santiago de Chile");
    const aeropuertoSantiago = new Aeropuerto("Aeropuerto de Santiago", santiago);
    const aeropuertoChile = new Aeropuerto("Aeropuerto de Chile", santiago);

    
    expect(santiago.getCantAeropuertos()).toBe(2);

})


test("5 pasajeros en la ciudad de santiago", () => {
    const santiago = new Ciudad("Chile","Santiago de Chile");
    const aeropuertoSantiago = new Aeropuerto("Aeropuerto de Santiago", santiago);
    const aeropuertoChile = new Aeropuerto("Aeropuerto de Chile", santiago);
    const latam = new Aerolinea("Latam");
    const avion = new Avion(20);
    const vuelo1 = new Vuelo(aeropuertoChile, aeropuertoSantiago, avion, 30, new Date('2023-06-15'), new Tripulacion(), latam);
    const vuelo2 = new Vuelo(aeropuertoChile, aeropuertoSantiago, avion, 30, new Date('2023-06-15'), new Tripulacion(),latam);

    for (let i = 0; i < 3; i++) {
        vuelo1.agregarPasajero(new Pasajero());
        
    }

    for (let i = 0; i < 2; i++) {
        vuelo2.agregarPasajero(new Pasajero());
        
    }



    expect(santiago.getCantVisitantesEnDia(new Date('2023-06-15'))).toBe(5);
})