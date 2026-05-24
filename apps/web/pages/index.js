
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/products")
      .then(res => res.json())
      .then(setData);
  }, []);

  return (
    <div style={{ padding: 40, fontFamily: "Arial" }}>
      <h1>🌊 MarinePulse AI</h1>
      <h2>Trending Marine Products</h2>

      {data.map((p, i) => (
        <div key={i} style={{ border: "1px solid #ccc", margin: 10, padding: 10 }}>
          <h3>{p.name}</h3>
          <p>Price: ${p.price}</p>
          <p>Trend Score: {p.trendScore}</p>
        </div>
      ))}
    </div>
  );
}
