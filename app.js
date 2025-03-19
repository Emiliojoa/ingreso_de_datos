// Función para ingresar los datos de las personas
const prompt = require('prompt-sync')();

function ingresarDatos() {
    const personas = [];
    const cantidad = parseInt(prompt("¿Cuántas personas desea registrar?"));

    if (isNaN(cantidad) || cantidad <= 0) {
        console.log("Por favor, ingrese un número válido de personas:");
        return console.error("Cantidad inválida");
        ;
    }

    for (let i = 0; i < cantidad; i++) {
        const nombre = prompt(`Ingrese el nombre de la persona ${i + 1}`);
        const edad = parseInt(prompt(`Ingrese la edad de ${nombre}`));
        const nota = parseFloat(prompt(`Ingrese la nota de ${nombre}`));

        if (isNaN(edad) || isNaN(nota)) {
            console.log("Por favor, ingrese valores válidos para la edad y la nota.");
            i--; // Repetir la iteración actual
            continue;
        }

        personas.push([nombre, edad, nota]);
    }

    return personas;
}

// Función para mostrar los datos tal como fueron ingresados
function mostrarDatos(personas) {
    console.log("Listado de personas ingresadas:");
    personas.forEach(persona => {
        console.log(`Nombre: ${persona[0]}, Edad: ${persona[1]}, Nota: ${persona[2]}`);
    });
}

// Función para ordenar las personas por nota de mayor a menor
function ordenarPorNota(personas) {
    return personas.sort((a, b) => b[2] - a[2]);
}

// Función principal
function main() {
    const personas = ingresarDatos();
    if (personas.length === 0) return;

    mostrarDatos(personas);

    const personasOrdenadas = ordenarPorNota(personas);
    console.log("\nListado de personas ordenadas por nota (de mayor a menor):");
    mostrarDatos(personasOrdenadas);
}

main();
