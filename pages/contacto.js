const inputs = document.querySelectorAll(".form_input")
const enviarForm = document.querySelector(".formulario")
const nombres = document.querySelector("#form_name")
const email = document.querySelector("#form_email")
const telefono = document.querySelector("#form_tel")
const mensaje = document.querySelector("#form_mensaje")
// console.log(inputs)

for (let i = 0; i < inputs.length; i++){
    inputs[i].addEventListener("keyup", function (){
        if(this.value.length>=1){
            this.nextElementSibling.classList.add("fijar")
        }else{
            this.nextElementSibling.classList.remove("fijar")
        }
    })
}

enviarForm.onsubmit = (e)=>{
    e.preventDefault()
    if (nombres.value === ""  || mensaje.value === "" || telefono.value === "" || email.value === ""){
        swal("debe completar todos los campos")
        
    }else{
        swal("Su formulario ha sido enviado con éxito")    
    }    
}

