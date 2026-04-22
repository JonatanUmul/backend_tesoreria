import * as socioDeNegocio from "../services/socioDeNegocio.service.js"


export const getSocioDeNegocio =async(req, res, next)=>{
    const estado = req.query.estado

    try {
        const data = await socioDeNegocio.getSocioDeNegocio(estado);

         res.status(200).json({
            ok:true,
            data,
            message:"Socios obtenidos correctamente"
        })
    } catch (error) {
        next(error)
    }
}
export const postSocioDeNegocio =async(req, res, next)=>{
    const value = req.body.params
    try {
        const data = await socioDeNegocio.postSocioDeNegocio(value);

         res.status(200).json({
            ok:true,
            data,
            message:"Socio creado correctamente"
        })
    } catch (error) {
        next(error)
    }
}