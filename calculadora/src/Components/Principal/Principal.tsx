import { CalculaProvider } from "../../Context/contextCalculadora";
import { Calculadora } from "../Calculadora/Calculadora";
import './Principal.css'

export function Principal() {
  return (
    <CalculaProvider>
    <div className="principal">
      <div className="principal-frame principal-left"><Calculadora></Calculadora></div>
      <div className="principal-frame principal-right"></div>
    </div>
    </CalculaProvider>
  );
}
