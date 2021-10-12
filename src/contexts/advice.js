import axios from "axios";
import { useState, useEffect, useContext, createContext } from "react";

// Context
const Context = createContext();

// Provider
export default function AdviceProvider({ children }) {
  const [advice, setAdvice] = useState();

  useEffect(() => {
    async function loadAdvices() {
      const response = await axios.get("https://api.adviceslip.com/advice");

      setAdvice(response.data.slip.advice);
    }

    loadAdvices();
  }, []);

  return <Context.Provider value={{ advice }}>{children}</Context.Provider>;
}

// Hook
export const useAdvice = () => useContext(Context);
