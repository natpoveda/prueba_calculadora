import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import { CalculaProvider } from "../../Context/contextCalculadora";
import { Calculadora } from "./Calculadora";

describe("Calculadora", () => {
  beforeEach(() => {
    window.dataLayer = [];
  });

  it.each([
    { needCar: false, plan: "Esencial", premium: 2_805_000 },
    { needCar: true, plan: "Plus", premium: 3_786_750 },
  ])(
    "envía el evento con el plan recomendado: $plan",
    ({ needCar, plan, premium }) => {
      render(
        <CalculaProvider>
          <Calculadora />
        </CalculaProvider>,
      );

      fireEvent.change(
        screen.getByPlaceholderText("Ingresa el valor de tu automóvil"),
        { target: { value: "93500000" } },
      );

      if (needCar) {
        fireEvent.click(
          screen.getByRole("checkbox", {
            name: "Necesito vehiculo de reemplazo en caso de siniestro",
          }),
        );
      }

      fireEvent.click(
        screen.getByRole("button", { name: /calcular y comparar planes/i }),
      );

      expect(window.dataLayer).toContainEqual({
        event: "cotizacion_calculada",
        producto: "Seguro de Autos",
        plan_seleccionado: plan,
        prima_estimada: premium,
      });
    },
  );

  it("no envía el evento si el valor del vehículo es inválido", () => {
    render(
      <CalculaProvider>
        <Calculadora />
      </CalculaProvider>,
    );

    fireEvent.change(
      screen.getByPlaceholderText("Ingresa el valor de tu automóvil"),
      { target: { value: "10000000" } },
    );

    expect(
      screen.getByRole("button", { name: /calcular y comparar planes/i }),
    ).toBeDisabled();
    expect(window.dataLayer).toHaveLength(0);
  });
});
