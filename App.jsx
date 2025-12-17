import { useEffect, useState } from "react";

function App() {
  const [pros, setPros] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then(res => res.json())
      .then(data => setPros(data));
  }, []);

  return (
    <div>
      <h1>Équiper la maison à Paris</h1>

      {pros.map(p => (
        <div key={p.id}>
          <h3>{p.nom}</h3>
          <p>{p.adresse}</p>
          <p>{p.distance}</p>
          <button>Voir la fiche</button>
        </div>
      ))}
    </div>
  );
}

export default App;
