// Botón cambia de "Iniciar sesión" a "Cerrar sesión"

let login = document.getElementById("login");

login.onclick = ()=>{
    login.innerText = "Cerrar sesión";
}


// Botón "Agregar Definición" desaparece

let btnDef = document.getElementById("btnDef");

btnDef.onclick = ()=>{
    btnDef.style.display = "none";
}

// Alarma de "me gusta" y Conteo de likes

let meGusta1 = document.getElementById("meGusta1");
let meGusta2 = document.getElementById("meGusta2");
let nLikes1 = document.getElementById("nLikes1");
let nLikes2 = document.getElementById("nLikes2");
let like1 = 0;
let like2 = 0;

meGusta1.onclick = ()=>{
    alert("Gato Atigrado was liked");
    like1++;
    nLikes1.textContent = like1;
}

meGusta2.onclick = ()=>{
    alert("Golden Retriever was liked");
    like2++;
    nLikes2.textContent = like2;
}
