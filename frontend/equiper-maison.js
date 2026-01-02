/***********************
 * 1️⃣ DONNÉES
 ***********************/
const data = {
    electro: [
        { nom: "Darty Paris", note: 4.5, tag: "SAV rapide", adresse: "12 rue de Rivoli, Paris", image: "https://images.pexels.com/photos/4666759/pexels-photo-4666759.jpeg" },
        { nom: "Boulanger BHV", note: 4.7, tag: "Retrait", adresse: "36 rue du Pont, Paris", image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400" },
        { nom: "Fnac Darty", note: 4.4, tag: "Livraison", adresse: "101 avenue de France, Paris", image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400" },
        { nom: "Electro City", note: 4.1, tag: "Proximité", adresse: "45 boulevard Haussmann, Paris", image: "https://images.pexels.com/photos/8441248/pexels-photo-8441248.jpeg" },
        { nom: "Electro Plus", note: 4.3, tag: "Service express", adresse: "22 rue Lafayette, Paris", image: "https://images.pexels.com/photos/3952085/pexels-photo-3952085.jpeg" },
        { nom: "TechStore", note: 4.0, tag: "Bon prix", adresse: "5 avenue Opéra, Paris", image: "https://images.pexels.com/photos/7045693/pexels-photo-7045693.jpeg" },
        { nom: "Maison Electrique", note: 4.2, tag: "Large choix", adresse: "18 rue Saint-Honoré, Paris", image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400" },
        { nom: "ElectroWorld", note: 4.6, tag: "Livraison rapide", adresse: "90 rue de la Paix, Paris", image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400" }
    ],
    meubles: [
        { nom: "IKEA", note: 4.3, tag: "Mobilier", adresse: "Zone commerciale, Paris", image: "https://via.placeholder.com/150" },
        { nom: "Maisons du Monde", note: 4.6, tag: "Design", adresse: "12 rue des Lilas, Paris", image: "https://via.placeholder.com/150" },
        { nom: "Conforama", note: 4.0, tag: "Bon prix", adresse: "89 avenue du Général, Paris", image: "https://via.placeholder.com/150" },
        { nom: "Mobilier Paris", note: 4.1, tag: "Qualité", adresse: "7 rue de la République, Paris", image: "https://via.placeholder.com/150" },
        { nom: "Home Sweet Home", note: 4.2, tag: "Éco-responsable", adresse: "14 rue du Faubourg, Paris", image: "https://via.placeholder.com/150" },
        { nom: "Meubles & Co", note: 4.4, tag: "Livraison", adresse: "21 avenue Montaigne, Paris", image: "https://via.placeholder.com/150" },
        { nom: "Mobilier Chic", note: 4.5, tag: "Design", adresse: "3 rue de la Paix, Paris", image: "https://via.placeholder.com/150" },
        { nom: "Urban Meubles", note: 4.1, tag: "Proximité", adresse: "9 boulevard Haussmann, Paris", image: "https://via.placeholder.com/150" }
    ],
    depot: [
    { nom: "Troc Maison", note: 4.1, tag: "Occasion", adresse: "20 rue de la Paix, Paris", image: "https://via.placeholder.com/150" },
    { nom: "Seconde Vie", note: 4.3, tag: "Bon prix", adresse: "15 rue de Rivoli, Paris", image: "https://via.placeholder.com/150" },
    { nom: "Maison Recyclée", note: 4.0, tag: "Éco", adresse: "7 avenue Victor Hugo, Paris", image: "https://via.placeholder.com/150" },
    { nom: "Occasion Paris", note: 4.2, tag: "Proximité", adresse: "12 rue Saint-Honoré, Paris", image: "https://via.placeholder.com/150" },
    { nom: "Dépot Chic", note: 4.4, tag: "Livraison possible", adresse: "4 rue de la République, Paris", image: "https://via.placeholder.com/150" },
    { nom: "Vintage Home", note: 4.3, tag: "Style rétro", adresse: "9 rue Lafayette, Paris", image: "https://via.placeholder.com/150" },
    { nom: "Maison Récup", note: 4.0, tag: "Éco", adresse: "11 boulevard Saint-Germain, Paris", image: "https://via.placeholder.com/150" },
    { nom: "Second Chance", note: 4.1, tag: "Occasion", adresse: "18 rue du Faubourg, Paris", image: "https://via.placeholder.com/150" }
    ],
    deco: [
    { nom: "Zara Home", note: 4.4, tag: "Décoration", adresse: "14 rue de Sévigné, Paris", image: "https://via.placeholder.com/150" },
    { nom: "Maisons du Monde Déco", note: 4.5, tag: "Design", adresse: "12 rue des Lilas, Paris", image: "https://via.placeholder.com/150" },
    { nom: "Home Déco", note: 4.2, tag: "Proximité", adresse: "5 rue de Rivoli, Paris", image: "https://via.placeholder.com/150" },
    { nom: "Déco Chic", note: 4.1, tag: "Bon prix", adresse: "9 boulevard Haussmann, Paris", image: "https://via.placeholder.com/150" },
    { nom: "Urban Déco", note: 4.3, tag: "Livraison rapide", adresse: "21 avenue Montaigne, Paris", image: "https://via.placeholder.com/150" },
    { nom: "Maison & Style", note: 4.0, tag: "Qualité", adresse: "7 rue Saint-Honoré, Paris", image: "https://via.placeholder.com/150" },
    { nom: "Déco Express", note: 4.4, tag: "Service rapide", adresse: "18 rue du Faubourg, Paris", image: "https://via.placeholder.com/150" },
    { nom: "Chic Déco", note: 4.5, tag: "Design", adresse: "3 rue de la Paix, Paris", image: "https://via.placeholder.com/150" }
    ],
    chauffage: [
    { nom: "Chauffage Pro", note: 4.2, tag: "Installation", adresse: "3 avenue Victor Hugo, Paris", image: "https://via.placeholder.com/150" },
    { nom: "Chauffage Express", note: 4.3, tag: "Rapide", adresse: "5 rue Lafayette, Paris", image: "https://via.placeholder.com/150" },
    { nom: "Maison Chauffage", note: 4.1, tag: "Qualité", adresse: "12 rue de Rivoli, Paris", image: "https://via.placeholder.com/150" },
    { nom: "Chauffage Plus", note: 4.4, tag: "Proximité", adresse: "7 boulevard Haussmann, Paris", image: "https://via.placeholder.com/150" },
    { nom: "Expert Chauffage", note: 4.0, tag: "Service", adresse: "18 avenue Montaigne, Paris", image: "https://via.placeholder.com/150" },
    { nom: "Chauffage & Co", note: 4.2, tag: "Bon prix", adresse: "9 rue Saint-Honoré, Paris", image: "https://via.placeholder.com/150" },
    { nom: "Eco Chauffage", note: 4.5, tag: "Énergie verte", adresse: "14 rue du Faubourg, Paris", image: "https://via.placeholder.com/150" },
    { nom: "Top Chauffage", note: 4.1, tag: "Rapide", adresse: "21 rue de la Paix, Paris", image: "https://via.placeholder.com/150" }
    ],
    clim: [
    { nom: "Clim Expert", note: 4.5, tag: "Maintenance", adresse: "6 boulevard Saint-Germain, Paris", image: "https://via.placeholder.com/150" },
    { nom: "Climatisation Pro", note: 4.3, tag: "Installation", adresse: "12 rue Lafayette, Paris", image: "https://via.placeholder.com/150" },
    { nom: "Clim Express", note: 4.2, tag: "Rapide", adresse: "5 rue de Rivoli, Paris", image: "https://via.placeholder.com/150" },
    { nom: "Clim & Co", note: 4.4, tag: "Service", adresse: "18 rue Saint-Honoré, Paris", image: "https://via.placeholder.com/150" },
    { nom: "Maison Clim", note: 4.1, tag: "Proximité", adresse: "7 boulevard Haussmann, Paris", image: "https://via.placeholder.com/150" },
    { nom: "Expert Clim", note: 4.0, tag: "Qualité", adresse: "14 avenue Montaigne, Paris", image: "https://via.placeholder.com/150" },
    { nom: "Top Clim", note: 4.5, tag: "Rapide", adresse: "21 rue de la Paix, Paris", image: "https://via.placeholder.com/150" },
    { nom: "Climatisation Plus", note: 4.3, tag: "Livraison", adresse: "9 rue du Faubourg, Paris", image: "https://via.placeholder.com/150" }
    ],
    eau: [
    { nom: "Hydro Services", note: 4.0, tag: "Chauffe-eau", adresse: "9 rue du Faubourg, Paris", image: "https://via.placeholder.com/150" },
    { nom: "Eau & Co", note: 4.2, tag: "Installation", adresse: "12 rue Lafayette, Paris", image: "https://via.placeholder.com/150" },
    { nom: "Maison Eau", note: 4.1, tag: "Proximité", adresse: "5 rue de Rivoli, Paris", image: "https://via.placeholder.com/150" },
    { nom: "Chauffe-eau Expert", note: 4.4, tag: "Service", adresse: "18 rue Saint-Honoré, Paris", image: "https://via.placeholder.com/150" },
    { nom: "Top Eau", note: 4.0, tag: "Rapide", adresse: "7 boulevard Haussmann, Paris", image: "https://via.placeholder.com/150" },
    { nom: "Eau Express", note: 4.3, tag: "Qualité", adresse: "14 avenue Montaigne, Paris", image: "https://via.placeholder.com/150" },
    { nom: "Hydro Plus", note: 4.1, tag: "Livraison", adresse: "21 rue de la Paix, Paris", image: "https://via.placeholder.com/150" },
    { nom: "Eau Maison", note: 4.5, tag: "Bon prix", adresse: "9 rue du Faubourg, Paris", image: "https://via.placeholder.com/150" }
    ],
    pac: [
    { nom: "Eco PAC", note: 4.6, tag: "Énergie verte", adresse: "12 avenue de l’Europe, Paris", image: "https://via.placeholder.com/150" },
    { nom: "PAC Expert", note: 4.4, tag: "Installation", adresse: "5 rue de Rivoli, Paris", image: "https://via.placeholder.com/150" },
    { nom: "Maison PAC", note: 4.2, tag: "Maintenance", adresse: "9 rue du Faubourg, Paris", image: "https://via.placeholder.com/150" },
    { nom: "PAC Express", note: 4.5, tag: "Service rapide", adresse: "21 rue de la Paix, Paris", image: "https://via.placeholder.com/150" },
    { nom: "Top PAC", note: 4.3, tag: "Proximité", adresse: "18 rue Saint-Honoré, Paris", image: "https://via.placeholder.com/150" },
    { nom: "PAC & Co", note: 4.1, tag: "Qualité", adresse: "7 boulevard Haussmann, Paris", image: "https://via.placeholder.com/150" },
    { nom: "Expert PAC", note: 4.2, tag: "Livraison", adresse: "12 rue Lafayette, Paris", image: "https://via.placeholder.com/150" },
    { nom: "PAC Maison", note: 4.4, tag: "Bon prix", adresse: "14 avenue Montaigne, Paris", image: "https://via.placeholder.com/150" }
    ]
};

const villesMaroc = [
    "Casablanca",
    "Rabat",
    "Marrakech",
    "Tanger",
    "Agadir",
    "Fès",
    "Meknès",
    "Oujda",
    "Tétouan",
    "Laâyoune",
    "Dakhla",
    "Safi",
    "El Jadida",
    "Khouribga",
    "Béni Mellal",
    "Nador",
    "Kénitra",
    "Taza",
    "Errachidia",
    "Guelmim"
];


/***********************
 * 2️⃣ CHARGER LES CARTES
 ***********************/
function load(section) {
    const container = document.getElementById(section);
    container.innerHTML = "";

    data[section].forEach(i => {
        container.innerHTML += `
      <div class="card">
        <div class="card-img">
          <img src="${i.image}" alt="${i.nom}">
        </div>
        <div class="card-body">
          <h4>${i.nom}</h4>
          <div class="rating">
            ${"★".repeat(Math.round(i.note))} (${i.note})
          </div>
          <p class="adresse">${i.adresse}</p>
          <span class="tag">${i.tag}</span>
          <button>Voir la fiche</button>
        </div>
      </div>`;
    });
}

/***********************
 * 3️⃣ SLIDER < >
 ***********************/
function slide(id, dir) {
    const container = document.getElementById(id);
    const card = container.querySelector(".card");
    if (!card) return;

    const cardWidth = card.offsetWidth + 16;
    const maxScroll = container.scrollWidth - container.clientWidth;

    let newScroll = container.scrollLeft + dir * cardWidth;
    if (newScroll < 0) newScroll = 0;
    if (newScroll > maxScroll) newScroll = maxScroll;

    container.scrollTo({ left: newScroll, behavior: "smooth" });
}

/***********************
 * 4️⃣ CHARGEMENT AUTO
 ***********************/
Object.keys(data).forEach(load);

/***********************
 * 5️⃣ MENU MOBILE
 ***********************/
const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
});

/***********************
 * 6️⃣ SÉLECTEUR DE VILLE
 ***********************/
const cityBtn = document.querySelector(".city-btn");
const citySelector = document.querySelector(".city-selector");
const cityItems = document.querySelectorAll(".city-dropdown span");
const currentCity = document.getElementById("current-city");

cityBtn.addEventListener("click", () => {
  citySelector.classList.toggle("active");
});

cityItems.forEach(city => {
  city.addEventListener("click", () => {
    const cityName = city.dataset.city;

    currentCity.textContent = cityName;
    searchCityInput.value = cityName;

    selectedCity = cityName.toLowerCase();

    citySelector.classList.remove("active");
    liveSearch(); // 🔥 mise à jour directe
  });
});


// fermer si clic ailleurs
document.addEventListener("click", e => {
  if (!citySelector.contains(e.target)) {
    citySelector.classList.remove("active");
  }
});
const mapBtn = document.querySelector(".map-btn");
const mapModal = document.getElementById("mapModal");
const closeMap = document.querySelector(".close-map");

mapBtn.addEventListener("click", () => {
  mapModal.classList.add("active");

  setTimeout(() => {
    if (!window.mapInitialized) initMap();
  }, 200);
});

closeMap.addEventListener("click", () => {
  mapModal.classList.remove("active");
});

function initMap() {
    
  window.mapInitialized = true;

  const map = L.map("map").setView([33.5731, -7.5898], 6); // Maroc

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap"
  }).addTo(map);

  const cities = {
    Casablanca: [33.5731, -7.5898],
    Rabat: [34.0209, -6.8416],
    Marrakech: [31.6295, -7.9811],
    Tanger: [35.7595, -5.8340],
    Agadir: [30.4278, -9.5981]
  };


  Object.entries(cities).forEach(([name, coords]) => {
    L.marker(coords)
      .addTo(map)
      .bindPopup(name)
      .on("click", () => {
        document.getElementById("current-city").textContent = name;
        mapModal.classList.remove("active");
      });
  });
}
/***********************
 * 7️⃣ RECHERCHE LIVE (FIX)
 ***********************/
let selectedCity = "casablanca";

const searchNameInput = document.getElementById("search-name");
const searchCityInput = document.getElementById("search-city");

function liveSearch() {
  const nameValue = searchNameInput.value.trim().toLowerCase();

  Object.keys(data).forEach(section => {
    const cardsContainer = document.getElementById(section);
    const block = cardsContainer.closest(".block");

    cardsContainer.innerHTML = "";

    const results = data[section].filter(item => {
      return (
        nameValue === "" ||
        item.nom.toLowerCase().includes(nameValue) ||
        item.tag.toLowerCase().includes(nameValue)
      );
    });

    if (results.length === 0) {
      block.style.display = "none";
      return;
    }

    block.style.display = "block";

    results.forEach(item => {
      cardsContainer.insertAdjacentHTML(
        "beforeend",
        `
        <div class="card">
          <div class="card-img">
            <img src="${item.image}" alt="${item.nom}">
          </div>
          <div class="card-body">
            <h4>${item.nom}</h4>
            <div class="rating">
              ${"★".repeat(Math.round(item.note))} (${item.note})
            </div>
            <p class="adresse">${item.adresse}</p>
            <span class="tag">${item.tag}</span>
            <button>Voir la fiche</button>
          </div>
        </div>
        `
      );
    });
  });
}


searchNameInput.addEventListener("input", liveSearch);
searchCityInput.addEventListener("input", liveSearch);




searchCityInput.addEventListener("input", () => {
  selectedCity = searchCityInput.value.toLowerCase();
  liveSearch();
});

