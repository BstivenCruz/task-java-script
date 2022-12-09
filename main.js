

let card = document.getElementById("cards")
let events = data.events
card.innerHTML = ""

for(let propiedades of events ) {
    card.innerHTML += `<div class="card ms-5 bg-secondary bg-opacity-50" style="width: 18rem;">
    <img src= "${propiedades.image}" class="card-img-top mt-3" alt="">
    <div class="card-body">
      <h5 class="card-title">${propiedades.name}</h5>
      <p class="card-text">${propiedades.description}</p>
      <a href="${propiedades._id}" class="btn btn-primary">more info</a>
    </div>
  </div>
  `  
}