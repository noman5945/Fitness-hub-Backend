import { TProduct, TUpdate } from "./product.interface";
import { Product } from "./product.model";

const createNewProduct = async (productData: TProduct) => {
  const result = await Product.create(productData);
  return result;
};

const getAllProducts = async (query: Record<string, unknown>) => {
  const categories = query.category as string;
  const prodName = query.name as string;
  let getquery = {};
  let tempQuery = {};
  if (categories || prodName) {
    if (categories) {
      const catQuery = categories.split(",");
      tempQuery = {
        $or: [{ name: prodName }, { category: { $in: catQuery } }],
      };
    } else {
      tempQuery = { name: { $regex: prodName, $options: "i" } };
    }
    getquery = tempQuery;
  }

  const result = await Product.find(getquery);
  return result;
};

const insertManyProducts = async (productsData: TProduct[]) => {
  const result = await Product.create(productsData);
  return result;
};

const getSingleProductbyID = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};

const getLatestProducts = async () => {
  const result = await Product.find({}).sort({ _id: -1 }).limit(4);
  return result;
};

const updateProductQty = async (updateData: TUpdate[]) => {
  const bulkOps = updateData.map((update) => ({
    updateOne: {
      filter: { _id: update._id },
      update: { $set: { Qty: update.Qty } },
    },
  }));

  const result = await Product.bulkWrite(bulkOps);
  return result;
};

export const ProductServices = {
  createNewProduct,
  getAllProducts,
  insertManyProducts,
  getSingleProductbyID,
  getLatestProducts,
  updateProductQty,
};
