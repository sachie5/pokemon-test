import "./styles/style.scss";
import { pokemonArray } from "./data/pokemon.ts";

const body = document.querySelector<HTMLBodyElement>("body");
const main = document.querySelector<HTMLElement>(".card-container");
const heading = document.querySelector<HTMLHeadingElement>("h1");

if (!main || !body || !heading) {
  throw new Error("Issues with selector");
};

const makePokemonCard = (arr1: Pokemon[]) => {
  for (let index = 0; index < arr1.length; index++) {
    main.innerHTML += `<div class="card">
    <img class = "card__image" src = "${arr1[index].sprite}">
    <div class = "card__content">
    <h2 class="card__heading">${arr1[index].name[0].toUpperCase()}${arr1[index].name.slice(1)} </h2>
    <p class="card__text">${arr1[index].name[0].toUpperCase()}${arr1[index].name.slice(1)} (#${arr1[index].id}) is a ${arr1[index].types.join(" & ")} type pokemon.  </p>
</div>
</div> `;
  }
};

makePokemonCard(pokemonArray);

const input = document.createElement("label")
input.innerHTML += "Search: <input type=text id=search>"
input.style.display = "flex";
body.prepend(input);

const inputSearch = document.querySelector<HTMLInputElement>("input");

if(!inputSearch) {
    throw new Error ("Issues with Selector");
}

const userValues = Object.values(pokemonArray);

const filteredResults = () => {
  const userInput = inputSearch.value;
  userValues.filter(value => {
    
  })
}
input.addEventListener("focus", filteredResults)

