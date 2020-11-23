import React, { useState, createContext, useEffect } from "react";
import axios from "axios";
export const ProductContext = createContext();

const ProductProvider = (props) => {
  const [categories, setCategories] = useState([]);

  const fetchCat = async () => {
    const result = await axios("http://localhost:3004/categories");
    setCategories(result.data);
    console.log(result.data);
  };
  useEffect(() => {
     fetchCat();
   }, []);

  return (
    <ProductContext.Provider value={categories}>
      {props.children}
    </ProductContext.Provider>
  );
};
export default ProductProvider;
