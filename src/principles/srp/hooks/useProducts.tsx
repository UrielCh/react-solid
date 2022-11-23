import axios from "axios";
import { useEffect, useState } from "react";

export interface IProduct {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number, count: number };
}

export const useProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  const fetchProducts = async () => {
    const response = await axios.get(
      "https://fakestoreapi.com/products"
    );

    if (response && response.data) setProducts(response.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return { products };
};
