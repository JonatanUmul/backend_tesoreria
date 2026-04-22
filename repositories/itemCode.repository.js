import { pool } from "../config/connection.js";

export const getItemCode = async (estado, cardCode_cadena) => {
  const qr = "select * from get_itemCode where estado=? AND cardCode_cadena=?";
  const [rows] = await pool.query(qr, [estado, cardCode_cadena]);
  return rows;
};

export const getItemCodeId = async (id) => {
  const qr = "select * from get_itemCode where id=?";
  const [rows] = await pool.query(qr, [id]);
  return rows;
};

export const postItemCode = async (datos) => {
  const values = datos;
  const qr =
    "insert into itemCode(cardCode_cadena, name_cadena, sku_cliente, descripcion_cliente, sku_ecofiltro, descripcion_ecofiltro, precio_sinIva, estado)values(?,?,?,?,?,?,?,?)";
  const response = await pool.query(qr, [
    values.cardCode_cadena,
    values.name_cadena,
    values.sku_cliente,
    values.descripcion_cliente,
    values.sku_ecofiltro,
    values.descripcion_ecofiltro,
    values.precio_siniva,
    values.estado,
  ]);
  return response;
};

export const putItemCode = async (datos) => {
  console.log('en update',datos)
  const qr ='update orden_compra_detalle set estado=? where id_detalle=?';
  const response = await pool.query(qr, [datos.estado, datos.id]);
  return response;
};

export const updateItemCode = async (datos) => {
  const data=datos.datos.value
  
  console.log(data)
  const qr ='UPDATE  itemcode SET cardCode_cadena=?, name_cadena=?, sku_cliente=?, descripcion_cliente=?, sku_ecofiltro=?, descripcion_ecofiltro=?, precio_sinIva=?, estado=? where id_itemCode=?';
  const response = await pool.query(qr, [data.cardCode, data.cadena, data.sku_cliente, data.descripcion_cliente, data.sku_ecofiltro, data.descripcion_ecofiltro,data.precio_sinIva, data.estado, data.id]);
  console.log(response)
  return response;
};
