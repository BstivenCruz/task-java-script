import {imprimirCards,imprimirCategorias,filtroGeneral  } from "./module/funciones.js";


let contenedorCard = document.getElementById("cards");
let events = data.events;


let category = document.getElementById("checkbox");

let categories = events.reduce((acumula, item) => {
  if (!acumula.includes(item.category)) {
    acumula.push(item.category);
  }
  return acumula;
}, []);

category.addEventListener("change", (e) => {
  let filtraCategoria = filtroGeneral(events,inputSearch);

  imprimirCards(filtraCategoria, contenedorCard);
});

// esto sigue el search

let inputSearch = document.getElementById("input_search");

inputSearch.addEventListener("input", (e) => {
  let filtraBusqueda = filtroGeneral(events,inputSearch);
  imprimirCards(filtraBusqueda, contenedorCard);
});


// aqui agrego la API.
let listevens;
fetch("https://amazing-events.onrender.com/api/events")
  .then((promesa) => promesa.json())
  .then((eventsf) => {
    listevens = eventsf;
    imprimirCards(events, contenedorCard);
    imprimirCategorias(categories, category)
  });
