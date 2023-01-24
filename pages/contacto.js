const inputs = document.querySelectorAll(".form_input")
const enviarForm = document.querySelector(".formulario")
console.log(inputs)

for (let i = 0; i < inputs.length; i++){
    inputs[i].addEventListener("keyup", function (){
        if(this.value.length>=1){
            this.nextElementSibling.classList.add("fijar")
        }else{
            this.nextElementSibling.classList.remove("fijar")
        }
    })
}
