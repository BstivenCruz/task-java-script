import {imprimirCards,imprimirCategorias,filtroGeneral  } from "./module/funciones.js";


let card = document.getElementById("cards")
let events = data.events
card.innerHTML = ""

let pastEvents = events.filter(propiedades => propiedades.date < "2022-01-01")



    


let category = document.getElementById("checkbox")

const categories = events.reduce((acumula,item) => {
  if ( !acumula.includes(item.category)){
    acumula.push(item.category)
  }
  return acumula
},[]
)




category.addEventListener("change", (e) => {

  let filtraCategoria = filtroGeneral(pastEvents,inputSearch)
   
  imprimirCards(filtraCategoria,card);
  
     
  });

  
  
  
  
  
  let inputSearch = document.getElementById("input_search")
  
  inputSearch.addEventListener( "input" , (e) => {
    let filtraBusqueda = filtroGeneral(pastEvents,inputSearch)
    imprimirCards(filtraBusqueda, card);
  } )
  
  
  let listevens;
  fetch("https://amazing-events.onrender.com/api/events")
    .then((promesa) => promesa.json())
    .then((eventsf) => {
      listevens = eventsf;
      imprimirCards(pastEvents, card);
      imprimirCategorias(categories, category)
    });
  
  

  
  