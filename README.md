# Sistema de Gestión de Entradas - Innova ESPE 2026

Prototipo de software desarrollado en **JavaScript nativo** para automatizar el registro de compras, la aplicación de descuentos por tipo de participante y el control en tiempo real de la disponibilidad de cupos para el evento universitario **Innova ESPE 2026**.

## 🚀 Características Principales
- **Interfaz Interactiva por Consola y Ventanas:** Implementado mediante `prompt()`, `alert()` y `console.log()` cumpliendo con los lineamientos del prototipo.
- **Navegación por Menú:** Estructura repetitiva basada en un bucle `do...while` y bifurcaciones con `switch` para mantener el sistema activo hasta que el usuario decida salir.
- **Validaciones Estrictas:** Control de ingresos vacíos, validación de tipos de datos numéricos enteros y restricción de cantidades (máximo 5 entradas por compra).
- **Gestión de Cupos y Stock:** Verificación automática de la disponibilidad de cupos universitarios antes de confirmar cualquier transacción.
- **Cálculo de Descuentos Dinámicos:**
  - Estudiantes: **30% de descuento**
  - Docentes: **15% de descuento**
  - Público General: **0% de descuento**

---

## 🛠️ Requerimientos Funcionales (RF) Implementados
1. **RF01 (Configuración Inicial):** Declaración de constantes de negocio (`PRECIO_ENTRADA = $20`, `CUPOS_INICIALES = 50`, `MAX_ENTRADAS_COMPRA = 5`) y variables de control global con `const` y `let`.
2. **RF02 (Menú Principal):** Sistema de opciones dinámico y persistente.
3. **RF03 (Compra de Entradas):** Proceso de validación de datos, cálculo de subtotales, descuentos y actualización atómica de cupos e ingresos.
4. **RF04 (Consulta de Cupos):** Reporte de cupos restantes con mensajes dinámicos según el estado (*"Cupos disponibles"*, *"Últimos cupos disponibles"* o *"Evento agotado"*).
5. **RF05 (Consulta de Ingresos):** Estadísticas acumuladas de entradas vendidas, número de compras y dinero recaudado.
6. **RF06 (Finalización):** Resumen global al salir del sistema.

---

## 📂 Estructura del Proyecto
APELLIDO_NOMBRE_JS/
├── index.html        # Archivo HTML contenedor principal
├── js/
│   └── app.js        # Lógica completa del sistema en JavaScript
└── README.md         # Documentación del proyecto

---

## 💻 ¿Cómo ejecutar el proyecto?
1. Clona o descarga este repositorio en tu computadora.
2. Abre el archivo `index.html` en cualquier navegador web moderno (Chrome, Firefox, Edge, etc.).
3. Interactúa con las ventanas emergentes (`prompt` y `alert`) para navegar por el menú del sistema.
4. (Opcional) Abre la consola de desarrollador del navegador (`F12` o `Ctrl + Shift + J`) para verificar los registros en tiempo real (`console.log`).