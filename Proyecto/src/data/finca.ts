import { Actividad, Indicador } from "../utils/types/Finca";

//datos de prueba mientras no exista conexion con el backend
export const indicadores: Indicador[] = [
    { id: "1", titulo: "Animales registrados", valor: "24", icono: "pets" },
    { id: "2", titulo: "Tareas pendientes", valor: "3", icono: "assignment", color: "#c77d0a" },
    { id: "3", titulo: "Gastos del mes", valor: "L 12,500", icono: "payments", color: "#b3261e" },
    { id: "4", titulo: "Ventas del mes", valor: "L 18,000", icono: "trending-up", color: "#2e7d32" },
];

export const proximasActividades: Actividad[] = [
    { id: "1", titulo: "Vacuna aftosa - lote 2", fecha: "23 nov 2026", tipo: "vacuna" },
    { id: "2", titulo: "Revisión veterinaria", fecha: "25 nov 2026", tipo: "revision" },
    { id: "3", titulo: "Desparasitación del ganado", fecha: "28 nov 2026", tipo: "otro" },
];
