// script.js
const products = [
  // Cohiba
  {
    id: "cohiba-siglo-ii",
    brand: "Cohiba",
    name: "Cohiba Siglo II",
    vitola: "129mm × 42 • Mareva",
    image: "imageshcc/cohiba1.jpg",
    authenticity: true,
    rare: false,
    limited: false,
  },
  {
    id: "cohiba-siglo-iii",
    brand: "Cohiba",
    name: "Cohiba Siglo III",
    vitola: "159mm × 42 • Corona Grande",
    image: "imageshcc/cohiba2.jpg",
    authenticity: true,
    rare: false,
    limited: false,
  },
  {
    id: "cohiba-siglo-iv",
    brand: "Cohiba",
    name: "Cohiba Siglo IV",
    vitola: "143mm × 46 • Corona Gorda",
    image: "imageshcc/cohiba3.jpg",
    authenticity: true,
    rare: false,
    limited: false,
  },
  {
    id: "cohiba-siglo-vi",
    brand: "Cohiba",
    name: "Cohiba Siglo VI",
    vitola: "160mm × 54 • Canonazo",
    image: "imageshcc/cohiba4.jpg",
    authenticity: true,
    rare: false,
    limited: false,
  },
  {
    id: "cohiba-behike-52",
    brand: "Cohiba",
    name: "Cohiba Behike 52",
    vitola: "119mm × 52 • BHK 52",
    image: "imageshcc/cohiba5.jpg",
    authenticity: true,
    rare: true,
    limited: true,
  },
  {
    id: "cohiba-behike-54",
    brand: "Cohiba",
    name: "Cohiba Behike 54",
    vitola: "144mm × 54 • BHK 54",
    image: "imageshcc/cohiba6.jpg",
    authenticity: true,
    rare: true,
    limited: true,
  },
  {
    id: "cohiba-behike-56",
    brand: "Cohiba",
    name: "Cohiba Behike 56",
    vitola: "166mm × 56 • BHK 56",
    image: "imageshcc/cohiba7.jpg",
    authenticity: true,
    rare: true,
    limited: true,
  },
  {
    id: "cohiba-maduro-magicos",
    brand: "Cohiba",
    name: "Cohiba Maduro 5 Mágicos",
    vitola: "115mm × 52 • Magicos",
    image: "imageshcc/cohiba8.jpg",
    authenticity: true,
    rare: false,
    limited: false,
  },
  {
    id: "cohiba-maduro-genios",
    brand: "Cohiba",
    name: "Cohiba Maduro 5 Genios",
    vitola: "140mm × 54 • Genios",
    image: "imageshcc/cohiba9.jpg",
    authenticity: true,
    rare: false,
    limited: false,
  },
  {
    id: "cohiba-novedosos",
    brand: "Cohiba",
    name: "Cohiba Novedosos",
    vitola: "156mm × 50 • Novedosos",
    image: "imageshcc/cohiba10.jpg",
    authenticity: true,
    rare: true,
    limited: true,
  },
  {
    id: "cohiba-robustos",
    brand: "Cohiba",
    name: "Cohiba Robustos",
    vitola: "124mm × 50 • Robusto",
    image: "imageshcc/cohiba11.jpg",
    authenticity: true,
    rare: false,
    limited: false,
  },
  {
    id: "cohiba-robustos-supremos",
    brand: "Cohiba",
    name: "Cohiba Robustos Supremos EL 2014",
    vitola: "127mm × 58 • Robusto Extra",
    image: "imageshcc/cohiba12.jpg",
    authenticity: true,
    rare: true,
    limited: true,
  },
  {
    id: "cohiba-talismán",
    brand: "Cohiba",
    name: "Cohiba Talismán EL 2017",
    vitola: "154mm × 54 • Sublimes Extra",
    image: "imageshcc/cohiba13.jpg",
    authenticity: true,
    rare: true,
    limited: true,
  },
  {
    id: "cohiba-esplendidos",
    brand: "Cohiba",
    name: "Cohiba Espléndidos",
    vitola: "178mm × 47 • Julieta No.2",
    image: "imageshcc/cohiba14.jpg",
    authenticity: true,
    rare: false,
    limited: false,
  },
  {
    id: "cohiba-majestuosos-1966",
    brand: "Cohiba",
    name: "Cohiba 50 Aniversario Majestuosos 1966",
    vitola: "150mm × 58 • Majestuosos",
    image: "imageshcc/cohiba15.jpg",
    authenticity: true,
    rare: true,
    limited: true,
  },
  {
    id: "cohiba-piramides-extra-tubos",
    brand: "Cohiba",
    name: "Cohiba Pirámides Extra Tubos",
    vitola: "156mm × 54 • Pirámides Extra",
    image: "imageshcc/cohiba16.jpg",
    authenticity: true,
    rare: false,
    limited: false,
  },
  {
    id: "cohiba-siglo-vi-tubos",
    brand: "Cohiba",
    name: "Cohiba Siglo VI Tubos",
    vitola: "150mm × 52 • Canonazo",
    image: "imageshcc/cohiba17.jpg",
    authenticity: true,
    rare: false,
    limited: false,
  },

  // Hoyo de Monterrey
  {
    id: "hoyo-epicure-2",
    brand: "Hoyo de Monterrey",
    name: "Hoyo de Monterrey Epicure No.2",
    vitola: "124mm × 50 • Robusto",
    image: "imageshcc/hoyo1.jpg",
    authenticity: true,
    rare: false,
    limited: false,
  },
  {
    id: "hoyo-san-juan",
    brand: "Hoyo de Monterrey",
    name: "Hoyo de Monterrey Le Hoyo San Juan",
    vitola: "149mm × 54 • Geniales",
    image: "imageshcc/hoyo2.jpg",
    authenticity: true,
    rare: false,
    limited: false,
  },
  {
    id: "hoyo-double-coronas",
    brand: "Hoyo de Monterrey",
    name: "Hoyo de Monterrey Double Coronas",
    vitola: "194mm × 49 • Prominentes",
    image: "imageshcc/hoyo3.jpg",
    authenticity: true,
    rare: true,
    limited: true,
  },
  {
    id: "hoyo-grand-epicure",
    brand: "Hoyo de Monterrey",
    name: "Hoyo de Monterrey Grand Epicure EL 2013",
    vitola: "133mm × 55 • Grand Epicure",
    image: "imageshcc/hoyo4.jpg",
    authenticity: true,
    rare: true,
    limited: true,
  },

  // Romeo y Julieta
  {
    id: "ryj-no1-at",
    brand: "Romeo y Julieta",
    name: "Romeo y Julieta No.1 AT",
    vitola: "140mm × 40 • Cremas",
    image: "imageshcc/romeo1.jpg",
    authenticity: true,
    rare: false,
    limited: false,
  },
  {
    id: "ryj-short-churchill",
    brand: "Romeo y Julieta",
    name: "Romeo y Julieta Short Churchill",
    vitola: "124mm × 50 • Robusto",
    image: "imageshcc/romeo2.jpg",
    authenticity: true,
    rare: false,
    limited: false,
  },
  {
    id: "ryj-wide-churchill",
    brand: "Romeo y Julieta",
    name: "Romeo y Julieta Wide Churchill",
    vitola: "130mm × 55 • Montesco",
    image: "imageshcc/romeo3.jpg",
    authenticity: true,
    rare: false,
    limited: false,
  },
  {
    id: "ryj-churchill",
    brand: "Romeo y Julieta",
    name: "Romeo y Julieta Churchill",
    vitola: "178mm × 47 • Julieta No.2",
    image: "imageshcc/romeo4.jpg",
    authenticity: true,
    rare: false,
    limited: false,
  },

  // Montecristo
  {
    id: "monte-no2",
    brand: "Montecristo",
    name: "Montecristo No.2",
    vitola: "156mm × 52 • Pirámide",
    image: "imageshcc/montecristo1.jpg",
    authenticity: true,
    rare: false,
    limited: false,
  },
  {
    id: "monte-no4",
    brand: "Montecristo",
    name: "Montecristo No.4",
    vitola: "129mm × 42 • Mareva",
    image: "imageshcc/montecristo2.jpg",
    authenticity: true,
    rare: false,
    limited: false,
  },
  {
    id: "monte-edmundo",
    brand: "Montecristo",
    name: "Montecristo Edmundo",
    vitola: "135mm × 52 • Edmundo",
    image: "imageshcc/montecristo3.jpg",
    authenticity: true,
    rare: false,
    limited: false,
  },
  {
    id: "monte-petite-no2",
    brand: "Montecristo",
    name: "Montecristo Petit No.2",
    vitola: "120mm × 52 • Petit Pirámide",
    image: "imageshcc/montecristo4.jpg",
    authenticity: true,
    rare: false,
    limited: false,
  },
  {
    id: "monte-petite-edmundo",
    brand: "Montecristo",
    name: "Montecristo Petit Edmundo",
    vitola: "110mm × 52 • Petit Edmundo",
    image: "imageshcc/montecristo5.jpg",
    authenticity: true,
    rare: false,
    limited: false,
  },
  {
    id: "monte-open-eagle",
    brand: "Montecristo",
    name: "Montecristo Open Eagle",
    vitola: "150mm × 54 • Geniales",
    image: "imageshcc/montecristo6.jpg",
    authenticity: true,
    rare: false,
    limited: false,
  },
  {
    id: "monte-520-el-2012",
    brand: "Montecristo",
    name: "Montecristo 520 EL 2012",
    vitola: "155mm × 55 • 520",
    image: "imageshcc/montecristo7.jpg",
    authenticity: true,
    rare: true,
    limited: true,
  },
  {
    id: "monte-supremos-el-2019",
    brand: "Montecristo",
    name: "Montecristo Supremos EL 2019",
    vitola: "130mm × 55 • Montesco",
    image: "imageshcc/montecristo8.jpg",
    authenticity: true,
    rare: true,
    limited: true,
  },
  {
    id: "monte-80-anniversario",
    brand: "Montecristo",
    name: "Montecristo 80 Aniversario",
    vitola: "165mm × 55 • 80 Aniversario",
    image: "imageshcc/montecristo9.jpg",
    authenticity: true,
    rare: true,
    limited: true,
  },

  // Partagás
  {
    id: "partagas-serie-e-no2",
    brand: "Partagás",
    name: "Partagás Serie E No.2",
    vitola: "140mm × 54 • Duke",
    image: "imageshcc/partagas1.jpg",
    authenticity: true,
    rare: false,
    limited: false,
  },
  {
    id: "partagas-serie-p-no2",
    brand: "Partagás",
    name: "Partagás Serie P No.2",
    vitola: "140mm × 52 • Pirámide",
    image: "imageshcc/partagas2.jpg",
    authenticity: true,
    rare: false,
    limited: false,
  },
  {
    id: "partagas-serie-e-no4",
    brand: "Partagás",
    name: "Partagás Serie E No.4",
    vitola: "124mm × 50 • Robusto",
    image: "imageshcc/partagas3.jpg",
    authenticity: true,
    rare: false,
    limited: false,
  },
  {
    id: "partagas-salomones-lcdh",
    brand: "Partagás",
    name: "Partagás Salomones LCDH",
    vitola: "184mm × 57 • Salomones",
    image: "imageshcc/partagas4.jpg",
    authenticity: true,
    rare: true,
    limited: true,
  },
  {
    id: "partagas-lusitanias",
    brand: "Partagás",
    name: "Partagás Lusitanias",
    vitola: "194mm × 49 • Prominentes",
    image: "imageshcc/partagas5.jpg",
    authenticity: true,
    rare: true,
    limited: false,
  },

  // Trinidad
  {
    id: "trinidad-topes-el-2016",
    brand: "Trinidad",
    name: "Trinidad Topes EL 2016",
    vitola: "125mm × 56 • Topes",
    image: "imageshcc/ttt.jpg",
    authenticity: true,
    rare: true,
    limited: true,
  },

  // H. Upmann
  {
    id: "hupmann-magnum-56-el-2015",
    brand: "H. Upmann",
    name: "H. Upmann Magnum 56 EL 2015",
    vitola: "150mm × 56 • Magnum 56",
    image: "imageshcc/hupmann.jpg",
    authenticity: true,
    rare: true,
    limited: true,
  },

  // Punch
  {
    id: "punch-double-coronas",
    brand: "Punch",
    name: "Punch Double Coronas",
    vitola: "194mm × 49 • Prominentes",
    image: "imageshcc/punch.jpg",
    authenticity: true,
    rare: false,
    limited: false,
  },

  // Bolívar
  {
    id: "bolivar-belicosos-finos",
    brand: "Bolívar",
    name: "Bolívar Belicosos Finos",
    vitola: "140mm × 52 • Campana",
    image: "imageshcc/bolivar1.jpg",
    authenticity: true,
    rare: false,
    limited: false,
  },
  {
    id: "bolivar-royal-coronas-at",
    brand: "Bolívar",
    name: "Bolívar Royal Coronas AT",
    vitola: "124mm × 50 • Robusto (Tubos)",
    image: "imageshcc/bolivar2.jpg",
    authenticity: true,
    rare: false,
    limited: false,
  },
  {
    id: "bolivar-royal-coronas",
    brand: "Bolívar",
    name: "Bolívar Royal Coronas",
    vitola: "124mm × 50 • Robusto",
    image: "imageshcc/bolivar3.jpg",
    authenticity: true,
    rare: false,
    limited: false,
  },
];

let inquiryCart = [];
let currentContextProduct = null;

const collectionGrid = document.getElementById("collectionGrid");
const rareGrid = document.getElementById("rareGrid");
const cartToggle = document.getElementById("cartToggle");
const cartClose = document.getElementById("cartClose");
const inquiryCartEl = document.getElementById("inquiryCart");
const inquiryItemsEl = document.getElementById("inquiryItems");
const inquiryEmptyEl = document.getElementById("inquiryEmpty");
const cartCountEl = document.getElementById("cartCount");
const requestQuoteBtn = document.getElementById("requestQuoteBtn");
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
const conciergeWidget = document.getElementById("conciergeWidget");
const conciergeToggle = document.getElementById("conciergeToggle");
const conciergeAnswer = document.getElementById("conciergeAnswer");
const conciergeContext = document.getElementById("conciergeContext");
const yearEl = document.getElementById("year");

function renderProducts(filterBrand = "all") {
  if (!collectionGrid) return;
  collectionGrid.innerHTML = "";
  const filtered = filterBrand === "all" ? products : products.filter((p) => p.brand === filterBrand);
  filtered.forEach((product) => {
    const card = document.createElement("article");
    card.className = "product-card reveal";
    card.dataset.brand = product.brand;
    card.dataset.productId = product.id;

    card.innerHTML = `
      <div class="product-image-wrap">
        <img src="${product.image}" alt="${product.name} Cuban cigar" loading="lazy" />
        <span class="product-badge">${product.brand}</span>
      </div>
      <div class="product-body">
        <div class="product-brand">${product.brand}</div>
        <div class="product-name">${product.name}</div>
        <div class="product-vitola">${product.vitola}</div>
        <div class="product-meta">
          <div class="authenticity-badge">
            <span class="authenticity-dot"></span>
            <span>Authentic Cuban</span>
          </div>
        </div>
        <div class="product-actions">
          <button class="btn btn-inquiry" data-action="add-inquiry" data-id="${product.id}">
            🛒 Add To Inquiry Cart
          </button>
          <button class="btn btn-ask-price" data-action="ask-price" data-id="${product.id}">
            Ask For Price
          </button>
        </div>
        <button class="text-link" data-action="ask-concierge" data-id="${product.id}">
          Ask concierge about this cigar
        </button>
      </div>
    `;
    collectionGrid.appendChild(card);
  });
}

function renderRare() {
  if (!rareGrid) return;
  rareGrid.innerHTML = "";
  const rareProducts = products.filter((p) => p.rare || p.limited);
  rareProducts.forEach((product) => {
    const card = document.createElement("article");
    card.className = "rare-card reveal";
    card.dataset.productId = product.id;
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name} rare Cuban cigar" loading="lazy" />
      <h3>${product.name}</h3>
      <p>${product.brand} • ${product.vitola}</p>
      <p>Presented as a collector's opportunity, ideal for special occasions or long-term aging.</p>
      <div class="product-actions" style="margin-top:10px;">
        <button class="btn btn-inquiry" data-action="add-inquiry" data-id="${product.id}">
          🛒 Add To Inquiry Cart
        </button>
        <button class="btn btn-ask-price" data-action="ask-price" data-id="${product.id}">
          Ask For Price
        </button>
      </div>
    `;
    rareGrid.appendChild(card);
  });
}

function updateCartUI() {
  cartCountEl.textContent = inquiryCart.length.toString();
  inquiryItemsEl.innerHTML = "";
  if (inquiryCart.length === 0) {
    inquiryEmptyEl.style.display = "block";
    return;
  }
  inquiryEmptyEl.style.display = "none";
  inquiryCart.forEach((item) => {
    const li = document.createElement("li");
    li.className = "inquiry-item";
    li.innerHTML = `
      <div class="inquiry-thumb">
        <img src="${item.image}" alt="${item.name}" />
      </div>
      <div class="inquiry-info">
        <h4>${item.name}</h4>
        <p>${item.brand} • ${item.vitola}</p>
      </div>
      <button class="inquiry-remove" data-id="${item.id}">Remove</button>
    `;
    inquiryItemsEl.appendChild(li);
  });
}

function addToInquiry(productId) {
  const product = products.find((p) => p.id === productId);
  if (!product) return;
  if (!inquiryCart.some((p) => p.id === product.id)) {
    inquiryCart.push(product);
    updateCartUI();
  }
  openCart();
}

function removeFromInquiry(productId) {
  inquiryCart = inquiryCart.filter((p) => p.id !== productId);
  updateCartUI();
}

function openCart() {
  inquiryCartEl.classList.add("open");
  inquiryCartEl.setAttribute("aria-hidden", "false");
}

function closeCart() {
  inquiryCartEl.classList.remove("open");
  inquiryCartEl.setAttribute("aria-hidden", "true");
}

function handleAskForPrice(productId) {
  const product = products.find((p) => p.id === productId);
  if (!product) return;
  const text = encodeURIComponent(
    `Hello HCC,\n\nI would like to ask for the current price of:\n\n${product.name}\nBrand: ${product.brand}\nVitola: ${product.vitola}\n\nPlease share availability and details.`
  );
  const url = `https://wa.me/963988614489?text=${text}`;
  window.open(url, "_blank");
}

function handleRequestQuote() {
  if (inquiryCart.length === 0) {
    alert("Your inquiry list is empty. Please add at least one cigar.");
    return;
  }
  const lines = inquiryCart.map(
    (p, index) => `${index + 1}. ${p.name} (${p.brand}) — ${p.vitola}`
  );
  const text = encodeURIComponent(
    `Hello HCC,\n\nI would like to request a quote for the following cigars:\n\n${lines.join(
      "\n"
    )}\n\nPlease share availability, recommended pairings, and any collector notes.\n`
  );
  const url = `https://wa.me/963988614489?text=${text}`;
  window.open(url, "_blank");
}

function toggleNav() {
  navLinks.classList.toggle("open");
}

function closeNav() {
  navLinks.classList.remove("open");
}

function toggleConcierge() {
  conciergeWidget.classList.toggle("open");
}

function setConciergeContext(product) {
  if (!product) {
    conciergeContext.textContent = "";
    return;
  }
  conciergeContext.textContent = `You are currently viewing: ${product.name} (${product.brand}). Our recommendations will prioritize similar profiles.`;
}

function getConciergeAnswer(key) {
  const base = {
    authentic:
      "Every cigar in our collection is an authentic Cuban, sourced through trusted channels and stored in controlled humidors. We do not work with non-Cuban or unverified stock.",
    payment:
      "We keep payment discreet and flexible. Once we confirm your selection and availability via WhatsApp, we will share the most convenient payment options for your region.",
    photos:
      "Yes. Before you commit, we can share real photos and close-ups of the exact boxes or cigars you will receive.",
    humidor:
      "Absolutely. Share a photo or description of your humidor via WhatsApp and we will guide you on seasoning, humidity, and ideal cigar placement.",
    resources:
      "We offer tailored guidance for beginners, including cigar selection, cutting, lighting, and storage. Tell us your taste and we will build a simple starting path.",
    beginner:
      "For beginners, we usually recommend balanced, medium-bodied cigars with a smooth profile. Share what you normally enjoy (coffee, chocolate, whisky, etc.) and we will suggest specific vitolas from our collection.",
    occasions:
      "For special occasions, we often suggest iconic vitolas—Churchills, Double Coronas, or limited editions that feel ceremonial. Tell us about the event and we will match the cigar to the moment.",
    storage:
      "Cigars should be stored around 65–70% humidity and 18–21°C. A seasoned humidor with a reliable hygrometer is essential. If you share your current setup, we can fine-tune it together.",
  };

  let answer = base[key] || "";

  if (currentContextProduct) {
    const product = products.find((p) => p.id === currentContextProduct);
    if (product) {
      const brandGroup = products.filter((p) => p.brand === product.brand && p.id !== product.id);
      const alt = brandGroup.slice(0, 2);
      const altText =
        alt.length > 0
          ? `\n\nSince you are exploring ${product.name}, you may also appreciate:\n- ${alt
              .map((p) => `${p.name} (${p.vitola})`)
              .join("\n- ")}`
          : "";
      answer += altText;
    }
  }

  return answer;
}

function handleConciergeQuestion(key) {
  const answer = getConciergeAnswer(key);
  conciergeAnswer.textContent = answer;
}

function initConcierge() {
  const questionButtons = document.querySelectorAll(".concierge-question");
  questionButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const key = btn.dataset.question;
      handleConciergeQuestion(key);
    });
  });
}

function initFilters() {
  const filterButtons = document.querySelectorAll(".filter-btn");
  filterButtons.forEach((btn) => {
    btn.addEventListener( "click",
      () => {
        filterButtons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        const filter = btn.dataset.filter;
        renderProducts(filter === "all" ? "all" : filter);
        attachProductEvents();
        initReveal();
      }
    );
  });
}

function attachProductEvents() {
  document.querySelectorAll("[data-action='add-inquiry']").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.id;
      addToInquiry(id);
    });
  });

  document.querySelectorAll("[data-action='ask-price']").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.id;
      handleAskForPrice(id);
    });
  });

  document.querySelectorAll("[data-action='ask-concierge']").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.id;
      currentContextProduct = id;
      const product = products.find((p) => p.id === id);
      setConciergeContext(product);
      conciergeWidget.classList.add("open");
      handleConciergeQuestion("beginner");
    });
  });
}

function initCartEvents() {
  cartToggle.addEventListener("click", openCart);
  cartClose.addEventListener("click", closeCart);
  inquiryItemsEl.addEventListener("click", (e) => {
    const target = e.target;
    if (target.classList.contains("inquiry-remove")) {
      const id = target.dataset.id;
      removeFromInquiry(id);
    }
  });
  requestQuoteBtn.addEventListener("click", handleRequestQuote);
}

function initNavEvents() {
  navToggle.addEventListener("click", toggleNav);
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeNav);
  });
}

function initConciergeEvents() {
  conciergeToggle.addEventListener("click", toggleConcierge);
}

function initReveal() {
  const revealEls = document.querySelectorAll(".reveal, .product-card, .rare-card");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  revealEls.forEach((el) => observer.observe(el));
}

function initYear() {
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear().toString();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  renderRare();
  attachProductEvents();
  initFilters();
  initCartEvents();
  initNavEvents();
  initConcierge();
  initConciergeEvents();
  initConnoisseurChoice();
  initReveal();
  initYear();
});
/* ==========================================================================
   The Connoisseur's Choice — Gamified Discount Reveal
   ========================================================================== */

const CONNOISSEUR_STORAGE_KEY = "hcc_connoisseur_fortune";
const CONNOISSEUR_BRANDS = ["Cohiba", "Montecristo", "Partagas"];
const CONNOISSEUR_DISCOUNTS = [5, 10, 15, 20];

let connoisseurStageEl, connoisseurGridEl, connoisseurClaimedEl;
let rewardCardEl, rewardBrandLabelEl, rewardPercentEl, rewardCodeEl, rewardCopyBtn, rewardWhatsappBtn;
let claimedBrandLabelEl, claimedPercentEl, claimedCodeEl, claimedCopyBtn, claimedWhatsappBtn;

/**
 * Generates a promo code like "HCC-COHIBA15" from a brand + discount pair.
 */
function buildPromoCode(brand, discount) {
  const brandSlug = brand.toUpperCase().replace(/[^A-Z]/g, "");
  return `HCC-${brandSlug}${discount}`;
}

/**
 * Lightly obfuscates the reward record before storing it, so the raw
 * percentage/code aren't sitting in localStorage as plain, editable JSON.
 * This is NOT real security (nothing in client-side JS can be) — it just
 * raises the bar above "open devtools, change the number."
 */
function encodeReward(reward) {
  const payload = JSON.stringify(reward);
  return btoa(unescape(encodeURIComponent(payload)));
}

function decodeReward(encoded) {
  try {
    const payload = decodeURIComponent(escape(atob(encoded)));
    const reward = JSON.parse(payload);
    if (
      !reward ||
      typeof reward.brand !== "string" ||
      typeof reward.discount !== "number" ||
      typeof reward.code !== "string" ||
      !CONNOISSEUR_BRANDS.includes(reward.brand) ||
      !CONNOISSEUR_DISCOUNTS.includes(reward.discount)
    ) {
      return null;
    }
    return reward;
  } catch (err) {
    // Tampered or corrupted value — treat as no valid reward, fail locked.
    return null;
  }
}

function getStoredReward() {
  const raw = localStorage.getItem(CONNOISSEUR_STORAGE_KEY);
  if (!raw) return null;
  return decodeReward(raw);
}

function storeReward(reward) {
  localStorage.setItem(CONNOISSEUR_STORAGE_KEY, encodeReward(reward));
}

function generateReward(brand) {
  const discount =
    CONNOISSEUR_DISCOUNTS[Math.floor(Math.random() * CONNOISSEUR_DISCOUNTS.length)];
  return {
    brand,
    discount,
    code: buildPromoCode(brand, discount),
  };
}

/**
 * Placeholder hook — wire this into your existing cart/checkout logic.
 * Called once, immediately after a reward is revealed (not on reloads
 * of an already-claimed reward).
 */
function applyDiscountToCart(discountValue) {
  // Example integration:
  // cartDiscountPercent = discountValue;
  // updateCartUI();
  console.log(`[HCC] Discount of ${discountValue}% is ready to apply to the cart.`);
}

function buildRewardWhatsappUrl(reward) {
  const text = encodeURIComponent(
    `Hello HCC,\n\nI was selected for a Connoisseur's Choice reward:\n\nBrand: ${reward.brand}\nDiscount: ${reward.discount}% OFF\nPromo Code: ${reward.code}\n\nI'd like to redeem this on my order.`
  );
  return `https://wa.me/963988614489?text=${text}`;
}

function brandLabel(brand) {
  return brand === "Partagas" ? "Partagás Selection" : `${brand} Selection`;
}

/**
 * Renders the "already played" panel using a previously stored reward.
 */
function showClaimedState(reward) {
  connoisseurStageEl.style.display = "none";
  connoisseurClaimedEl.classList.add("is-visible");

  claimedBrandLabelEl.textContent = brandLabel(reward.brand);
  claimedPercentEl.textContent = `${reward.discount}% OFF`;
  claimedCodeEl.textContent = reward.code;
  claimedWhatsappBtn.href = buildRewardWhatsappUrl(reward);
}

/**
 * Plays the open/blur/reveal animation for a freshly chosen box, then
 * reveals the reward card with the given reward.
 */
function playRevealAnimation(chosenBoxEl, reward) {
  const boxes = connoisseurGridEl.querySelectorAll(".connoisseur-box");

  boxes.forEach((box) => {
    box.disabled = true;
    if (box === chosenBoxEl) {
      box.classList.add("is-opened");
    } else {
      box.classList.add("is-disabled");
    }
  });

  rewardBrandLabelEl.textContent = brandLabel(reward.brand);
  rewardPercentEl.textContent = `${reward.discount}% OFF`;
  rewardCodeEl.textContent = reward.code;
  rewardWhatsappBtn.href = buildRewardWhatsappUrl(reward);

  // Switching data-state triggers the CSS transition that fades in the card
  // after the box-opening animation has had time to play.
  connoisseurStageEl.dataset.state = "revealed";
}

function handleBoxClick(event) {
  // Guard: if a reward already exists (e.g. two rapid clicks before state
  // settles, or a stale page held open in another tab), never re-roll.
  if (getStoredReward()) {
    const existing = getStoredReward();
    showClaimedState(existing);
    return;
  }

  const boxEl = event.currentTarget;
  const brand = boxEl.dataset.brand;
  const reward = generateReward(brand);

  storeReward(reward);
  playRevealAnimation(boxEl, reward);
  applyDiscountToCart(reward.discount);
}

function handleCopyClick(button, codeEl) {
  const code = codeEl.textContent;
  navigator.clipboard
    .writeText(code)
    .then(() => {
      const originalText = button.textContent;
      button.textContent = "Copied";
      button.classList.add("is-copied");
      setTimeout(() => {
        button.textContent = originalText;
        button.classList.remove("is-copied");
      }, 1800);
    })
    .catch(() => {
      // Clipboard API unavailable (older browser / insecure context) —
      // the code is already visible on screen for manual copying.
    });
}

function initConnoisseurChoice() {
  connoisseurStageEl = document.getElementById("connoisseurStage");
  connoisseurGridEl = document.getElementById("connoisseurGrid");
  connoisseurClaimedEl = document.getElementById("connoisseurClaimed");

  // Section isn't on every page — bail quietly if it's not present.
  if (!connoisseurStageEl) return;

  rewardCardEl = document.getElementById("rewardCard");
  rewardBrandLabelEl = document.getElementById("rewardBrandLabel");
  rewardPercentEl = document.getElementById("rewardPercent");
  rewardCodeEl = document.getElementById("rewardCode");
  rewardCopyBtn = document.getElementById("rewardCopyBtn");
  rewardWhatsappBtn = document.getElementById("rewardWhatsappBtn");

  claimedBrandLabelEl = document.getElementById("claimedBrandLabel");
  claimedPercentEl = document.getElementById("claimedPercent");
  claimedCodeEl = document.getElementById("claimedCode");
  claimedCopyBtn = document.getElementById("claimedCopyBtn");
  claimedWhatsappBtn = document.getElementById("claimedWhatsappBtn");

  const existingReward = getStoredReward();

  if (existingReward) {
    // Already played (including across refresh/new tab) — lock the boxes
    // out entirely and show their original result.
    showClaimedState(existingReward);
    return;
  }

  // Only attach click handlers if no reward is on record yet.
  connoisseurGridEl.querySelectorAll(".connoisseur-box").forEach((box) => {
    box.addEventListener("click", handleBoxClick);
  });

  rewardCopyBtn.addEventListener("click", () => handleCopyClick(rewardCopyBtn, rewardCodeEl));
  claimedCopyBtn.addEventListener("click", () => handleCopyClick(claimedCopyBtn, claimedCodeEl));
}