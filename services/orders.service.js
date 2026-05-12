import * as orderRepository from "../repositories/orders.repository.js";


export const get_OrderHeaders = async ({ opcion, id_email, fechaInicio, fechaFin }) => {
    if(!opcion) throw new Error("El parametro opcion es requerido");
    return await orderRepository.get_OrderHeader(opcion, id_email, fechaInicio, fechaFin)
}

export const getOrderDetail = async ({Num_pedido}) => {
    if(!Num_pedido) throw new Error("El número de orden es requerido")
    return await orderRepository.getOrderDetail(Num_pedido)

}

export const updateUpdateDocNumOrder = async(id, DocNum, tipoDocumento, U_V3_FCE_Enlace) =>{
        console.log('en services',U_V3_FCE_Enlace)
    console.log('A123456',id, DocNum, tipoDocumento)
    if(!id && !DocNum && !tipoDocumento) throw new Error("El DocNum es es requerido")
        return await orderRepository.updateUpdateDocNumOrder(id, DocNum, tipoDocumento, U_V3_FCE_Enlace)
}