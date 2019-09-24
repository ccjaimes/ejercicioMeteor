import { Meteor } from 'meteor/meteor';
import Eventos from '../collections';

Meteor.startup(() => {
  if (Eventos.find().count() === 0) {
    console.log("No hay eventos");
    let dummyEventos = [
      {
        nombre: "Clase 1",
        descripcion: "Tenemos BI",
        responsable: "Cristhian Peña",
        fechaInicio: new Date(),
        fechaFin: new Date(new Date().getTime() + 100 * 60000),
        ubicacion: "uniandes"
      },
      {
        nombre: "Clase 2",
        descripcion: "Tenemos Web",
        responsable: "Cristhian Peña",
        fechaInicio: new Date(new Date().getTime() + 120 * 60000),
        fechaFin: new Date(new Date().getTime() + 220 * 60000),
        ubicacion: "uniandes"
      }
    ];

    dummyEventos.forEach(e => {
      Eventos.insert(e);
    })
  }
});