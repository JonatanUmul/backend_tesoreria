import * as LogModificacion from "../services/logModificaciones.service.js";

export const getLogModificaciones =async(req, res, next) =>{
    const value = req.query.values
console.log('valores',value)
    try {
        const data = await LogModificacion.modificaciones(value)
        res.status(200).json({
            ok:true,
            data,
            message:"Log de modificaciones obtenido correctamente"
        })
    } catch (error) {
        next(error)
    }
}
export const postLogModificaciones =async(req, res, next) =>{
    const value = req.query.values

    try {
        const data = await LogModificacion.post_modificaciones(value)
        res.status(200).json({
            ok:true,
            data,
            message:"Log de modificaciones aplicado correctamente"
        })
    } catch (error) {
        next(error)
    }
}