const usuario = document.getElementById("usuario")
const email = document.getElementById("email")
const login = document.getElementById("login")
const form = document.getElementById("form")


let usuarios = []

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    users.forEach(user => {
    usuarios.push(user)
    localStorage.setItem("Usuarios",JSON.stringify(usuarios))

    });
  });

  let bandera = false
  const data = JSON.parse(localStorage.getItem("Usuarios"))

login.addEventListener("click",()=>{

    for(let i=0;i<=data.length-1;i++){
        if(usuarios[i].username == usuario.value){
            if(usuarios[i].email == email.value){
                location.href="index2.html"
                usuario.value = ''
                email.value = ''
                bandera = true
            }
        }
    }

    if(bandera == false){
        const error =document.createElement("div")
        error.className= "error"
        error.textContent="Datos incorrectos!"
        form.appendChild(error)
        setTimeout(() => {
        form.removeChild(error)
          }, "1000");
    }

})