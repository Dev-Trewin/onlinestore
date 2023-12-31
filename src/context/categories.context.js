//import SHOP_DATA from "../shop-data";
import { createContext, useEffect, useState } from "react";
import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils';
//import {addCollectionAndDocuments}  from '../utils/firebase/firebase.utils';
// This is the actual value that i want to access
export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments('categories');
      setCategoriesMap(categoryMap);
    };

    getCategoriesMap();
  }, []);

  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};