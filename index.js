import { createCard } from "./scripts/card.js";

window.onload = () => {
  const cards = document.getElementById("recepes");
  for (let i = 0; i < 5; i++) {
    const card = createCard();
    cards.appendChild(card);
  }
};
