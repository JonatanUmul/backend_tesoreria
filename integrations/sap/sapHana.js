import axios from "axios";
import https from "https";

export const getCentrosCostosController = async (socio_Negocio) => {

  const agent = new https.Agent({ rejectUnauthorized: false });

  const response = await axios.get(
    `${process.env.SAP_HANA}/centrosCostos`,
    {
      httpsAgent: agent,
      headers: {
        "Content-Type": "application/json"
      },
      data: {
        cardCode: socio_Negocio
      }
    }
  );

  return response.data;
};