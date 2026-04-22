import * as userRepository from "../repositories/users.repository.js";

export const Login = async (email, password) => {

  const user = await userRepository.Login(email);

  if (!user) return null;

  if (user.password !== password) return null;

  return {
    id: user.id,
    nombre: user.nombre,
    email: user.email,
    rol: user.rol,
  };
};