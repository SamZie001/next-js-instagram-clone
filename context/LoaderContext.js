"use client";
import { useState, createContext, useContext } from "react";

const LoaderContext = createContext();

export const LoaderContextProvider = ({ children }) => {
  const [loaderState, setLoaderState] = useState(false);

  return (
    <LoaderContext.Provider value={{ loaderState, setLoaderState }}>
      {children}
    </LoaderContext.Provider>
  );
};

export const useLoaderContext = () => useContext(LoaderContext);
