//fase 1
console.log("Iniciando laboratorio...");

// fase 2
let edad = 20;
let esEstudiante = true;
const curso = "JavaScript";

console.log(typeof edad);
console.log(typeof esEstudiante);
console.log(typeof curso);

// fase 3
const nombre = "Cristian";
let saludo = `Hola ${nombre}, tienes ${edad} años.`;

console.log(saludo);

let mensaje = `Bienvenido ${nombre}
Curso: ${curso}
Edad: ${edad}`;

console.log(mensaje);


// fase 4
let sabor = "chocolate";

if (sabor === "chocolate") {
    console.log("Elegiste chocolate");
} else {
    console.log("Elegiste otro sabor");
}

let opcion = 2;

switch(opcion){

    case 1:
        console.log("Opción 1: Registrar");
        break;

    case 2:
        console.log("Opción 2: Consultar");
        break;

    case 3:
        console.log("Opción 3: Eliminar");
        break;

    default:
        console.log("Opción no válida");
}

// fase 5
for(let i = 0; i < 10; i++){

    console.log(`Iteración número: ${i}`);

}
