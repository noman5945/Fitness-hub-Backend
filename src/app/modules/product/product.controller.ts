import { Request, RequestHandler, Response } from "express";
import { ProductServices } from "./product.service";

const createNewProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;
    const result = await ProductServices.createNewProduct(product);

    res.status(200).json({
      success: true,
      messege: "New product created",
      data: result,
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({
        succes: false,
        message: error.message,
      });
    }
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  try {
    //console.log(req.params);
    const result = await ProductServices.getAllProducts(req.query);
    res.status(200).json({
      success: true,
      messege: "Products fetched successfully",
      data: result,
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({
        succes: false,
        message: error.message,
      });
    }
  }
};

const getSingleProductbyID = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getSingleProductbyID(
      req.params.id as string
    );
    res.status(200).json({
      success: true,
      messege: "Products fetched successfully",
      data: result,
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({
        succes: false,
        message: error.message,
      });
    }
  }
};

const getLatestProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getLatestProducts();
    res.status(200).json({
      success: true,
      messege: "Products fetched successfully",
      data: result,
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({
        succes: false,
        message: error.message,
      });
    }
  }
};

const updateProducts = async (req: Request, res: Response) => {
  try {
    const updateItems = req.body.items;

    const result = await ProductServices.updateProductQty(updateItems);
    res.status(200).json({
      success: true,
      messege: "Products updated successfully",
      data: result.modifiedCount,
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({
        succes: false,
        message: error.message,
      });
    }
  }
};

const insertManyProducts: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const products = req.body;
    const result = await ProductServices.insertManyProducts(products);
    res.status(200).json({
      success: true,
      messege: "All Data inserted successfully",
      data: result,
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({
        success: false,
        message: error.message,
        stack: error.stack,
      });
    }
  }
};

export const ProductControllers = {
  createNewProduct,
  getAllProducts,
  insertManyProducts,
  getSingleProductbyID,
  getLatestProducts,
  updateProducts,
};
