import { pool } from "../config/connection.js";

export const getSocioDeNegocio=async(estado)=>{
     const qr = "select * from get_sociosDeNegocio where estado=?";
    const [rows] = await pool.query(qr, [estado]);
    return rows
}

export const postSocioDeNegocio=async(value)=>{

     const qr = "insert into socios_de_negocio(cardCode, nombre, nit, telefono, direccion, correo, estado)values(?,?,?,?,?,?,?)";
    const [rows] = await pool.query(qr, [value.cardCode, value.nombre, value.nit, value.telefono, value.direccion, value.correo, value.estado]);
    return rows
}