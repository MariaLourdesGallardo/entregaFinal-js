const modalContainer = document.querySelector("#carritoList")
console.log(modalContainer)

const bajarDelLs = (key) =>{
    return JSON.parse(localStorage.getItem(key)) || [] 
} 

const subirAlLs = (key,valor) =>{
    localStorage.setItem(key,JSON.stringify(valor))
}

let carrito = bajarDelLs("productos")

console.log(carrito)


const modalHeader = document.createElement("div")
modalHeader.className = "modal-header"
modalHeader.innerHTML = `
    <h1 class= "modal-header-title"> Mi Carrito </h1>
` 
modalContainer.append(modalHeader)

const modalButton = document.createElement("h2")
modalButton.className = "modal-header-button"
modalButton.innerText = " X "

modalHeader.append(modalButton)

modalButton.addEventListener("click", () =>{
    modalContainer.style.display = "none"
    window.location.href = "../index.html"
})



const pintarCarrito = () => {

carrito.forEach((element) =>{
    const cardsCarrito = document.createElement("div")
    cardsCarrito.className ="cardsCarrito"
    cardsCarrito.innerHTML = `
        <div class="card text-center">
            <div class="card-header">
                ${element.nombre}
            </div>

            <div class="card-body d-flex">
                <div>
                    <img src=${element.img} alt=${element.nombre}>
                </div>
                <div>
                    <h5 class="card-title">${element.marca} </h5>
                    <p class="card-text">${element.descripcion1} </p>
                    <p> Cantidad : ${element.cantidad}</p>
                    <div>
                        ${element.precio} <span>€</span>
                    </div>
                    <div>
                    <span href="#" class="quitar_boton btn btn-danger" id=${element.id} >Quitar</span>
                    <span href="#" class="quitar_boton btn btn-primary" id=${element.id} >Comprar</span>
                    </div>
                    
                </div>
            
            </div>
            <div class="card-footer text-muted">
                *Productos incluidos en el envío gratuito a domicilio por compras superiores a 30€
            </div>
        </div>
    `
    modalContainer.append(cardsCarrito)

    
})
}

pintarCarrito()

let total = carrito.reduce( (acc,el) => acc + el.precio, 0)



total = Math.round(total)


const modalTotal = document.createElement("div")
modalTotal.className = "total-content"
modalTotal.innerHTML = `
    Total a pagar: ${total} <span>€</span>
    `
modalContainer.append(modalTotal)






//pruebas

const eliminarProducto = () =>{
    const encontarId = carrito.find ( (el) => el.id )


    carrito = carrito.filter (( elem ) =>{
        return elem !== encontarId
    })
    
    subirAlLs("productos",carrito)

    
}


modalContainer.addEventListener("click", (e) =>{
    if(e.target.classList.contains("btn-danger")){
        console.log(e.target.id)
        eliminarProducto()
        pintarCarrito()      
    }
})















// const btnQuitar = document.querySelectorAll(".btn-danger")

// console.log(btnQuitar)

// for ( const idBtn of btnQuitar){
//     console.log(idBtn.id)

// }






// const findId = carrito.find(element => {
//     element.id === modalContainer.addEventListener("click", (e) =>{
//         if(e.target.classList.contains("btn-danger")){
//             console.log(e.target.id)
                
//         }
//        console.log(element.id)     
//     })
// })
// console.log(findId)






