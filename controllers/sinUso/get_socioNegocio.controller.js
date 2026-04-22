import { escape } from "mysql2"
import { pool } from "../../config/connection.js"

export const getSocioNegocio=async(req,res)=>{
    const estado = req.query.estado
console.log('en soccio de negocio',estado)
    const qr=`select * from get_sociosDeNegocio where estado=?`
    try {
        const [consulta]=await pool.query(qr, [estado])
        console.log('bussiones',consulta)
            return res.status(200).json({
            ok:true,
            count:consulta.length,
            consulta:consulta
        })
    } catch (error) {
        console.log(error)
       return res.status(500).json({
            ok:false,
            message:'Error del sistema',
            error:error.message
        })
    }
}

