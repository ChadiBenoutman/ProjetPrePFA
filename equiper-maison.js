const data = [
    { nom: "Boulanger Paris BHV", note: 4.8, tag: "Retrait en magasin", logo: "images/boulanger.png" },
    { nom: "Darty Les Halles", note: 4.5, tag: "SAV rapide", logo: "images/darty.png" },
    { nom: "V.P France", note: 3.9, tag: "Machine à coudre", logo: "images/vp.png" },
    { nom: "Bang & Olufsen", note: 4.7, tag: "Audio Premium", logo: "images/bang.png" }
];

const container = document.getElementById("cards");

data.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <img src="${item.logo}">
        <h4>${item.nom}</h4>
        <div class="rating">
            ${"★".repeat(Math.round(item.note))} (${item.note})
        </div>
        <span class="tag">${item.tag}</span>
        <button>Voir la fiche</button>
    `;

    container.appendChild(card);
});
