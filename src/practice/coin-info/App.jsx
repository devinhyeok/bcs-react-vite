import { useEffect, useState } from "react";

function App() {
  const [coinList, setCoinList] = useState([]);

  useEffect(() => {
    const fetchCoinData = async () => {
      try {
        const response = await fetch(
          "https://api.upbit.com/v1/ticker?markets=KRW-BTC,KRW-ETH,KRW-POL,KRW-USDT"
        );
        const data = await response.json();

        setCoinList(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCoinData();
  }, []);

  return (
    <div>
      <h1>Coin List</h1>
      <ul>
        {coinList.map((v, i) => (
          <li
            key={i}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <img
              src={`${v.market}.png`}
              style={{
                width: "20px",
              }}
            />
            {v.market.substring(4)} - {v.trade_price.toLocaleString()}원
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
