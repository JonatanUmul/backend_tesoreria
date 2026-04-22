import axios from "axios";
import httpsAgent from "../../config/sapAgent.js";
import { setSession } from "../../config/sapSession.js";

export const loginSapIntegration = async () => {
  const body = {
    CompanyDB: process.env.SAP_COMPANY_DB,
    UserName: process.env.SAP_USER,
    Password: process.env.SAP_PASSWORD,
    Language: 25,
  };
console.log(body)
  try {
    const response = await axios.post(
      `${process.env.SAP_BASE_URL}/Login`,
      body,
      {
        httpsAgent,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const sessionId = response.data.SessionId;
    const routeCookie = response.headers["set-cookie"]?.find((c) =>
      c.includes("ROUTEID")
    );
    const routerId = routeCookie ? routeCookie.split(";")[0] : null;

    setSession(sessionId, routerId);

    return {
      sessionId,
      routerId,
    };
  } catch (error) {
    console.log(error)
    const err = new Error("No fue posible iniciar sesión con SAP");
    err.status = 500;
    err.details = error.response?.data || error.message;
    throw err;
  }
};