import {
  createContext,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";

type DatosCalcula = {
  factor: number;
  precio: number;
  seguro: number;
  seguroFormato: string;
  needCar: boolean
};

type CalculaContextValue = {
  datosCalcula: DatosCalcula;
  setDatosCalcula: Dispatch<SetStateAction<DatosCalcula>>;
};

export const CalculaContext = createContext<CalculaContextValue | null>(null);

export function CalculaProvider({ children }: { children: ReactNode }) {
  const [datosCalcula, setDatosCalcula] = useState<DatosCalcula>({
    factor: 0,
    precio: 0,
    seguro: 0,
    seguroFormato: '',
    needCar: false
  });

  return (
    <CalculaContext.Provider value={{ datosCalcula, setDatosCalcula }}>
      {children}
    </CalculaContext.Provider>
  );
}