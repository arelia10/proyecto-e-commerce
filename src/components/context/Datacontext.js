import { createContext, useEffect, useState } from "react";

const datacontext = createContext();

const DataProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const fetchProducts = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    setProducts(data.products);
  };

  const fetchProduct = async (id) => {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await response.json();
    return data;
  };
  const seleccionarProducto = async (id) => {
    const data = await fetchProduct(id);
    setSelectedProduct(data);
  };


  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <datacontext.Provider
      value={{ products, selectedProduct, seleccionarProducto }}
    >
      {children}
    </datacontext.Provider>
  );
};

const abrirProducto = (id) => {
  console.log("Soy el producto", id);
};

export { datacontext, DataProvider };