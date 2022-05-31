import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
  cart: false,
  chart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [clientCard, setClientCard] = useState([]);

  return (
    <StateContext.Provider value={{ clientCard, setClientCard }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
