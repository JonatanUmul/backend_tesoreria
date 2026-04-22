//import { getSession } from "../config/sapSession"
import axios from "axios"
import httpsAgent from "../../config/sapAgent.js"
import { getSession } from "../../config/sapSession.js"

export const get_Invoices_sl = async (req, res) => {
    const { session, router }=getSession()
    const DocEntry = req.body.DocEntry
    console.log('socio_Negocio: ', DocEntry)
    if(!session ){
        return res.status(401).json({message: 'No hay sesión activa con SAP'})
    }

    const cookies = [`B1SESSION=${session}`]

    if(router) cookies.push(router)

        try {
            console.log('entro aca:',DocEntry)
            const queryUrl= `${process.env.SAP_BASE_URL}/Invoices?$filter=DocEntry eq ${DocEntry}`
            const response =await axios.get(queryUrl,
                { httpsAgent,
                  headers: {
                    'Cookie': cookies.join('; ')
                } 
            },)
            console.log('response BP SL: ', response)
            res.status(200).json(response.data)
        
        } catch (error) {
            res.status(500).json({message: 'Error en la consulta de BP SL', error: error.message})
         
        }
}