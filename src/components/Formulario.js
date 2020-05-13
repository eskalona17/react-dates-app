import React, { useState } from "react";

const Formulario = () => {
  //crear state de citas
  const [cita, actualizarCita] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });

  //funcion que se ejecuta cuando el usuario escribe en un input

  const actualizarState = (e) => {
    actualizarCita({
        ...cita,
        [e.target.name]: e.target.value
    })
  };
  return (
    <>
      <h2>Crear cita</h2>
      <form action="">
        <label htmlFor="">Nombre Mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre mascota"
          onChange={actualizarState}
        />
        <label htmlFor="">Nombre Dueño</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre dueño mascota"
          onChange={actualizarState}
        />
        <label htmlFor="">Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={actualizarState}
        />
        <label htmlFor="">Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={actualizarState}
        />
        <label htmlFor="">Síntomas</label>
        <textarea className="u-full-width" name="sintomas"></textarea>
        <button type="submit" className="u-full-width button-primary">
          Agregar cita
        </button>
      </form>
    </>
  );
};

export default Formulario;
