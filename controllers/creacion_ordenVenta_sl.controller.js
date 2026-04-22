//import { getSession } from "../config/sapSession"
import axios from "axios";
import httpsAgent from "../config/sapAgent.js";
import { getSession } from "../config/sapSession.js";
import { formatFecha } from "../utils/FormatearFecta.js";
export const creacion_ov_sl = async (req, res) => {
  const { session, router } = getSession();
  const payload = req.body.payload;

  if (!session) {
    return res
      .status(401)
      .json({ ok: false, message: "No hay sesión activa con SAP" });
  }
  function resumirTexto(texto, max = 20) {
  if (!texto) return "";
  if (texto.length <= max) return texto;

  let recorte = texto.substring(0, max);
  return recorte.substring(0, recorte.lastIndexOf(" "));
}

const para_tienda_resumido = resumirTexto(payload.para_tienda, 20);

  const cookies = [`B1SESSION=${session}`];

  if (router) cookies.push(router);

  const camposRequeridos = {
    //numeroPedido: payload.numeroPedido,
    CardCode: payload.CardCode,
    U_DoctoNom: payload.U_DoctoNom,
    U_OC: payload.U_OC,
    //CardCode: null,
    bodega: payload.bodega,
    direccion_entrega: payload.direccion_entrega,
    U_FacNit: payload.U_FacNit,
    Phone1: payload.Phone1,
    Item: payload.items,
  };

  const payloadSL = {
    DocType: "dDocument_Items",
    DocDate: formatFecha(payload.date_oc),
    DocDueDate: formatFecha(payload.date_oc),
    U_Nombre: payload.U_DoctoNom,
    CardCode: camposRequeridos.CardCode,
    JournalMemo: `Pedidos de cliente - ${camposRequeridos.CardCode}`,
    Comments: `Pedidos de cliente - ${camposRequeridos.CardCode}`,
    PriceMode: "pmNet",
    U_Telefono: payload.Phone1,
    U_Tienda: para_tienda_resumido,
    //U_Direccion: camposRequeridos.direccion_entrega ? camposRequeridos.direccion_entrega :payload.direccion,
    U_Direccion: payload.direccion,
    U_Recurrencia: "Recurrente",
    U_ExternalOrderRef: `H2H-${camposRequeridos.U_OC}`,
    U_OC:camposRequeridos.U_OC,
    U_EMail: payload.U_Email,
    //"U_Nit": "2674652-2",
    U_DocNom: payload.U_DoctoNom,
    U_FacNit: camposRequeridos.U_FacNit,
    //"U_DocNom": "SULY AMARILES ORTIZ URBINA DE ORDOÑEZ",
    U_V3_FCE_FBODepto:camposRequeridos.CardCode=='C00162' ? camposRequeridos.U_OC : null,
    U_V3_FCE_FBOOC: camposRequeridos.CardCode=='C00162' ? camposRequeridos.U_OC : null,
    U_V3_FCE_FBOFecha: camposRequeridos.CardCode=='C00162' ? formatFecha(payload.date_oc): null,
    U_FE_Res: "Fel-Campo",
    DocCurrency: "QTZ",
    DocumentLines: camposRequeridos.Item.map((a) => ({
      ItemCode: a.modelo,
      // "descripcion":a.descripcion,
      Quantity: a.cantidad,
      //Quantity: 0,
      Currency: "QTZ",
      WarehouseCode: camposRequeridos.bodega,
      CostingCode: "D01.002",
      TaxCode: "IVA",
      TaxType: "tt_Yes",
      UnitPrice: a.precio,
      CostingCode2: "D03.049",
      CostingCode3: "D04.105",
    })),
  };


  const camposVacios = Object.entries(camposRequeridos)
    .filter(
      ([_, values]) => values == undefined || values == null || values == "" || values == 0,
    )
    .map(([key]) => key);

  if (camposVacios.length > 0) {
    return res.status(400).json({
      ok: false,
      status: 400,
      message: `Campos Vacios, por favor valide los siguientes datos ${camposVacios}`,
        error: {
        Type: "Not Found",
        error: `Campos Vacios, por favor valide los siguientes datos ${camposVacios}`
      }
    });
  }

  try {
    const queryUrl = `${process.env.SAP_BASE_URL}/Orders`;

   const response = await axios.post(queryUrl, payloadSL, {
      httpsAgent,
      headers: {
        Cookie: cookies.join("; "),
      },
    });

    res.status(201).json({
      ok: true,
      status: 201,
      message: "Orden de Venta creada correctamente",
      response: response.data,
    });
  } catch (error) {
    res.status(400).json({
      ok: false,
      status: 400,
      message: `Error en la consulta de OV SL, ${error.response.data.error.message.value}`,
      error: {
        Type: "Not Found",
        error: error.response.data.error.message,
      },
    });
  }
};
