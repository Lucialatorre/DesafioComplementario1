let user = prompt("ingresa tu usuario")
let pass = prompt("ingresa tu contraseña")

if( user != "" || pass != "") {
    console.log("Campo vacio")
    console.log("Usuario o password incorrecto")
}

let bienvenido = alert("Bienvenido a la biblioteca virtual");
let opciones = prompt("Elige un eBook disponible \n 1-Orgullo y prejuicio \n 2-Mujercitas \n 3-Outlander \n 4-Bridgerton");

switch(opciones){
    case "1":
        alert("Seleccionaste Orgullo y prejuicio")
        prompt("Valor $550, confirmar compra? \n Si para continuar, No para cancelar")
        break;
    case "2":
        alert("Seleccionaste Mujercitas")
        prompt("Valor $750, confirmar compra? \n Si para continuar, No para cancelar")
        break; 
    case "3":
        alert("Seleccionaste Outlander")
        prompt("Valor $850, confirmar compra? \n Si para continuar, No para cancelar")
        break;
    case "4":
        alert("Seleccionaste Bridgerton")
        prompt("Valor $640, confirmar compra? \n Si para continuar, No para cancelar")
        break;
    default:
        alert("Opcion no valida");
        break;
}
