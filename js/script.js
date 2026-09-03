
function validarLogin() {
    let user = document.getElementById("username").value;
    let correo = document.getElementById("correo").value;
    let pass = document.getElementById("contraseña").value;
    let error = document.getElementById("error-login");

    error.innerText = "";

    if (user === "") {
        error.innerText = "Debe ingresar su nombre de usuario.";
    } 
    else if (correo === "") {
        error.innerText = "Debe ingresar su correo electrónico.";
    } 
    else if (pass === "") {
        error.innerText = "Debe ingresar su contraseña.";
    } 

    else if (!correo.includes("@") || !correo.includes(".")) {
        error.innerText = "El correo debe contener '@' y un punto '.';";
    } 

    else if (pass.length < 6) {
        error.innerText = "La contraseña debe tener al menos 6 caracteres.";
    } 
    else {
        alert("¡Inicio de sesión exitoso!");
        window.location.href = "index.html";
    }
}

function validarRegistro() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let usuario = document.getElementById("crearusuario").value;
    let fechaNacimiento = document.getElementById("fecha_nacimiento").value;
    let direccion = document.getElementById("direccion").value;
    let correo = document.getElementById("crearcorreo").value;
    let pass = document.getElementById("crearcontraseña").value;
    let passConfirm = document.getElementById("reingreso_contraseña").value;

    let error = document.getElementById("error-registro");
    let exito = document.getElementById("exito-registro");

    error.innerText = "";
    exito.innerText = "";

    if (nombre === "") {
        error.innerText = "Debe ingresar su nombre.";
    } 
    else if (apellido === "") {
        error.innerText = "Debe ingresar su apellido.";
    } 
    else if (usuario === "") {
        error.innerText = "Debe crear un nombre de usuario.";
    } 
    else if (fechaNacimiento === "") {
        error.innerText = "Debe seleccionar su fecha de nacimiento.";
    } 
    else if (direccion === "") {
        error.innerText = "Debe ingresar su dirección.";
    } 
    else if (correo === "") {
        error.innerText = "Debe ingresar un correo electrónico.";
    } 
    else if (pass === "") {
        error.innerText = "Debe crear una contraseña.";
    } 
    else if (passConfirm === "") {
        error.innerText = "Debe reingresar la contraseña.";
    } 
    
    else if (!correo.includes("@") || !correo.includes(".")) {
        error.innerText = "El correo debe tener un formato válido (con @ y punto).";
    }

    else if (pass !== passConfirm) {
        error.innerText = "Las contraseñas no coinciden.";
    } 

    else if (pass.length < 6) {
        error.innerText = "La contraseña debe tener mínimo 6 caracteres.";
    } 

    else {
        let partes = fechaNacimiento.split("-");
        let anioNac = Number(partes[0]);
        let anioActual = 2026; 

        let edad = anioActual - anioNac;

        if (edad < 18) {
            error.innerText = "Debes ser mayor de 18 años para registrarte.";
        } 
        else {
            exito.innerText = "¡Registro completado con éxito!";
            alert("¡Usuario registrado con éxito!");
        }
    }
}