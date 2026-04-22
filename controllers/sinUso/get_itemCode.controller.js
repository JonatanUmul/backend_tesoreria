import { escape } from "mysql2"
import { pool } from "../../config/connection.js"

export const getItemCode=async(req,res)=>{
    const estado = req.query.estado
    const cardCode_cadena = req.query.cardCode_cadena
    
    const option=req.query.opcion
    const qr=`select * from get_itemCode where estado=? AND cardCode_cadena=?`
    try {
        const [consulta]=await pool.query(qr, [estado, cardCode_cadena])
        console.log(consulta)
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

export const put_ov_pedidoHeaderCompleto=async(req, res)=>{
    const {id, ordenDeVenta, DocNum}=req.body
    const datos_order = Object.entries(ordenDeVenta)
    const estado='Creado en SAP'
    console.log('entro aca', Object.values(datos_order))
    console.log('entro aca1', datos_order.ordenDeVenta)
    const qr='update orden_compra set estado=?, DocNum=? where id_oc=?'
    try {
        const response=await pool.query(qr,[estado, DocNum, id])
        res.status(201).json({
            ok:true,
            status:201,
            message:`Orden de venta ${ordenDeVenta} actualizaco correctamente`,
        })
        console.log('respuesta del server',response)
    } catch (error) {
        res.status(500).json({
            ok:false,
            status:500,
            message:`Error al actualizar la orden de venta, ${error}`,
            error:{
                 Type: "Not Found",
                error: error.message
            }
            
        })
    }
}