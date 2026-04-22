import { pool } from "../config/connection.js";

export const get_OrderHeader = async (opcion) => {
    const qr="CALL get_ov_pedidoHeaderCompleto(?)"
    const [rows] =await pool.query(qr,[opcion])
    return rows
}

export const getOrderDetail = async(Num_pedido) =>{
    const qr="CALL get_ov_pedidoDetalleCompleto(?)"
    const [rows] = await pool.query(qr,[Num_pedido])
    return rows
}

export const updateUpdateDocNumOrder = async(id,DocNum, tipoDocumento) =>{
    
    const estado=tipoDocumento
    const qr=`update orden_compra set DocNum=?, estado=? where id_oc=?`
             // update orden_compra set DocNum="1234" where id_oc=44
    const [rows] = await pool.query(qr,[DocNum, estado, id ])
    console.log('respuest',rows)
    return rows
}