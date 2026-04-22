import { loginSapIntegration } from "../integrations/sap/sapAuth.integration.js";
import { getBusinessPartnerIntegration } from "../integrations/sap/bussinessParthners.integration.js";
import { createSapOrderIntegration, createSapInvoicesIntegration, statusInvoicesInSapController } from "../integrations/sap/sapOrders.integration.js";
//import { getItemInventoryIntegration } from "../integrations/sap/sapInventory.integration.js";*/
import { buildSapOrderPayload } from "../utils/buildSapOrderPayload.js";

export const loginSap = async () => {
  return await loginSapIntegration();
};

export const getBusinessPartner = async (socio_Negocio) => {
  if (!socio_Negocio) {
    const err = new Error("El código del socio de negocio es requerido");
    err.status = 400;
    throw err;
  }

  return await getBusinessPartnerIntegration(socio_Negocio);
};

export const getInventoryByItem = async (itemCode) => {
  if (!itemCode) {
    const err = new Error("El ItemCode es requerido");
    err.status = 400;
    throw err;
  }

  return await getItemInventoryIntegration(itemCode);
};

export const createSalesOrderInSap = async (payload) => {
  if (!payload?.CardCode) {
    const err = new Error("CardCode es requerido");
    err.status = 400;
    throw err;
  }

  if (!payload?.items || !Array.isArray(payload.items) || payload.items.length === 0) {
    const err = new Error("La orden debe incluir items");
    err.status = 400;
    throw err;
  }

  if (!payload?.bodega) {
    const err = new Error("La bodega es requerida");
    err.status = 400;
    throw err;
  }

  const sapPayload = buildSapOrderPayload(payload);

  return await createSapOrderIntegration(sapPayload);
};

export const createInvoicesInSapController = async (payload) => {
  if (!payload?.CardCode) {
    const err = new Error("CardCode es requerido");
    err.status = 400;
    throw err;
  }

  if (!payload?.items || !Array.isArray(payload.items) || payload.items.length === 0) {
    const err = new Error("La orden debe incluir items");
    err.status = 400;
    throw err;
  }

  if (!payload?.bodega) {
    const err = new Error("La bodega es requerida");
    err.status = 400;
    throw err;
  }

  const sapPayload = buildSapOrderPayload(payload);

  return await createSapInvoicesIntegration(sapPayload);
};

export const getStatusInvoicesInSapController = async (docNum) => {
  if(!docNum){
     const err = new Error("DocNum es requerido");
    err.status = 400;
    throw err;
  }

  return await statusInvoicesInSapController(docNum)
}