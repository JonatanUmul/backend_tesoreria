import { pool } from "../config/connection.js";

export const getLogModificaciones = async (value) => {
  const qr = `
  SELECT 
    id,
    tabla,
    tipo_operacion,
    id_registro,
    referencia,
    cambios,
    usuario,
    origen,
    fecha
FROM log_auditoria
WHERE referencia = ?
ORDER BY fecha DESC;
`;
  const [rows] = await pool.query(qr, [value]);
  console.log('log de modificaciones',rows);
  return rows;
};

export const postLogModificaciones = async (value) => {
  console.log('log de modificaciones',value);
  const qr = `
  SELECT 
    id,
    tabla,
    tipo_operacion,
    id_registro,
    referencia,
    cambios,
    usuario,
    origen,
    fecha
FROM log_auditoria
WHERE referencia = ?
ORDER BY fecha DESC;
`;
  const [rows] = await pool.query(qr, [value]);
  return rows;
};
