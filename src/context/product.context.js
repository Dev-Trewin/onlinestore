import PRODUCTS from '../shop-data.json';
import { createContext, useEffect, useState } from "react";

// This is the actual value that i want to access
export const ProductContext=createContext({ 
  products:[],
});
 
export const ProductProvider=({children})=>{
 const [products,setProducts]=useState(PRODUCTS);
 const value={products};
return(
  <ProductContext.Provider value={value}>
    {children}
  </ProductContext.Provider>
);
    
}