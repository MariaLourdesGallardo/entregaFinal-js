const modoOscuro = document.querySelector("#botonModo")



modoOscuro.addEventListener("click", () =>{
  document.body.classList.toggle("dark")
  modoOscuro.classList.toggle("active")


  document.body.classList.contains("dark") ? sessionStorage.setItem("tema-oscuro", "true") : sessionStorage.setItem("tema-oscuro", "false")
 

  
  
})

const modos = sessionStorage.getItem("tema-oscuro")

  if (modos === "true"){
    document.body.classList.add("dark")
    modoOscuro.classList.add("active")
  }else{
    document.body.classList.remove("dark")
    modoOscuro.classList.remove("active")
  }

