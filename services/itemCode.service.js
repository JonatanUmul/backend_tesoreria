import * as itemCodeRepository from "../repositories/itemCode.repository.js";

export const getItemCode = async (estado, cardCode_cadena) => {
  if (!estado || !cardCode_cadena)
    throw new Error(
      "El parametro estado y código de socio de negocio es requerido",
    );
  return await itemCodeRepository.getItemCode(estado, cardCode_cadena);
};

export const getItemCodeId = async (id) => {
  if (!id)
    throw new Error(
      "El número de Id es requerido.",
    );
  return await itemCodeRepository.getItemCodeId(id);
};

export const postItemCode = async (datos) => {
  if (
    !datos.cardCode_cadena ||
    !datos.sku_cliente ||
    !datos.descripcion_cliente ||
    !datos.sku_ecofiltro ||
    !datos.descripcion_ecofiltro
  )
    throw new Error(
    "Los parámetros obligatorios son: CardCode, Nombre_cadena, sku_cliente, descripcion_cliente, sku_ecofiltro y descripcion_ecofiltro."
    );
  return await itemCodeRepository.postItemCode(datos);
};

export const putItemCode = async (datos) => {
  if (
    !datos.id || !datos.estado
  )
    throw new Error(
    "El id y estado, son requerido"
    );
  return await itemCodeRepository.putItemCode(datos);
};

export const updateItemCode = async (datos) => {
  if (
    !datos.datos.value.id
  )
    throw new Error(
    "El id es requerido"
    );
  return await itemCodeRepository.updateItemCode(datos);
};
