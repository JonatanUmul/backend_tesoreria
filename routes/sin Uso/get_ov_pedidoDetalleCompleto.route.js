import express from 'express'
import { get_ov_pedidoDetalleCompleto} from '../../controllers/sinUso/post_ov_pedidoDetalleCompleto.controller.js'

const ov_pedidoDetalleCompleto = express.Router();

ov_pedidoDetalleCompleto.get('/get_detalle_ov', get_ov_pedidoDetalleCompleto)

export{
ov_pedidoDetalleCompleto}
