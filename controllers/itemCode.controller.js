import * as itemCodeServices from "../services/itemCode.service.js";

export const getItemCode =async(req, res, next) =>{
    const estado = req.query.estado
    const cardCode_cadena = req.query.cardCode_cadena

    try {
        const data = await itemCodeServices.getItemCode(estado,cardCode_cadena)
        res.status(200).json({
            ok:true,
            data,
            message:"Órdenes obtenidas"
        })
    } catch (error) {
        next(error)
    }
}

export const postItemCode = async(req, res, next) =>{
    const datos = req.body.datos.values
    try {
        const data = await itemCodeServices.postItemCode(datos)
          res.status(200).json({
            ok:true,
            data,
            message:"Operación exitosa: ítem creado correctamente."
        })
    } catch (error) {
        next(error)
    }
}
export const putItemCode = async(req, res, next) =>{
    const datos = req.body.datos.value
    try {
        const data = await itemCodeServices.putItemCode(datos)
          res.status(200).json({
            ok:true,
            data,
            message:"Operación exitosa: ítem actualizado correctamente."
        })
    } catch (error) {
        next(error)
    }
}

export const updateItemCode = async(req, res, next) =>{
    
    const datos = req.body
    try {
        const data = await itemCodeServices.updateItemCode(datos)
          res.status(200).json({
            ok:true,
            data,
            message:"Operación exitosa: ítem actualizado correctamente."
        })
    } catch (error) {
        next(error)
    }
}

export const getItemCodeId = async(req, res, next) =>{
    console.log(req)
    const id= req.query.values;

    try {
        const data = await itemCodeServices.getItemCodeId(id);
        res.status(200).json({
            ok: true,
            data,
            message: "Datos obtenidos corectamente"
        })
    } catch (error) {
        next(error)
    }
}