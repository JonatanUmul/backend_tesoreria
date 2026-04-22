import axios from "axios";
import httpsAgent from "../../config/sapAgent.js";
import https from "https";

const get_Disponibilidad_Bodega = async (req, res) => {
  const agent = new https.Agent({ rejectUnauthorized: false });
  const itemCode = req.body.ItemCode;
  const WhsCode = req.body.WhsCode;


  try {
    const url = `${process.env.SAP_HANA}/disponible_Items`;
    console.log(url)
    const response = await axios.get(
      url,
      {
        httpsAgent: agent,
      },
     
    );
    res.status(200).json({
      ok: true,
      count: response.data.length,
      data: response.data,
    });
    console.log(response.data);
  } catch (error) {
    console.log(error)
    res.status(500).json({
      ok: false,
      mensaje: "Error del servidor",
      error: error.message
    });
  }
};

export { get_Disponibilidad_Bodega };
