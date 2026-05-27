export default function Home() {
  const products = [
    {
      name: "SeaBob F5",
      price: "$12,500",
      kwd: "≈ 3,850 KWD",
      image:
        "https://images.seabob.com/seabob-f5.jpg",
    },
    {
      name: "SeaSucker Rack",
      price: "$399",
      kwd: "≈ 122 KWD",
      image:
        "https://www.seasucker.com/cdn/shop/files/rack.jpg",
    },
    {
      name: "Fishing Smart Sonar",
      price: "$149",
      kwd: "≈ 45 KWD",
      image:
        "https://m.media-amazon.com/images/I/61 sonar.jpg",
    },
  ];

  return (
    <main
      style={{
        background: "#07111f",
        minHeight: "100vh",
        color: "white",
        padding: "30px",
        fontFamily: "Arial",
      }}
    >
      <h1 style={{ fontSize: "42px", marginBottom: "10px" }}>
        🌊 MarinePulse AI
      </h1>

      <p style={{ color: "#8ca3c7", marginBottom: "40px" }}>
        AI Marine Trend Prediction Platform
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
          gap: "20px",
        }}
      >
        {products.map((item, index) => (
          <div
            key={index}
            style={{
              background: "#0d1b2a",
              borderRadius: "20px",
              overflow: "hidden",
              border: "1px solid #18324d",
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: "20px" }}>
              <h2>{item.name}</h2>

              <p
                style={{
                  color: "#58a6ff",
                  fontSize: "22px",
                  marginTop: "10px",
                }}
              >
                {item.price}
              </p>

              <p style={{ color: "#9fb3c8" }}>{item.kwd}</p>

              <button
                style={{
                  marginTop: "15px",
                  width: "100%",
                  padding: "12px",
                  borderRadius: "12px",
                  border: "none",
                  background: "#1f6feb",
                  color: "white",
                  cursor: "pointer",
                  fontSize: "16px",
                }}
              >
                View Product
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
