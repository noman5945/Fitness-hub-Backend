export type TProduct = {
  name: string;
  description: string;
  category: string;
  price: number;
  Qty: number;
  weight: number;
  img: string;
};

export type TUpdate = {
  _id: string;
  name: string;
  Qty: number;
  customerQty: number;
  price: number;
  purchasePrice: number;
};
