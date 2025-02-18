import { useEffect, useState } from "react";

const App = () => {
  const [amount, setAmount] = useState(0);
  const [toCurrency, setTocurrency] = useState("USD");
  const [fromCurrency, setFromCurrency] = useState("EUR");
  const [converted, setConverted] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function convert() {
      setIsLoading();
      const res = await fetch(
        `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`
      );
      const data = await res.json();
      setConverted(data.rates[toCurrency]);
      setIsLoading(false);
    }
    if (fromCurrency == toCurrency) return setConverted(amount);
    convert();
  }, [amount, fromCurrency, toCurrency]);
  return (
    <div>
      <input
        type="text"
        placeholder="enter amount"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        disabled={isLoading}
      />
      <select
        name=""
        id=""
        value={fromCurrency}
        onChange={(e) => setFromCurrency(e.target.value)}
        disabled={isLoading}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select
        name=""
        id=""
        value={toCurrency}
        onChange={(e) => setTocurrency(e.target.value)}
        disabled={isLoading}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>
        {converted}
        {toCurrency}
      </p>
    </div>
  );
};

export default App;
