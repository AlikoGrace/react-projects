import { createContext, useEffect, useState } from "react";
const BASE_URL = "http://localhost:8000";
const CitiesContext = createContext();

function CitiesProvider({ children }) {
  const [cities, setCities] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchCitiesi() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch {
        alert("there was an error loading data ...");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCitiesi();
  }, []);

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
      }}>
      {children}
    </CitiesContext.Provider>
  );
}

export { CitiesProvider };
