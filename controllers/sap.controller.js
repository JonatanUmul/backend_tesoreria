import * as sapService from "../services/sap.service.js";
import {updateUpdateDocNumOrder} from "../controllers/orders.controller.js"
import e from "express";
export const loginSapController = async (req, res, next) => {
  try {
    const data = await sapService.loginSap();

    res.status(200).json({
      ok: true,
      data,
      message: "Sesión SAP iniciada correctamente",
    });
  } catch (error) {
    next(error);
  }
};

export const getBusinessPartnerController = async (req, res, next) => {

  try {
    const socio_Negocio = req.query.socio_Negocio;

    const data = await sapService.getBusinessPartner(socio_Negocio);

    res.status(200).json({
      ok: true,
      data,
      message: "Socio de negocio obtenido correctamente",
    });
  
  } catch (error) {
  
    next(error);
  }
};

export const getInventoryByItemController = async (req, res, next) => {
  try {
    const { itemCode } = req.params;

    const data = await sapService.getInventoryByItem(itemCode);

    res.status(200).json({
      ok: true,
      data,
      message: "Inventario obtenido correctamente",
    });
  
  } catch (error) {
    next(error);
  }
};

export const createSalesOrderInSapController = async (req, res, next) => {
  try {
    const data = await sapService.createSalesOrderInSap(req.body.payload);
    const id = req.body.payload.id;
    const DocNumSAP=data.DocNum;
    const a={
      id, DocNumSAP
    }
    res.status(200).json([{
      ok: true,
      data: data,
      message: "Orden de venta creada en SAP correctamente",
    }]);
    
    //await updateUpdateDocNumOrder(a)
  } catch (error) {
    next(error);
  }
};

export const createInvoicesInSapController = async (req, res, next) => {
  try {
    const data = await sapService.createInvoicesInSapController(req.body.payload);
    res.status(200).json([{
      ok: true,
      data: data,
      message: "Orden de venta creada en SAP correctamente",
    }]);
    
  } catch (error) {
    next(error);
  }
};

export const getStatusInvoicesInSapController = async (req, res, next) => {
    const docNum=req.body.docNum
  try {
    const data = await sapService.getStatusInvoicesInSapController(docNum)
    res.status(200).json([{
      ok: true,
      data: data,
      message: "Datos de Invoices obtenidos correctamente",
    }])
  } catch (error) {
      next(error)
  }
}