import * as socioDeNegocio from "../repositories/socioDeNegocio.repository.js"

export const getSocioDeNegocio = async(estado)=>{
    if(!estado) throw new Error("Es necesario indicar el estado: Activo o Inactivo");

    return socioDeNegocio.getSocioDeNegocio(estado)
}

export const postSocioDeNegocio = async({value})=>{
    if(!value.cardCode ||!value.nombre ||!value.estado) throw new Error("Los datos requeridos son : cardCode, nombre, estado");

    return socioDeNegocio.postSocioDeNegocio(value)
}