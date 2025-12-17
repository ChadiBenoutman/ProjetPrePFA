let allData = [];

fetch("data.json")
  .then(res => res.json())
  .then(data => {
    allData = data;
    displayCards(allData);
  });

function displayCards(data) {
  const container = document.querySelector(".cards-container");
  container.innerHTML = "";

  data.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <button>Voir la fiche</button>
      <img src="${item.image}">
      <h3>${item.nom}</h3>
      <p>${item.adresse}</p>
      <p>📍 Voir le plan</p>
      <p>Écrire un avis | • ${item.distance}</p>
    `;

    container.appendChild(card);
  });
}

/* ===== FILTRAGE PAR CATEGORIE ===== */
document.querySelectorAll(".categories button").forEach(btn => {
  btn.addEventListener("click", () => {
    const cat = btn.textContent;
    const filtered = allData.filter(item => item.categorie === cat);
    displayCards(filtered);
  });
});
