import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [coin, setCoin] = useState(0);
  const [dollars, setDollars] = useState(0);
  const [dollarToCoin, setDollarToCoin] = useState("");

  const onCoinSelect = (event) => {
    setCoin(event.target.value);
  };
  const onDollarChange = (event) => {
    setDollars(event.target.value);
  };
  const onDollarToCoinBtnClick = (event) => {
    event.preventDefault();
    const changed = dollars * coin;
    setDollarToCoin(changed);
  };

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The coins! ({coins.length})</h1>
      {loading ? (
        <string>Loading...</string>
      ) : (
        <select onChange={onCoinSelect} value={coin}>
          {coins.map((coin) => (
            <option value={coin.quotes.USD.price}>
              {coin.name} ({coin.symbol})
            </option>
          ))}
        </select>
      )}
      <br />
      <input type="text" value={dollars} onChange={onDollarChange} />
      <button onClick={onDollarToCoinBtnClick}>Change To Coin</button>
      <br />
      <input type="text" value={dollarToCoin} disabled />
    </div>
  );
}

export default App;
