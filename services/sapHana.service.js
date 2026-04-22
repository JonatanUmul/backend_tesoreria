import { getCentrosCostosController } from "../integrations/sap/sapHana.js"

export const getCentrosDeCostosController = async (socio_Negocio) => {
  if (!socio_Negocio) {
    const err = new Error("CardCode es requerido");
    err.status = 400;
    throw err;
  }


  return await getCentrosCostosController(socio_Negocio);
};