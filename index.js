import express from 'express';
import bodyParser from "body-parser";
import dotenv from 'dotenv';
import cors from 'cors'
import path from 'path';
import { fileURLToPath } from 'url';
import userRouter from './routes/users.route.js';
import ordersRoutes from "./routes/orders.routes.js"
import itemCodeRoutes from "./routes/itemCodeRoutes.routes.js"
import socioDeNegocioRoutes from "./routes/socioDeNegocioRoutes.routes.js"
import sapRoutes from "./routes/sap.route.js"
import sapHanaRoutes from "./routes/sapHana.route.js"
import logModificacionesRoutes from "./routes/logModificaciones.route.js"
import { errorHandler } from './middlewares/errorHandler.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// SIEMPRE usa .env
dotenv.config();


// New app using express module
const Origen = process.env.ALLOWED_ORIGIN;
console.log('Origen:', Origen);

const app = express();

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  optionsSuccessStatus: 200,
}));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", '*');
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Credentials", "true"); // Si necesitas enviar cookies
  next();
});

app.use(express.json({ limit: '20mb' }));
app.use(express.urlencoded({ extended: true, limit: '20mb' }));
app.use(bodyParser.json({ limit: '20mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '20mb' }));

app.get('/', (req, res) => {
  res.send('API Ecofiltro funcionando ');
});
app.use('/eco_api/users', userRouter);
app.use('/eco_api/orders', ordersRoutes);
app.use('/eco_api/itemCode', itemCodeRoutes);
app.use('/eco_api/socioDeNegocio', socioDeNegocioRoutes);
app.use('/eco_api/sap', sapRoutes);
app.use('/eco_api/sapHana', sapHanaRoutes);
app.use('/eco_api/log', logModificacionesRoutes);

app.use(errorHandler);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT || 3000}`);
});