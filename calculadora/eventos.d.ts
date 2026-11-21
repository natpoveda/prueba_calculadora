export type PlanSeleccionado = "Esencial" | "Plus";

export declare function enviarCotizacionCalculada(
  planSeleccionado: PlanSeleccionado,
  primaEstimada: number,
): void;
