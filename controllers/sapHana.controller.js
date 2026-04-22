import * as sapService from "../services/sapHana.service.js";


export const getCentrosDeCostosController = async (req, res, next) => {

  try {
    const socio_Negocio = req.query.values;
    const data = await sapService.getCentrosDeCostosController(socio_Negocio);
    console.log(data)
    res.status(200).json({
      ok: true,
      data,
      message: "Socio de negocio obtenido correctamente",
    });
  
  } catch (error) {
    console.log('error', error)
    next(error);
  }
};
