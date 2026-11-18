
// 1. DEFINICION DE VARIABLES

const PRECIO_ENTRADA = 20;
const CUPOS_INICIALES = 50;
const DESC_ESTUDIANTE = 0.30;
const DESC_DOCENTE = 0.15;
const DESC_PUBLICO = 0.0;
const MAX_ENTRADAS_COMPRA = 5;

let cuposDisponibles = CUPOS_INICIALES;
let totalEntradasVendidas = 0;
let ingresosAcumulados = 0;
let numeroCompras = 0;


// 2. FUNCIÓN DE COMPRA (Opción 1)

function procesarCompra() {
    const nombre = prompt("Ingrese el nombre del comprador:");
    if (!nombre || nombre.trim() === "") {
        alert("Error: El nombre no puede estar vacío. Compra cancelada.");
        return;
    }

    let tipoParticipante = prompt("Ingrese el tipo de participante (estudiante, docente, público general):");
    if (!tipoParticipante) {
        alert("Compra cancelada.");
        return;
    }
    tipoParticipante = tipoParticipante.trim().toLowerCase();

    if (tipoParticipante !== "estudiante" && tipoParticipante !== "docente" && tipoParticipante !== "público general") {
        alert("Error: Tipo de participante no válido. Debe ser: estudiante, docente o público general.");
        return;
    }

    const cantidadInput = prompt("Ingrese la cantidad de entradas (Máximo 5):");
    const cantidad = Number(cantidadInput);

    if (isNaN(cantidad) || !Number.isInteger(cantidad) || cantidad < 1 || cantidad > MAX_ENTRADAS_COMPRA) {
        alert("Error: La cantidad debe ser un número entero entre 1 y 5.");
        return;
    }

    if (cantidad > cuposDisponibles) {
        alert(`Error: No hay suficientes cupos. Cupos disponibles actuales: ${cuposDisponibles}`);
        return;
    }

    const subtotal = cantidad * PRECIO_ENTRADA;
    let porcentajeDescuento = 0;

    if (tipoParticipante === "estudiante") {
        porcentajeDescuento = DESC_ESTUDIANTE;
    } else if (tipoParticipante === "docente") {
        porcentajeDescuento = DESC_DOCENTE;
    } else {
        porcentajeDescuento = DESC_PUBLICO;
    }

    const valorDescuento = subtotal * porcentajeDescuento;
    const totalPagar = subtotal - valorDescuento;

    // Actualizar valores globales
    cuposDisponibles -= cantidad;
    totalEntradasVendidas += cantidad;
    ingresosAcumulados += totalPagar;
    numeroCompras++;

    const resumen = 
        `=== RESUMEN DE COMPRA ===\n` +
        `Comprador: ${nombre}\n` +
        `Tipo: ${tipoParticipante}\n` +
        `Cantidad: ${cantidad}\n\n` +
        `Subtotal: $${subtotal.toFixed(2)}\n` +
        `Descuento (${porcentajeDescuento * 100}%): $${valorDescuento.toFixed(2)}\n` +
        `Total a pagar: $${totalPagar.toFixed(2)}\n\n` +
        `Compra realizada exitosamente.\n` +
        `Cupos restantes: ${cuposDisponibles}`;

    alert(resumen);
    console.log(resumen);
}



// 3. FUNCIÓN DE CONSULTA DE CUPOS (Opción 2)

function consultarCupos() {
    let mensajeDisponibilidad = "";

    if (cuposDisponibles > 10) {
        mensajeDisponibilidad = "Cupos disponibles";
    } else if (cuposDisponibles >= 1 && cuposDisponibles <= 10) {
        mensajeDisponibilidad = "Últimos cupos disponibles";
    } else {
        mensajeDisponibilidad = "Evento agotado";
    }

    const infoCupos = 
        `=== CONSULTA DE CUPOS ===\n` +
        `Cupos disponibles: ${cuposDisponibles}\n` +
        `Estado: ${mensajeDisponibilidad}`;

    alert(infoCupos);
    console.log(infoCupos);
}


// 4. FUNCIÓN DE CONSULTA DE INGRESOS (Opción 3)

function consultarIngresos() {
    const infoIngresos = 
        `=== CONSULTA DE INGRESOS ===\n` +
        `Total de entradas vendidas: ${totalEntradasVendidas}\n` +
        `Número de compras realizadas: ${numeroCompras}\n` +
        `Ingresos acumulados: $${ingresosAcumulados.toFixed(2)}`;

    alert(infoIngresos);
    console.log(infoIngresos);
}



// 5. MENÚ PRINCIPAL (Bucle do...while)

let opcion;

do {
    opcion = prompt(
        "=== SISTEMA INNOVA ESPE 2026 ===\n\n" +
        "1. Comprar entradas\n" +
        "2. Consultar cupos disponibles\n" +
        "3. Consultar ingresos acumulados\n" +
        "4. Salir\n\n" +
        "Seleccione una opción (1-4):"
    );

    if (opcion === null) {
        opcion = "4";
    }

    switch (opcion.trim()) {
        case "1":
            procesarCompra();
            break;
            
        case "2":
            consultarCupos();
            break;
            
        case "3":
            consultarIngresos();
            break;
            
        case "4":
            alert(
                "=== RESUMEN FINAL DEL SISTEMA ===\n" +
                `Total de entradas vendidas: ${totalEntradasVendidas}\n` +
                `Total de ingresos: $${ingresosAcumulados.toFixed(2)}\n` +
                `Cupos sobrantes: ${cuposDisponibles}\n\n` +
                "Saliendo del sistema Innova ESPE 2026. ¡Hasta luego!"
            );
            break;
            
        default:
            alert("Opción no válida. Por favor, seleccione un número entre 1 y 4.");
            break;
    }

} while (opcion !== "4");