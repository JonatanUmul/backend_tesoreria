import * as orderRepository from "../repositories/orders.repository.js";


export const get_OrderHeaders = async ({ opcion }) => {
    if(!opcion) throw new Error("El parametro opcion es requerido");
    return await orderRepository.get_OrderHeader(opcion)
}

export const getOrderDetail = async ({Num_pedido}) => {
    if(!Num_pedido) throw new Error("El número de orden es requerido")
    return await orderRepository.getOrderDetail(Num_pedido)

}

export const updateUpdateDocNumOrder = async(id, DocNum, tipoDocumento) =>{
    console.log('A123456',id, DocNum, tipoDocumento)
    if(!id && !DocNum && !tipoDocumento) throw new Error("El DocNum es es requerido")
        return await orderRepository.updateUpdateDocNumOrder(id, DocNum, tipoDocumento)
}