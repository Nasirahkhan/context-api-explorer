// import React, { createContext, useState } from "react";

// export const ApiContext = createContext();

// export const ApiProvider = ({ children }) => {
//   const [products, setProducts] = useState([]);
//   const [page, setPage] = useState(1);

//   const fetchProducts = async (pageNo = 1) => {
//     const res = await fetch(
//       `https://dummyjson.com/products?limit=10&skip=${(pageNo - 1) * 10}`
//     );
//     const data = await res.json();

//     pageNo === 1
//       ? setProducts(data.products)
//       : setProducts(prev => [...prev, ...data.products]);
//   };

//   return (
//     <ApiContext.Provider value={{ products, fetchProducts, page, setPage }}>
//       {children}
//     </ApiContext.Provider>
//   );
// };


import React, { createContext, useState } from "react";

export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchProducts = async (pageNo = 1) => {
    try {
      const res = await fetch(
        `https://dummyjson.com/products?limit=10&skip=${(pageNo - 1) * 10}`
      );
      const data = await res.json();

      if (data.products.length === 0) {
        setHasMore(false);
        return;
      }

      if (pageNo === 1) {
        setProducts(data.products);
      } else {
        setProducts(prev => [...prev, ...data.products]);
      }
      setPage(pageNo);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return (
    <ApiContext.Provider 
      value={{ products, fetchProducts, page, setPage, hasMore, setHasMore }}
    >
      {children}
    </ApiContext.Provider>
  );
};