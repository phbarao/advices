import axios from "axios";
import { useState, useEffect, useContext, createContext } from "react";

// Context
const Context = createContext();

// Provider
export default function AdviceProvider({ children }) {
  const [advice, setAdvice] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadAdvices() {
      setLoading(true);

      const response = await axios.get("https://api.adviceslip.com/advice");
      setAdvice(response.data.slip.advice);

      setLoading(false);
    }

    loadAdvices();
  }, []);

  return (
    <Context.Provider value={{ advice, loading }}>{children}</Context.Provider>
  );
}

// Hook
export const useAdvice = () => useContext(Context);
