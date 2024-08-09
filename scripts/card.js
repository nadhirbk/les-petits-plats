export const createCard = () => {
  const template = document.getElementById("recepe").content;
  const card = template.cloneNode(true);
  return card;
};
