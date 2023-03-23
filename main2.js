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
let usuariosPush =[]


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

    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if(!nombres.value == '' && !apellidos.value == '' && !edad.value == '' && !area.value == ''&& !direccion.value == ''&& !email.value == ''&& emailRegex.test(email.value) && !usuarios.value == ''){

        if(area.value != 'docencia' && area.value != 'Docencia' && area.value != 'tecnologia' && area.value != 'Tecnologia' && area.value != 'marketing' && area.value != 'Marketing'){
            alert('Area invalida')
        }


                if(usuariosPush.includes(usuarios.value)){
                    alert('Usuario repetido')
                }else{
                    usuariosPush.push(usuarios.value)
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
    
                    localStorage.setItem("usuariosNames", JSON.stringify(usuariosPush));
                    localStorage.setItem("usuarios", JSON.stringify(array));
                }
                location.href='index.html'
    }else{
        alert('Faltan campos por llenar o los datos son erroneos')
    }
    
})



window.addEventListener("load", ()=> {
    const traerUsuarios = JSON.parse(localStorage.getItem("usuarios"));
    const traerNames = JSON.parse(localStorage.getItem("usuariosNames"));


    traerUsuarios.forEach(element => {
        let person = new Persona(element.nombre,element.apellidos,element.area,element.usuario,element.edad,element.direccion,element.email)
        array.push(person)
    } )

    traerNames.forEach(element => {
        let person = new Persona(element.nombre,element.apellidos,element.area,element.usuario,element.edad,element.direccion,element.email)
        usuariosPush.push(person)
    } )
});

