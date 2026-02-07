import { useEffect, useState } from "react";

function App() {
  const [facts, setFacts] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/facts/")
      .then((res) => res.json())
      .then((data) => setFacts(data))
      .catch((err) => console.error("Error fetching facts:", err));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px", fontFamily: "Arial" }}>
      <h1>🌍 Fun Facts</h1>

      {facts.length === 0 ? (
        <p>Loading facts...</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {facts.map((fact) => (
            <li
              key={fact.id}
              style={{
                background: "#f4f4f4",
                margin: "10px auto",
                padding: "15px",
                width: "300px",
                borderRadius: "10px",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              }}
            >
              {fact.fact}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
