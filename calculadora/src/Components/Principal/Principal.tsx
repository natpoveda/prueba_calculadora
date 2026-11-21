import { CalculaProvider } from "../../Context/contextCalculadora";
import { Calculadora } from "../Calculadora/Calculadora";
import { Comparador } from "../Comparador/Comparador";
import './Principal.css'

export function Principal() {
  return (
    <CalculaProvider>
    <div className="principal" tabIndex={3}>
      <div className="principal-frame principal-left" tabIndex={4}><Calculadora></Calculadora></div>
      <div className="principal-frame principal-right">
        <Comparador />
      </div>
    </div>
    </CalculaProvider>
  );
}
