import { pool } from "../../config/connection.js";


export const get_ov_pedidoDetalleCompleto = async(req, res) => {
    const Num_pedido = req.query.numeroPedido;
    console.log('Num_pedido: ', Num_pedido);
    const cosulta = 'CALL get_ov_pedidoDetalleCompleto(?)';
    try {
       const response=await pool.query(cosulta, [Num_pedido])
       res.status(200).json(
        {ok: true,
        count:response[0].length,
        data:response[0]
         }
    );
    } catch (error) {
        res.status(500).json({message: 'Error en el servidor', error: error.message});
    }
}       