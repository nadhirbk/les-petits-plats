export const createCard = (recepe) => {
  const template = document.getElementById("recepe").content;
  const card = template.cloneNode(true);
  const img = card.querySelector(".recepe-img");
  img.src = "./assets/recepes/" + recepe.image;
  const title = card.querySelector(".recepe-title");
  title.textContent = recepe.name;
  const description = card.querySelector(".description");
  description.textContent = recepe.description;
  return card.querySelector(".card");
};
