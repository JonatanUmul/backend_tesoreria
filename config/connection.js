/*import mysql from 'mysql2';
import path from 'path';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Seleccionar el archivo .env correcto
const envFile =  '.env.development';
// Cargar variables de entorno
dotenv.config({ path: path.resolve(__dirname, '../' + envFile) });

// Ejemplo de uso
console.log('Host',process.env.DBHOST)
console.log('Usuario',process.env.DBUSER)
console.log('Pass',process.env.DBPASSWORD)

export const poolR = mysql.createPool({
  host: process.env.DBHOST,
  user: process.env.DBUSER,
  password: process.env.DBPASSWORD,
  database: process.env.DB,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  ssl: {
    rejectUnauthorized: false
  },

  //  ESTA ES LA CLAVE
  authSwitchHandler: (data, cb) => {
    if (data.pluginName === 'caching_sha2_password') {
      const password = process.env.DBPASSWORD;
      const buffer = Buffer.from(password + '\0');
      cb(null, buffer);
    }
  }
});
const pool = poolR.promise();
//console.log(pool)
export {
  pool
}
// Export the pool for use in other parts of your application*/

import { createPool } from "mysql2/promise";
import dotenv from 'dotenv';

// Cargar las variables de entorno desde el archivo .env
   dotenv.config();
   const BD =  process.env.DB;
   const DBPASSWORD =  process.env.DBPASSWORD;
   const DBUSER =  process.env.DBUSER;
   const DBHOST =  process.env.DBHOST;


/*export const pool= createPool({
    host: "ecofiltro.net",
    user:'finanzaseco',
    password: 'aJFpLKnJALX2ETkt',
    port:3306,  
    database:'finanzas',
    //database: DB,
})*/

export const pool= createPool({
    host: DBHOST,
    user:DBUSER,
    password: DBPASSWORD,
    port:3306,  
    database:BD,
    //database: DB,
})
console.log('conexiones', pool)

pool.getConnection()
    .then(connection => {
        console.log('Conectado a la base de datos');
        connection.release(); // Liberar la conexión una vez que haya terminado
    })
    .catch(error => {
        console.error('Error al conectar a la base de datos:', error);
    });

    