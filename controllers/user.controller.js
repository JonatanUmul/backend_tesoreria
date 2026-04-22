import * as userServices from "../services/users.service.js";

export const login = async (req, res, next) => {

  try {
    const { user, pass } = req.body.params;
    console.log('user, pass', user, pass)
    const respuesta = await userServices.Login(user, pass);

    if (!respuesta) {
      return res.status(401).json({
        ok: false,
        message: "Usuario o contraseña incorrectos",
      });
    }

    res.status(200).json({
      ok: true,
      data: respuesta,
      message: "Login correcto",
    });

  } catch (error) {
    next(error);
  }
};