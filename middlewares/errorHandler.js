export const errorHandler = (err, req, res, next) =>{
    console.log("Erroraca",err)

    const status= err.status || 500;
    const message = err.message
    res.status(status).json({
        ok:false,
        message: message || "Error interno del servidor",
        error: process.env.NODE_ENV === "development" ? err.stack : undefined,
    })
}