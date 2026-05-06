import { formatFecha } from "../utils/FormatearFecta.js";
import { toDay } from "./toDay.js";
const resumirTexto = (texto, max = 20) => {
  if (!texto) return "";
  if (texto.length <= max) return texto;

  let recorte = texto.substring(0, max);
  return recorte.substring(0, recorte.lastIndexOf(" ")) || recorte;
};
const hoy= toDay()

export const buildSapOrderPayload = (payload) => {
  console.log('en paylod',payload)
  const tipoDoc= payload.tipoDoc
  const paraTiendaResumido = resumirTexto(payload.para_tienda, 20);
  const body= tipoDoc=='oc' ?
  {
    DocType: "dDocument_Items",
    /*DocDate: formatFecha(payload.date_oc),
    DocDueDate: formatFecha(payload.date_oc),*/
    DocDate: hoy,
    DocDueDate:hoy,
    U_Nombre: payload.U_DoctoNom,
    CardCode: payload.CardCode,
    JournalMemo: `Pedidos de cliente - ${payload.CardCode}`,
    Comments: `Pedidos de cliente - ${payload.CardCode}`,
    PriceMode: "pmNet",
    U_Telefono: payload.Phone1,
    U_Tienda: paraTiendaResumido,
    U_Direccion: payload.direccion,
    U_Recurrencia: "Recurrente",
    U_ExternalOrderRef: `H2H-${payload.U_OC}`,
    U_OC: payload.U_OC,
    U_EMail: payload.U_Email,
    U_DocNom: payload.U_DoctoNom,
    U_FacNit: payload.U_FacNit,
    U_Nit: payload.U_FacNit,
    U_V3_FCE_FBODepto: payload.CardCode === "C00162" ? 'COMPRAS' : null,
    U_V3_FCE_FBOOC: payload.CardCode === "C00162" ? payload.U_OC : null,
    U_V3_FCE_FBOFecha: payload.CardCode === "C00162" ? formatFecha(payload.date_oc) : null,
    U_FE_Res: "Fel-Distribuidores",
    DocCurrency: "QTZ",
    DocumentLines: payload.items.map((item) => ({
      ItemCode: item.modelo,
      Quantity: item.cantidad,
      Currency: "QTZ",
      WarehouseCode: payload.bodega,
      TaxCode: "IVA",
      TaxType: "tt_Yes",
      UnitPrice: item.precio,
      CostingCode: item.cc_departamento,
      CostingCode2: item.cc_vendedor,
      CostingCode3: item.cc_canal,
    })),
  }:
   {
    DocType: "dDocument_Items",
    /*DocDate: formatFecha(payload.date_oc),
    DocDueDate: formatFecha(payload.date_oc),*/
    Series: 133,
    DocDate: hoy,
    DocDueDate:hoy,
    U_Nombre: payload.U_DoctoNom,
    CardCode: payload.CardCode,
    DocObjectCode: "oInvoices",
    ReserveInvoice: "tYES",
    JournalMemo: `Pedidos de cliente - ${payload.CardCode}`,
    Comments: `Pedidos de cliente - ${payload.CardCode}`,
    PriceMode: "pmNet",
    U_Telefono: payload.Phone1,
    U_Tienda: paraTiendaResumido,
    U_Direccion: payload.direccion,
    U_Recurrencia: "Recurrente",
    U_ExternalOrderRef: `H2H-${payload.U_OC}`,
    U_OC: payload.U_OC,
    U_EMail: payload.U_Email,
    U_DocNom: payload.U_DoctoNom,
    U_FacNit: payload.U_FacNit,
    U_Nit: payload.U_FacNit,
    //U_V3_FCE_Enlace: "https://report.feel.com.gt/ingfacereport/ingfacereport_documento?uuid=7D1B95DC-0022-43B2-B5D0-E3F40E5C543A",
    U_V3_FCE_FBODepto: payload.CardCode === "C00162" ? 'COMPRAS' : null,
    U_V3_FCE_FBOOC: payload.CardCode === "C00162" ? payload.U_OC : null,
    U_V3_FCE_FBOFecha: payload.CardCode === "C00162" ? formatFecha(payload.date_oc) : null,
    U_FE_Res: "Fel-Distribuidores",
    DocCurrency: "QTZ",
    DocumentLines: payload.items.map((item) => ({
      ItemCode: item.modelo,
      Quantity: item.cantidad,
      Currency: "QTZ",
      WarehouseCode: payload.bodega,
      TaxCode: "IVA",
      U_Tipo: "B",
      UnitPrice: item.precio,
      CostingCode: item.cc_departamento,
      CostingCode2: item.cc_vendedor,
      CostingCode3: item.cc_canal,
    })),
  };

  return body;
};