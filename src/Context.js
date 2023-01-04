import { createContext, useContext, useEffect, useState } from "react";

const Crypto = createContext();

function Context({ children }) {
  const [currency, setCurrency] = useState("INR");
  const [symbol, setSymbol] = useState("&#8377");

  useEffect(() => {
    if (currency === "INR") {
      setSymbol("&#8377");
    } else if (currency === "USD") {
      setSymbol("$");
    }
  }, [currency]);
  return (
    <Crypto.Provider value={{ currency, symbol, setCurrency }}>
      {children}
    </Crypto.Provider>
  );
}
export default Context;

export const CryptoState = () => {
  return useContext(Crypto);
};
