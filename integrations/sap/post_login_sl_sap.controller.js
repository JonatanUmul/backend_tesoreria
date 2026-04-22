import axios from "axios";
import httpsAgent from "../../config/sapAgent.js";
import { setSession } from "../../config/sapSession.js";

export const post_login_sl_sap = async (req, res) => {
  const body = {
    CompanyDB: process.env.SAP_COMPANY_DB,
    Password: process.env.SAP_PASSWORD,
    UserName: process.env.SAP_USER,
    Languaje: "25",
  };

  try {
    const sapUrl = process.env.SAP_BASE_URL;
    const response = await axios.post(`${sapUrl}/Login`, body, {
      httpsAgent,
      headers: { "Content-Type": "application/json" },
    });
    const sessionId = response.data.SessionId;
    const cooockies = response.headers["set-cookie"]?.find((c) =>
      c.includes("ROUTEID"),
    );
    const routerId = cooockies ? cooockies.split(";")[0] : null;
    setSession(sessionId, routerId);

    res.status(200).json({ message: "Login successful", sessionId, routerId });
  } catch (error) {
    res.status(500).json({ message: "Login failed", error: error.message });
    console.error("Error during SAP login:", error);
  }
};
