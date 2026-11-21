export function enviarCotizacionCalculada(planSeleccionado, primaEstimada) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "cotizacion_calculada",
    producto: "Seguro de Autos",
    plan_seleccionado: planSeleccionado,
    prima_estimada: primaEstimada,
  });
}

