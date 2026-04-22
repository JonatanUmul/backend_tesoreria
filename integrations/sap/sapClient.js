import axios from "axios";
import httpsAgent from "../../config/sapAgent.js";
import { getSession } from "../../config/sapSession.js";
import { loginSapIntegration } from "./sapAuth.integration.js";

const URL=process.env.SAP_BASE_URL
console.log('url',URL)
const buildCookies = () => {
  const { session, router } = getSession();

  if (!session) return null;

  const cookies = [`B1SESSION=${session}`];
  if (router) cookies.push(router);

  return cookies.join("; ");
};

export const sapRequest = async ({ method, endpoint, data = null, retry = true }) => {
  let cookieHeader = buildCookies();

  if (!cookieHeader) {
    await loginSapIntegration();
    cookieHeader = buildCookies();
  }

  try {
    const response = await axios({
      method,
      url: `${URL}${endpoint}`,
      data,
      httpsAgent,
      headers: {
        Cookie: cookieHeader,
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    const status = error.response?.status;

    if (status === 401 && retry) {
      await loginSapIntegration();

      return await sapRequest({
        method,
        endpoint,
        data,
        retry: false,
      });
    }

    const err = new Error(
      error.response?.data?.error?.message?.value ||
      error.response?.data?.message ||
      "Error en SAP"
    );

    err.status = status || 500;
    err.details = error.response?.data;
    throw err;
  }
};