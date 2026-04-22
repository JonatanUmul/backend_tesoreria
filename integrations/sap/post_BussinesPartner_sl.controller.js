//import { getSession } from "../config/sapSession"
import axios from "axios"
import httpsAgent from "../../config/sapAgent.js"
import { getSession } from "../../config/sapSession.js"

export const get_BussinesPartner_sl = async (req, res) => {
    const { session, router }=getSession()
    const socio_Negocio = req.query.socio_Negocio
   
    
    if(!session ){
        return res.status(401).json({ok: false, message: 'No fue posible establecer conexión con SAP. La sesión no está activa o el servicio no se encuentra disponible. Por favor, contacta al administrador del sistema.'})
    }

    const cookies = [`B1SESSION=${session}`]

    if(router) cookies.push(router)

        try {
           
            const queryUrl= `${process.env.SAP_BASE_URL}/BusinessPartners('${socio_Negocio}')?$select=CardCode,AdditionalID,CardName,CardType,GroupCode,Address,MailAddress,Phone1,ContactPerson,Notes,EmailAddress`
            const response = await axios.get(queryUrl,
                { httpsAgent,
                  headers: {
                    'Cookie': cookies.join('; ')
                } 
            },)
            console.log('response BP SL: ', response.data.CardCode)
            res.status(200).json({ok:true, reponse:response.data})
        
        } catch (error) {
            res.status(500).json({ok: false, message: 'Error en la consulta de BP SL', error: error.message})
         
        }
}