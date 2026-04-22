import { sapRequest } from "./sapClient.js";

export const createSapOrderIntegration = async (payload) => {
  return await sapRequest({
    method: "POST",
    endpoint: "/Orders",
    data: payload,
  });
};

export const createSapInvoicesIntegration = async (payload) => {
  return await sapRequest({
    method: "POST",
    endpoint: "/Invoices",
    data: payload,
  });
};

export const statusInvoicesInSapController = async (docNum) => {
  return await sapRequest({
    method: "POST",
    endpoint: `/Invoices?$filter=DocNum eq ${docNum}`
  })
}