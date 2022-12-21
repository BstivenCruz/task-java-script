let events = data.events;

const queryString = location.search; // aca llamo a location y ainput que tiene cada id
console.log(queryString);
const param = new URLSearchParams(queryString);
const id = param.get("id");

//urlsearchparam este permite y define metodos para trabajar con url de los id

let everyEvent = events.find((item) => item._id == id); //igualar los id de categorias con los id search usando find porque?
// everyEvents me va a devolver un objeto y ese objeto a vamos a usar para randerizar las cards..


let container = document.getElementById("container");


function imprimirDetails(algo, lugar) {

  lugar.innerHTML = `

  <img src="${algo.image}" class="img-detail rounded w-50 shadow-lg" alt="${algo.name}">
  
<div class="bg-secondary bg-opacity-25 p-5 m-1 w-50 shadow-lg rounded text-dark text-opacity-75" >
  <h3 class="p-4 text-center" >${algo.name}</h3>
  <p class="text-center">${algo.description}</p>
  <p class="text-center">date: ${algo.date}</p>
  <p class="text-center">price: ${algo.price}</p>
  <p class="text-center">place: ${algo.place}</p>
  <p class="text-center">capacity : ${algo.capacity}</p>
</div>
`}
  

 
let listevens;
fetch("https://amazing-events.onrender.com/api/events")
  .then((promesa) => promesa.json())
  .then((eventsf) => {
    listevens = eventsf;
    imprimirDetails(everyEvent,container)
  }); 
