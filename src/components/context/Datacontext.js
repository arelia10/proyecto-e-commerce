import React, { createContext, useEffect, useState } from "react";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

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

  const searchProducts = async () => {
    const response = await fetch(`https://dummyjson.com/products/search?q=${searchQuery}`);
    const data = await response.json();
    setProducts(data.products);
  };

  const seleccionarProducto = async (id) => {
    const data = await fetchProduct(id);
    setSelectedProduct(data);
  };

  useEffect(() => {
    if (searchQuery === "") {
      fetchProducts();
    } else {
      searchProducts();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  const data = {
    products,
    selectedProduct,
    seleccionarProducto,
    searchQuery,
    setSearchQuery,
  };

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export { DataContext, DataProvider };