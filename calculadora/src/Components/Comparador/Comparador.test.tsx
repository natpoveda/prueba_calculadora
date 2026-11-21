import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { CalculaContext } from '../../Context/contextCalculadora'
import { Comparador } from './Comparador'

function renderComparador(needCar: boolean) {
  render(
    <CalculaContext.Provider
      value={{
        datosCalcula: {
          factor: 1,
          precio: 93_500_000,
          seguro: 2_805_000,
          seguroFormato: '$2.805.000',
          needCar,
        },
        setDatosCalcula: () => undefined,
      }}
    >
      <Comparador />
    </CalculaContext.Provider>,
  )
}

describe('Comparador', () => {
  it('muestra las primas, la diferencia y recomienda Plus cuando se necesita reemplazo', () => {
    renderComparador(true)

    expect(
      screen.getByRole('heading', { name: '2. Compara nuestras coberturas' }),
    ).toBeInTheDocument()
    expect(
      screen.getByText((text) => text.includes('2.805.000')),
    ).toBeInTheDocument()
    expect(
      screen.getByText((text) => text.includes('3.786.750')),
    ).toBeInTheDocument()
    expect(
      screen.getByText((text) => text.includes('981.750')),
    ).toBeInTheDocument()
    expect(
      screen.getByText(
        'Te recomendamos el Plan Plus porque indicaste que necesitas vehículo de reemplazo.',
      ),
    ).toBeInTheDocument()
  })

  it('recomienda Esencial cuando no se necesita vehículo de reemplazo', () => {
    renderComparador(false)

    expect(
      screen.getByText(
        'Te recomendamos el Plan Esencial porque tiene el menor precio.',
      ),
    ).toBeInTheDocument()
  })
})
