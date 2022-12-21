
let tableUpcoming= document.getElementById("tableUpcoming") 
let tablePast= document.getElementById("tablePast") 
let tableHome= document.getElementById("tableHome")


let events;
fetch('https://amazing-events.onrender.com/api/events')  
.then( res => { return res.json() } ) // .json me devuelve otra promesa
.then( data => {
    events= data.events
    //UpComing
    let upComing= events.filter(every => every.date >= data.currentDate) 

    renderTableUpcoming (upComing, tableUpcoming)

    let pastEvents= events.filter(every => every.date <= data.currentDate)
    

    renderTablePast (pastEvents, tablePast) 

    imprimirTabla(events, pastEvents,tableHome) 

}) 
.catch(err => { console.log(err)
    tableUpcoming.innerHTML= `
    <h3> "Error del servidor, estamos trabajando en ello para solucionarlo" </h3>
    `

    tablePast.innerHTML= `
    <h3> "Error del servidor, estamos trabajando en ello para solucionarlo" </h3>
    `
}) 






//Table Home
function imprimirTabla (listaHome, eventsPast,containerHome) {
    let assistance= [...eventsPast] 
    let arrayAssistance= [] 
   
    assistance.forEach(propiedades => {
        let percentage= (((propiedades.assistance*100) / propiedades.capacity))
        if(percentage> 95) {
        return arrayAssistance.push (`${propiedades.name}, ${((percentage).toFixed(2))}%`)
        }
    })
   
    let minorAssistance= [...eventsPast]
    let arrayMinorAssistance= []
    minorAssistance.forEach(menor => {
        let percentage= (((menor.assistance*100) / menor.capacity))
        if(percentage < 70) {
        return arrayMinorAssistance.push (`${menor.name}, ${((percentage).toFixed(2))}%`) 
        }
    })


    let capacityTotal= [...listaHome]
    capacityTotal.sort((event1,event2)=>event2.capacity-event1.capacity)
    console.table(capacityTotal) 

    containerHome.innerHTML = `
        <tr>
            <td class= "style: text-center"> ${arrayAssistance} </td> 
            <td class= "style: text-center"> ${arrayMinorAssistance} </td>
            <td class= "style: text-center"> ${capacityTotal[0].name},  ${capacityTotal[0].capacity }</td> 
        </tr>
    
`
}





//Table UPCOMING

function renderTableUpcoming (lista, container)  {
    container.innerHTML = "";
    let listado = "";
    lista.forEach((propiedades) => {
        listado += `
        <tr>
        <td class= "style: text-center"> ${propiedades.category}</td> 
        <td class= "style: text-center"> $ ${(propiedades.price * propiedades.estimate).toLocaleString()} </td>
        <td class= "style: text-center"> ${((propiedades.estimate * 100) / propiedades.capacity).toFixed(2)}%  </td> 
    </tr>
    
`; 
    });
    container.innerHTML = listado
}

//TABLE PASTEVENTS

function renderTablePast (listaPast, containerPast)  {
    containerPast.innerHTML = "";
    let listadoPast = "";
    listaPast.forEach((propiedades) => {
        listadoPast += `
        <tr>
            <td class= "style: text-center"> ${propiedades.category} </td> 
            <td class= "style: text-center"> $ ${(propiedades.price *  propiedades.assistance).toLocaleString()} </td>
            <td class= "style: text-center"> ${((propiedades.assistance * 100) / propiedades.capacity).toFixed(2) }%</td>
        </tr>
    
`;
    });
    containerPast.innerHTML = listadoPast
}  
