import * as ordersService from "../services/orders.service.js"

export const get_OrderHeaders=async(req, res, next)=>{
    const filtros = req.query
    console.log('aca123',filtros)
    const opcion = filtros['filtros[op]'];
    const id_email = filtros['filtros[id_email]'];
    const fechaInicio = filtros['filtros[fechaInicio]'];
    const fechaFin = filtros['filtros[fechaFin]'];

    try {
        const data = await ordersService.get_OrderHeaders({opcion, id_email, fechaInicio, fechaFin});
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
    const U_V3_FCE_Enlace  = req.query.U_V3_FCE_Enlace
    console.log('en controllers',req.query)

    try {
         const data = await ordersService.updateUpdateDocNumOrder(id, DocNum, tipoDocumento, U_V3_FCE_Enlace)
        res.status(200).json({
            ok:true,
            data,
            message:`Se actualizo correctamente el id_orden: ${id} con el DocNum: ${DocNum}`
        })
    } catch (error) {
       next(error)
    }
}