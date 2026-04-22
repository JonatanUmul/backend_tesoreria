import { pool } from "../../config/connection.js";
import axios from "axios";
import https from "https";
import path from "path";

const getSocioNegocio = async ( req, res ) => {
    
    const agent = new https.Agent({ rejectUnauthorized: false });
    try {
        const response = await axios.get(`https://www.eco-aplicaciones.com:4432/sapconn/BusinessParthner`,
          {
            httpsAgent: agent,
            headers: { "Content-Type": "application/json" },
            timeout: 30000, // 30 segundos
          }
    );
    console.log('RESPONSE: ', response)
    
    return res.status(200).json({
      error: 0,
      data: response.data,
    }); 
    } catch (error) {
    return res.status(500).json({
      error: 0,
      data: [],
    }); 
    }
}

export {
    getSocioNegocio,
}