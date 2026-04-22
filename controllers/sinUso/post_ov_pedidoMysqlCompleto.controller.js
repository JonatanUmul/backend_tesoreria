import { stat } from "fs";
import { pool } from "../../config/connection.js";

export const post_ov_pedidoMysqlCompleto = async (req, res) => {
  const payload = req?.body?.payload;
  const item = payload?.items;
  const a = item.length;
  const connection = await pool.getConnection();
  await connection.beginTransaction();
  console.log("contsadr", payload);
  const queryHeader= `insert into header(CardName, cod_sap, fecha, preparado_por, pedido, pedido_para_tienda, estado)value(?,?,?,?,?,?,?) `
  const queryItems = `insert into items(pedido, sku, modelo, descripcion, cantidad, costo)values(?,?,?,?,?,?)`;
  const queryDelivery = `insert into delivery(pedido, sirvase_suministrar_a, direccion_atlas, contacto_recepcion, telefono_recepcion)values(?,?,?,?,?)`;
  try {
    const responseHeader = await connection.query(queryHeader, [
      payload.CardName,
      payload.cod_sap,
      payload.fecha,
      payload.preparado_por,
      payload.pedido,
      payload.Pedido_para_tienda,
      payload.estado,
    ]);

     const responseDelivery = await connection.query(queryDelivery, [
      payload.pedido,
      payload.Pedido_para_tienda,
      payload.fecha,
      payload.preparado_por,
      payload.pedido,
      payload.Pedido_para_tienda,
      payload.estado,
    ]);
   console.log(responseHeader)
    for (let b = 0; b < a; b++) {
      console.log("dentro del for", item[b]);
      const responseItems = await connection.query(queryItems, [
        item[b].pedido,
        item[b].sku,
        item[b].modelo,
        item[b].Descripcion,
        item[b].cantidad,
        item[b].costo,
    //    item[b].costo,
      ]);
      console.log(responseItems)
    }
    await connection.commit();
    res.status(200).json({
      ok: true,
      status: 200,
      response: "Datos Guardados correctamente",
    });
  }
   catch (error) {

    await connection.rollback();

    console.error(error);
    res.status(500).send(
       { 
      ok: false,
      status: 400,
      message: `Error del servidor, ${error}`
    });

} finally {

    connection.release();

}
  
  /*catch (error) {
    console.log("error", error);
    res.status(400).json({
      ok: false,
      status: 400,
      message: `Error del servidor, ${error}`,
    });
    console.log("error consila ", error);
  }*/
};
