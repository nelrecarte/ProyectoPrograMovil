//tipo de dato: union de literales para clasificar las actividades
export type TipoActividad = "vacuna" | "revision" | "otro";

export type Actividad = {
    id: string;
    titulo: string;
    fecha: string;
    tipo: TipoActividad;
}

export type Indicador = {
    id: string;
    titulo: string;
    valor: string;
    icono: "pets" | "assignment" | "payments" | "trending-up";
    color?: string;
}
