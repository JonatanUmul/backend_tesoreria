 import axios from "axios";  
import httpsAgent from "../../config/sapAgent.js";
import { getSession } from "../../config/sapSession.js";

const get_Disponibilidad_Bodega=async(req,res)=>{
    const item=req.query.itemCode
    console.log('requerimiento de modelo en el backend',req.query.itemCode)
  
    const { session, router }=getSession();
    if(!session){
        return res.status(401).json({message:'No hay sesión activa con SAP'});
    }
    
    const cookies = [`B1SESSION=${session}`];
    if(router) cookies.push(router);

    try {
        const url=`${process.env.SAP_BASE_URL}/Items('${item}')?$select=ItemCode,ItemName,ItemWarehouseInfoCollection`
        const response= await axios.get(url,{
            httpsAgent,
            headers:{
                'Cookie': cookies.join('; ')
            }

        })
        res.status(200).json({
            ok:true,
            count:response.data.length,
            data:response.data
        })
        console.log(response.data)
    } catch (error) {
        res.status(500).json({
            ok:false,
            mensaje:'Error del servidor',
            error: error.message
        })
    }

}

export{
    get_Disponibilidad_Bodega
}   