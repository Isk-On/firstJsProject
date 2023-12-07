// let stars = "";

// for (let i = 1; i <= question; i++) {
//    stars += "*";
// }

// for (let i = 1; i <= question; i++) {
//   stars = stars.slice(0, -1);
//   const newh1 = document.createElement("h1");
//   newh1.textContent = stars;
//   document.body.appendChild(newh1);
// }

const output = document.querySelector(".output");
const btnAdd = document.querySelector(".addCard");
const inputText = document.querySelector(".textCard");
const imgPhoto = document.querySelector(".CardImg");

btnAdd.onclick = function () {
  const cardsText = document.createElement("h1");
  const img = document.createElement("img");
  const btnRemove = document.createElement("button");
  const card = document.createElement("div");
  card.classList.add("card");
  btnRemove.textContent = "Удалить";
  cardsText.textContent = inputText.value;
  img.src =
    imgPhoto.value != ""
      ? imgPhoto.value
      : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeaLaNSjg0-WN6I5z40bytBLv90Jw9sBkiig&usqp=CAU";

  card.appendChild(img);
  card.appendChild(cardsText);
  card.appendChild(btnRemove);
  output.appendChild(card);

  btnRemove.onclick = function () {
    card.remove();
  };
};
