import { createCard } from "./scripts/card.js";
import { recepes } from "./scripts/recipes.js";

let cardsContainer;
const allCards = [];

// array of selected IDs
let filteredCards = [];

const renderCards = () => {
  console.log(allCards);
  allCards.forEach((c) => c.element.remove());
  filteredCards.forEach((id) => {
    const current = allCards.find((card) => card.id === id);
    cardsContainer.appendChild(current.element);
  });
};

window.onload = () => {
  cardsContainer = document.getElementById("recepes");
  recepes.forEach((recepe) => {
    const card = createCard(recepe);
    allCards.push({
      id: recepe.id,
      recepe: recepe,
      element: card,
    });
    filteredCards.push(recepe.id);
  });

  renderCards();

  const input = document.getElementById("input-search");
  input.oninput = (ev) => {
    const search = ev.target.value.toLowerCase();
    if (search.length > 3) {
      filteredCards = allCards
        .filter((card) => {
          const recepe = card.recepe;
          if (recepe.name.toLowerCase().includes(search)) return true;
          if (recepe.description.toLowerCase().includes(search)) return true;
          return recepe.ingredients.find((ing) =>
            ing.ingredient.includes(search)
          );
        })
        .map((item) => item.id);
      renderCards();
    } else {
      filteredCards = allCards.map((c) => c.id);
      renderCards();
    }
  };
};
