import { useContext } from "react";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import { CalculaContext } from "../../Context/contextCalculadora";
import "./Comparador.css";

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(value);

type PlanCardProps = {
  name: string;
  description: string;
  price: number;
  recommended: boolean;
  plus: boolean;
};

function PlanCard({
  name,
  description,
  price,
  recommended,
  plus,
}: PlanCardProps) {
  const features = [
    { label: "Asistencia en carretera", included: true },
    { label: "Vehículo de reemplazo", included: plus },
    { label: "Asistencia jurídica", included: plus },
  ];

  return (
    <article
      className={`comparador-card${recommended ? " comparador-card-recommended" : ""}`}
      aria-label={`Plan ${name}${recommended ? ", recomendado" : ""}`}
      tabIndex={10}
    >
      {recommended && (
        <span className="comparador-badge">Recomendado</span>
      )}
      <div className="comparador-card-heading"  tabIndex={11}>
        <span className={`comparador-icon${plus ? " comparador-icon-plus" : ""}`}>
          {plus ? <WorkspacePremiumOutlinedIcon /> : <ShieldOutlinedIcon />}
        </span>
        <div>
          <h3>Plan {name}</h3>
          <p>{description}</p>
        </div>
      </div>
      <p className="comparador-price">{formatCurrency(price)}</p>
      <p className="comparador-price-caption">prima anual estimada</p>
      <ul className="comparador-features">
        {features.map(({ label, included }) => (
          <li key={label}>
            {included ? (
              <CheckRoundedIcon
                className="comparador-feature-included"
                aria-label="Incluido"
              />
            ) : (
              <CloseRoundedIcon
                className="comparador-feature-excluded"
                aria-label="No incluido"
              />
            )}
            <span>{label}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export function Comparador() {
  const context = useContext(CalculaContext);
  if (!context) {
    throw new Error("Comparador debe renderizarse dentro de CalculaProvider.");
  }

  const { datosCalcula } = context;
  const primaEsencial = Math.round(datosCalcula.seguro);
  const primaPlus = Math.round(datosCalcula.seguro * 1.35);
  const diferenciaAnual = primaPlus - primaEsencial;
  const planRecomendado = datosCalcula.needCar ? "Plus" : "Esencial";
  const motivoRecomendacion = datosCalcula.needCar
    ? "porque indicaste que necesitas vehículo de reemplazo."
    : "porque tiene el menor precio.";

  return (
    <section className="comparador" aria-labelledby="comparador-title" tabIndex={12}>
      <header className="comparador-header">
        <h2 id="comparador-title">2. Compara nuestras coberturas</h2>
      </header>
      <div className="comparador-plans" tabIndex={13}>
        <PlanCard
          name="Esencial"
          description="Protección básica para tu vehículo"
          price={primaEsencial}
          recommended={!datosCalcula.needCar}
          plus={false}
        />
        <PlanCard
          name="Plus"
          description="Mayor cobertura y respaldo en todo momento"
          price={primaPlus}
          recommended={datosCalcula.needCar}
          plus
        />
      </div>
      <aside className="comparador-difference" aria-live="polite" tabIndex={13}>
        <InfoOutlinedIcon className="comparador-difference-icon" />
        <div>
          <p className="comparador-difference-title">
            Diferencia entre planes:{" "}
            <strong>{formatCurrency(diferenciaAnual)} al año</strong>
          </p>
          <p className="comparador-recommendation">
            Te recomendamos el Plan {planRecomendado} {motivoRecomendacion}
          </p>
        </div>
      </aside>
    </section>
  );
}
