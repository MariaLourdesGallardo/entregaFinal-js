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




const cards = ( array ) =>{
    const nodos = array.reduce ( (acc, element) =>{
        return acc + `
            <div class="container card text-center my-4">
                <div class="card-header">
                    ${element.nombre}
                </div>

                <div class="card-body d-flex row">
                    <div>
                        <img src=${element.img} alt=${element.nombre}>
                    </div>
                    <div>
                        <h5 class="card-title">${element.marca} </h5>
                        <p class="card-text">${element.descripcion1} </p>
                        <p> Cantidad : ${element.cantidad}</p>
                    </div>
                    <div>
                        ${element.precio} <span>€</span>
                    </div>

                    <div>
                        <span href="#" class="quitar_boton btn btn-danger" id=${element.id} >Quitar</span>
                        <span href="#" class="quitar_boton btn btn-primary" id=${element.id} >Comprar</span>
                    </div>
            
                </div>
    
                <div class="card-footer text-muted">
                    *Productos incluidos en el envío gratuito a domicilio por compras superiores a 30€
                </div>
            </div>
            ` 
    }, "")
    // console.log(nodos)
    modalContainer.innerHTML = nodos
    
    let total = carrito.reduce( (acc,el) => acc + el.precio * el.cantidad, 0)
    total = Math.round(total)
    
    const modalTotal = document.createElement("div")
    modalTotal.className = "total-content"
    modalTotal.innerHTML = `
        Total a pagar: ${total} <span>€</span>
        `
    modalContainer.append(modalTotal)
}

cards(carrito)











const eliminarProducto = () =>{
    const encontarId = carrito.find ( (el) => el.id )


    carrito = carrito.filter (( elem ) =>{
        return elem !== encontarId
    })
    
    subirAlLs("productos",carrito)

    
}


modalContainer.addEventListener("click", (e) =>{
    if(e.target.classList.contains("btn-danger")){
        // console.log(e.target.id)
        eliminarProducto()
        cards(carrito) 
       
    }else if (e.target.classList.contains("btn-primary")){
        swal("Muchas Gracias por su Compra")
    }
})

















