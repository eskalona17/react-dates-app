import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const Formulario = ({crearCita}) => {
  //crear state de citas
  const [cita, actualizarCita] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });

  const [error, actualizarError] = useState(false)

  //funcion que se ejecuta cuando el usuario escribe en un input

  const actualizarState = (e) => {
    actualizarCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };
  //extraer los valores
  const { mascota, propietario, fecha, hora, sintomas } = cita;

  //cuando el usuario presiona agregar cita
  const submitCita = (e) => {
    e.preventDefault();

    //validar
    if (
      mascota.trim() === "" ||
      propietario.trim() === "" ||
      fecha.trim() === "" ||
      hora.trim() === "" ||
      sintomas.trim() === ""
    ) {
        actualizarError(true)
      return;
    }
    //eliminar el mensaje previo
    actualizarError(false)

    //asignar un ID
    cita.id= uuidv4();

    //crear la cita
    crearCita(cita)

    //reiniciar el form
    actualizarCita({
        mascota: "",
        propietario: "",
        fecha: "",
        hora: "",
        sintomas: "",
    })

  };

  return (
    <>
      <h2>Crear cita</h2>
      {error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null}
      <form onSubmit={submitCita}>
        <label htmlFor="">Nombre Mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre mascota"
          onChange={actualizarState}
          value={mascota}
        />
        <label htmlFor="">Nombre Dueño</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre dueño mascota"
          onChange={actualizarState}
          value={propietario}
        />
        <label htmlFor="">Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={actualizarState}
          value={fecha}
        />
        <label htmlFor="">Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={actualizarState}
          value={hora}
        />
        <label htmlFor="">Síntomas</label>
        <textarea
          className="u-full-width"
          name="sintomas"
          onChange={actualizarState}
          value={sintomas}
        ></textarea>
        <button type="submit" className="u-full-width button-primary">
          Agregar cita
        </button>
      </form>
    </>
  );
};

export default Formulario;
