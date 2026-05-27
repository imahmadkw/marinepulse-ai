export default function Home() {
  const products = [
    {
      name: "SeaBob F5",
      price: "$12,500",
      kwd: "3840 KWD",
    },
    {
      name: "Fishing Smart Sonar",
      price: "$149",
      kwd: "45 KWD",
    },
    {
      name: "Jet Board",
      price: "$899",
      kwd: "276 KWD",
    },
  ];

  return (
    <main
      style={{
        background: "#07111f",
        color: "white",
        minHeight: "100vh",
        padding: "40px",
        fontFamily: "Arial",
      }}
    >
      <h1
        style={{
          fontSize: "50px",
          marginBottom: "10px",
        }}
      >
        🌊 MarinePulse AI
      </h1>

      <p
        style={{
          opacity: 0.7,
          marginBottom: "40px",
        }}
      >
        AI Marine Trends Dashboard
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
        }}
      >
        {products.map((item, index) => (
          <div
            key={index}
            style={{
              background: "#0f172a",
              padding: "20px",
              borderRadius: "20px",
            }}
          >
            <h2>{item.name}</h2>

            <p>{item.price}</p>

            <p>{item.kwd}</p>

            <button
              style={{
                padding: "10px 20px",
                borderRadius: "10px",
                border: "none",
                cursor: "pointer",
                marginTop: "10px",
              }}
            >
              View Product
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
