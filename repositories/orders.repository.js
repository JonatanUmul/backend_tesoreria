import { pool } from "../config/connection.js";

export const get_OrderHeader = async (opcion, id_email, fechaInicio, fechaFin) => {
    console.log('op', opcion, id_email, fechaInicio, fechaFin)
    const qr="CALL get_ov_pedidoHeaderCompleto(?, ?, ?, ?)"
    const [rows] =await pool.query(qr,[opcion, id_email, fechaInicio, fechaFin])
    console.log(rows)
    return rows
}

export const getOrderDetail = async(Num_pedido) =>{
    const qr="CALL get_ov_pedidoDetalleCompleto(?)"
    const [rows] = await pool.query(qr,[Num_pedido])
    return rows
}

export const updateUpdateDocNumOrder = async(id,DocNum, tipoDocumento, U_V3_FCE_Enlace) =>{
    console.log('een repositoru',U_V3_FCE_Enlace)
    const estado=tipoDocumento
    const qr=`update orden_compra set DocNum=?, estado=?, U_V3_FCE_Enlace=? where id_oc=?`
             // update orden_compra set DocNum="1234" where id_oc=44
    const [rows] = await pool.query(qr,[DocNum, estado, U_V3_FCE_Enlace, id ])
    console.log('respuest',rows)
    return rows
}