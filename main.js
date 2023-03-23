const table = document.getElementById('table')
const crearUsuario = document.getElementById('crearUsuario')
const buscar = document.getElementById('buscar')

let array=[]
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


window.addEventListener("load", ()=> {
    const traerUsuarios = JSON.parse(localStorage.getItem("usuarios"));

    traerUsuarios.forEach(element => {
        let person = new Persona(element.nombre,element.apellidos,element.area,element.usuario,element.edad,element.direccion,element.email)
        array.push(person)
        console.log(traerUsuarios)
    } )

    array.forEach(element => {

        if(element.area == 'docencia' || element.area == 'Docencia'){

            let docencia = null
            if(docencia == null){
                docencia = document.createElement('td')
                docencia.textContent = 'Docencia'
            }else{
                docencia.rowSpan+=1;
            }

            let tabla = document.createElement('tr')
            let tdNombre = document.createElement('td')
            let tdUsuario = document.createElement('td')
            let tdEmail = document.createElement('td')
            let tdEdad = document.createElement('td')
    
            tdNombre.textContent=element.nombre
            tdUsuario.textContent = element.usuario
            tdEmail.textContent= element.email
            tdEdad.textContent=element.edad
    
            tabla.appendChild(docencia)
            tabla.appendChild(tdNombre)
            tabla.appendChild(tdUsuario)
            tabla.appendChild(tdEmail)
            tabla.appendChild(tdEdad)
            table.appendChild(tabla)
            
        }
        if(element.area == 'tecnologia' || element.area == 'Tecnologia'){
            const tecnologia = document.createElement('td')
            tecnologia.textContent = 'Tecnologia'
            tecnologia.rowSpan=+1;

            let tabla = document.createElement('tr')
            let tdNombre = document.createElement('td')
            let tdUsuario = document.createElement('td')
            let tdEmail = document.createElement('td')
            let tdEdad = document.createElement('td')
    
            tdNombre.textContent=element.nombre
            tdUsuario.textContent = element.usuario
            tdEmail.textContent= element.email
            tdEdad.textContent=element.edad
    
            tabla.appendChild(tecnologia)
            tabla.appendChild(tdNombre)
            tabla.appendChild(tdUsuario)
            tabla.appendChild(tdEmail)
            tabla.appendChild(tdEdad)
            table.appendChild(tabla)
        }
        if(element.area == 'marketing' || element.area == 'marketing'){
            const marketing = document.createElement('td')
            marketing.textContent = 'Marketing'
            marketing.rowSpan=+1;

            let tabla = document.createElement('tr')
            let tdNombre = document.createElement('td')
            let tdUsuario = document.createElement('td')
            let tdEmail = document.createElement('td')
            let tdEdad = document.createElement('td')
    
            tdNombre.textContent=element.nombre
            tdUsuario.textContent = element.usuario
            tdEmail.textContent= element.email
            tdEdad.textContent=element.edad
    
            tabla.appendChild(marketing)
            tabla.appendChild(tdNombre)
            tabla.appendChild(tdUsuario)
            tabla.appendChild(tdEmail)
            tabla.appendChild(tdEdad)
            table.appendChild(tabla)
        }
    });
    

});

crearUsuario.addEventListener('click',()=>{
    location.href='index2.html'
})


buscar.addEventListener("keyup",(e)=>{
    if (e.code === 'Enter') {
        array.forEach(element => {
            if(element.usuario == buscar.value){
                table.textContent=''
                let tabla1 = document.createElement('tr')
                let thArea = document.createElement('th')
                let thNombre = document.createElement('th')
                let thUsuario = document.createElement('th')
                let thEmail = document.createElement('th')
                let thEdad = document.createElement('th')

                thNombre.textContent='Nombre'
                thArea.textContent='Area'
                thUsuario.textContent = 'Usuario'
                thEmail.textContent= 'Email'
                thEdad.textContent='Edad'

                tabla1.appendChild(thArea)
                tabla1.appendChild(thNombre)
                tabla1.appendChild(thUsuario)
                tabla1.appendChild(thEmail)
                tabla1.appendChild(thEdad)
                table.appendChild(tabla1)

                let tabla = document.createElement('tr')
                let tdArea = document.createElement('td')
                let tdNombre = document.createElement('td')
                let tdUsuario = document.createElement('td')
                let tdEmail = document.createElement('td')
                let tdEdad = document.createElement('td')
        
                tdNombre.textContent=element.nombre
                tdArea.textContent=element.area
                tdUsuario.textContent = element.usuario
                tdEmail.textContent= element.email
                tdEdad.textContent=element.edad
        
                tabla.appendChild(tdArea)
                tabla.appendChild(tdNombre)
                tabla.appendChild(tdUsuario)
                tabla.appendChild(tdEmail)
                tabla.appendChild(tdEdad)
                table.appendChild(tabla)
            }
        })
    }
});