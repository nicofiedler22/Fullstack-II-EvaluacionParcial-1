
// PRODUCTO
let comprar = document.getElementById("comprar");
let total = document.getElementById("total");

let extra1 = document.getElementById("extra1");
let extra2 = document.getElementById("extra2");

function calcularTotal(){

    let balon = document.querySelector('input[name="balon"]:checked');

    let precio = 0;

    if(balon){
        precio = Number(balon.value);
    }

    if(extra1.checked){
        precio = precio + Number(extra1.value);
    }

    if(extra2.checked){
        precio = precio + Number(extra2.value);
    }

    total.textContent = precio;
}

extra1.addEventListener("change", function(){
    calcularTotal();
});

extra2.addEventListener("change", function(){
    calcularTotal();
});

document.getElementById("gas5").addEventListener("change", function(){
    calcularTotal();
});

document.getElementById("gas11").addEventListener("change", function(){
    calcularTotal();
});

document.getElementById("gas15").addEventListener("change", function(){
    calcularTotal();
});

document.getElementById("gas45").addEventListener("change", function(){
    calcularTotal();
});

comprar.addEventListener("click", function(){

    let balon = document.querySelector('input[name="balon"]:checked');

    if(!balon){
        alert("Debe seleccionar uno de los balones de gas antes de continuar");
        return;
    }

    alert("Compra realizada correctamente");
    alert("Redirigiendo a la pasarela de pago");

});

//LOGIN
function validarLogin() {

    // Captura de campos.
    let user = document.getElementById("username");
    let correo = document.getElementById("correo");
    let pass = document.getElementById("contraseña");
    let error = document.getElementById("error-login");

    error.innerText = "";

    if (user.value.trim() === "") {
        error.innerText = "Debe ingresar su nombre de usuario.";
        user.focus();
        return;
    }

    else if (correo.value.trim() === "") {
        error.innerText = "Debe ingresar su correo electrónico.";
        correo.focus();
        return;
    }

    else if (pass.value.trim() === "") {
        error.innerText = "Debe ingresar su contraseña.";
        pass.focus();
        return;
    }

    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo.value)) {
        error.innerText = "El correo debe contener '@' y un punto '.'.";
        correo.focus();
        return;
    }

    else if (pass.value.length < 6) {
        error.innerText = "La contraseña debe tener al menos 6 caracteres.";
        pass.focus();
        return;
    }

    // Inicio de sesión exitoso.
    else {
        alert("¡Inicio de sesión exitoso!");
        window.location.href = "index.html";
    }
}

//REGISTRO
function validarRegistro() {

    // Captura de campos.
    let nombre = document.getElementById("nombre");
    let apellido = document.getElementById("apellido");
    let usuario = document.getElementById("crearusuario");
    let fechaNacimiento = document.getElementById("fecha_nacimiento");
    let direccion = document.getElementById("direccion");
    let correo = document.getElementById("crearcorreo");
    let pass = document.getElementById("crearcontraseña");
    let passConfirm = document.getElementById("reingreso_contraseña");

    let error = document.getElementById("error-registro");
    let exito = document.getElementById("exito-registro");

    error.innerText = "";
    exito.innerText = "";

    if (nombre.value.trim() === "") {
        error.innerText = "Debe ingresar su nombre.";
        nombre.focus();
        return;
    }

    else if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(nombre.value)) {
        error.innerText = "El nombre solo debe contener letras.";
        nombre.focus();
        return;
    }

    else if (apellido.value.trim() === "") {
        error.innerText = "Debe ingresar su apellido.";
        apellido.focus();
        return;
    }

    else if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(apellido.value)) {
        error.innerText = "El apellido solo debe contener letras.";
        apellido.focus();
        return;
    }

    else if (usuario.value.trim() === "") {
        error.innerText = "Debe crear un nombre de usuario.";
        usuario.focus();
        return;
    }

    else if (fechaNacimiento.value === "") {
        error.innerText = "Debe seleccionar su fecha de nacimiento.";
        fechaNacimiento.focus();
        return;
    }

    else if (direccion.value.trim() === "") {
        error.innerText = "Debe ingresar su dirección.";
        direccion.focus();
        return;
    }

    else if (correo.value.trim() === "") {
        error.innerText = "Debe ingresar un correo electrónico.";
        correo.focus();
        return;
    }

    else if (pass.value.trim() === "") {
        error.innerText = "Debe crear una contraseña.";
        pass.focus();
        return;
    }

    else if (passConfirm.value.trim() === "") {
        error.innerText = "Debe reingresar la contraseña.";
        passConfirm.focus();
        return;
    }

    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo.value)) {
        error.innerText = "El correo debe tener un formato válido (con @ y punto).";
        correo.focus();
        return;
    }

    else if (pass.value.length < 6) {
        error.innerText = "La contraseña debe tener mínimo 6 caracteres.";
        pass.focus();
        return;
    }

    // Requisito funcional: contraseña con letra y número.
    else if (!/^(?=.*[A-Za-z])(?=.*\d).{6,}$/.test(pass.value)) {
        error.innerText = "La contraseña debe contener al menos una letra y un número.";
        pass.focus();
        return;
    }

    else if (pass.value !== passConfirm.value) {
        error.innerText = "Las contraseñas no coinciden.";
        passConfirm.focus();
        return;
    }

    else {

        let fecha = new Date(fechaNacimiento.value);
        let hoy = new Date();

        let edad = hoy.getFullYear() - fecha.getFullYear();

        let mes = hoy.getMonth() - fecha.getMonth();

        if (mes < 0 || (mes === 0 && hoy.getDate() < fecha.getDate())) {
            edad--;
        }

        if (edad < 18) {
            error.innerText = "Debes ser mayor de 18 años para registrarte.";
            fechaNacimiento.focus();
            return;
        }

        else {
            exito.innerText = "¡Registro completado con éxito!";
            alert("¡Usuario registrado con éxito!");
        }
    }
}