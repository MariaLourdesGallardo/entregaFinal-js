const boxCards = document.querySelector("#boxProductos")

const subirAlLs = (key,valor) =>{
    localStorage.setItem(key,JSON.stringify(valor))
}

const bajarDelLs = (key) =>{
    return JSON.parse(localStorage.getItem(key)) || [] 
} 

let carrito = []



const tienda = async () =>{
    
    try {
    const respuesta = await fetch ("https://63ce6953d2e8c29a9bd5f4c8.mockapi.io/api/productos")
    const data = await respuesta.json()
    // console.log(data)
    data.forEach( (element) =>{
        const card = document.createElement("div")
            card.className = "tarjeta text-center"
            card.innerHTML = `
                <div class="card " style="width: 12rem;" id=${element.id}>
                    <img src=${element.img} class="card-img-top" alt=${element.producto}
                </div>
                <div class="class="card-body ">
                    <div>
                        ${element.precio} <span>€</span>
                    </div>
                    <h5 class="card-title">${element.marca}</h5>
                    <p class="card-text">${element.producto}</p>
                    <button class="btn btn-primary" id=${element.id} >Añadir al carrito</button>
                </div>   
                     `
            boxCards.append(card)


            card.addEventListener("click", (e) =>{
                if(e.target.classList.contains("btn-primary")){
                    const repeat = carrito.some ( (el)=> el.id === element.id )
                    if (repeat){
                        carrito.map ((prod)=>{
                            if(prod.id === element.id){
                                prod.cantidad++
                            }
                        })
                    }else{
                        carrito.push({
                            id: element.id,
                            img: element.img,
                            marca: element.marca,
                            nombre: element.producto,
                            descripcion1: element.descripcion1,
                            precio: element.precio,
                            cantidad: element.cantidad
                        })
                        notifAgregarAlCarrito ("ha agregado un producto a su carrito")  

                    }
                    subirAlLs("productos",carrito)
                }
            })

    } )

    }catch(error){
        console.log(error)
    }
}
tienda()


const carritoModificado = bajarDelLs("productos")

carrito = carritoModificado
// console.log(carritoModificado)


const notifAgregarAlCarrito = ( texto ) =>{
    Toastify({
            text: texto,
            duration: 2000,
            close: true
        }).showToast()
}

