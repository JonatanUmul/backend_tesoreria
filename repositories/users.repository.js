import { pool } from "../config/connection.js";

export const Login = async (email) => {

  const [rows] = await pool.query(
    "SELECT * FROM users WHERE email = ? AND estado = 'activo'",
    [email]
  );

  return rows[0];
};