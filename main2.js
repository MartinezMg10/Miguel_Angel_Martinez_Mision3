const atras = document.getElementById('atras')
const nombres = document.getElementById('nombres')
const email = document.getElementById('email')
const apellidos = document.getElementById('apellidos')
const area = document.getElementById('area')
const usuarios = document.getElementById('usuarios')
const edad = document.getElementById('edad')
const direccion = document.getElementById('direccion')
const enviar = document.getElementById('enviar')

let array= []

class Persona {
    constructor(nombre,apellidos,area,usuario,edad,direccion,email){

        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.area =area
        this.usuario = usuario
        this.direccion = direccion
        this.email = email
    }
}


atras.addEventListener('click', ()=>{
    location.href='index.html'
})

enviar.addEventListener('click',()=>{
    if(!nombres.value == '' && !apellidos.value == '' && !edad.value == '' && !area.value == ''&& !direccion.value == ''&& !email.value == ''&& !usuarios.value == ''){
        const nuevaPersona = new Persona (nombres.value,apellidos.value,area.value,usuarios.value,edad.value,direccion.value,email.value)

        array.push(nuevaPersona)
        console.log(nuevaPersona)

        nombres.value = ''
        apellidos.value = ''
        edad.value = ''
        area.value =''
        usuarios.value = ''
        direccion.value = ''
        email.value = ''

        const traerUsuarios = JSON.parse(localStorage.getItem("usuarios"));
        localStorage.setItem("usuarios", JSON.stringify(array));

    }else{
        alert('Faltan campos por llenar')
    }
    
})



window.addEventListener("load", ()=> {
    const traerUsuarios = JSON.parse(localStorage.getItem("usuarios"));

    traerUsuarios.forEach(element => {
        let person = new Persona(element.nombre,element.apellidos,element.area,element.usuario,element.edad,element.direccion,element.email)
        array.push(person)
        console.log(traerUsuarios)
    } )
});

