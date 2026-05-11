import * as logDeModificaciones from "../repositories/logDeModificaciones.repository.js";

export const modificaciones = async (value) => {
  console.log('1sed',value)
  if (!value)
    throw new Error(
      "El parametro es requerido",
    );
  return await logDeModificaciones.getLogModificaciones(value);
};

export const post_modificaciones = async (value) => {
  console.log('post_modificaciones',value)
  if (!value)
    throw new Error(
      "Sin log para procesar",
    );
  return await logDeModificaciones.postLogModificaciones(value);
};

