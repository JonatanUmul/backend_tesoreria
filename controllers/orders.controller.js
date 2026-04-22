import * as ordersService from "../services/orders.service.js"

export const get_OrderHeaders=async(req, res, next)=>{
    const opcion = req.query.opcion;
   
    try {
        const data = await ordersService.get_OrderHeaders({opcion});
        console.log(data)
        res.status(200).json({
            ok:true,
            data,
            message:"Órdenes obtenidas"
        })
    } catch (error) {
        next(error)
    }
}

export const getOrderDetail = async(req, res, next) =>{
    const Num_pedido = req.query.numeroPedido;

    try {
        const data = await ordersService.getOrderDetail({Num_pedido})
        res.status(200).json({
            ok:true,
            data,
            message:"Detalle de la orden obtenido correctamente"
        })
    } catch (error) {
        next(error)
    }
}

export const updateUpdateDocNumOrder = async(req, res, next)=>{
    const id  = req.query.id
    const DocNum  = req.query.DocNum
    const tipoDocumento  = req.query.tipoDocumento

    try {
         const data = await ordersService.updateUpdateDocNumOrder(id, DocNum, tipoDocumento)
        res.status(200).json({
            ok:true,
            data,
            message:`Se actualizo correctamente el id_orden: ${id} con el DocNum: ${DocNum}`
        })
    } catch (error) {
       next(error)
    }
}