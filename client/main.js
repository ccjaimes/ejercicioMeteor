import Eventos from '../collections';
import './main.html';

Template.lista.helpers({
  eventosCollection: () => {
    return Eventos.find({});
  }
});

Template.formulario.events({
  'submit form': (event) => {
    event.preventDefault();
    const target = event.target;
    let ingreso = {
      nombre: target.nombre.value,
      descripcion: target.descripcion.value,
      responsable: target.responsable.value,
      fechaInicio: new Date(target.fechaInicio.value),
      fechaFin: new Date(target.fechaFin.value),
      ubicacion: target.ubicacion.value
    }
    Eventos.insert(ingreso);
    event.target.nombre.value = "";
    event.target.descripcion.value = "";
    event.target.responsable.value = "";
    event.target.fechaInicio.value = "";
    event.target.fechaFin.value = "";
    event.target.ubicacion.value = "";
  }
});
