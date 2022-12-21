export function filtroGeneral(evento,search) {
  let filtraCategoria = filtrarLista(evento);
  let filtraBusqueda = filtroBusqueda(filtraCategoria, search.value);
  return filtraBusqueda;
}

export function filtroBusqueda(arregloDeObjetos, value) {
  let nuevaListaF = arregloDeObjetos.filter((element) =>
    element.name.toLowerCase().includes(value.toLowerCase())
  );

  return nuevaListaF;
}
export function filtrarLista(evento) {
  let cheked = [...document.querySelectorAll("input[type ='checkbox']:checked"),
  ].map((element) => element.value);
  let nuevaListaF = cheked
    .map((valor) =>
      evento.filter((objeto) => {
        return objeto.category === valor;
      })
    )
    .flat();
  if (!cheked.length) {
    return evento;
  } else {
    return nuevaListaF;
  }
}

export function imprimirCategorias(lista, donde) {
  donde.innerHTML = "";
  let categoria = "";
  lista.forEach((element) => {
    categoria += ` <div class="form-check form-check-inline">
    <input class="form-check-input" type="checkbox" id="${element}" value="${element}">
    <label class="form-check-label" for="${element}">${element}</label>
    </div>`;
  });
  donde.innerHTML = categoria;
}

export function imprimirCards(lista, card) {
  card.innerHTML = "";
  let listado = "";
  lista.forEach((propiedades) => {
    listado += `<div class="card ms-5 bg-secondary bg-opacity-50" style="width: 18rem;">
    <img src= "${propiedades.image}" class="card-img-top mt-3" alt="">
    <div class="card-body">
    <h5 class="card-title">${propiedades.name}</h5>
    <p class="card-text">${propiedades.description}</p>
    <a href="./Details.html?id=${propiedades._id} " class="btn btn-dark">more info</a>
    </div>
    </div>
`;
  });
  card.innerHTML = listado;
}