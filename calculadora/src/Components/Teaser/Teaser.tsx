import './Teaser.css'

export function Teaser() {
  return (
    <div className="teaser-all">
      <div className="teaser-left" tabIndex={1}>
        <div className='teaser-left-label' tabIndex={2}>Seguro de Autos</div>
        <h1>Calcula tu prima estimada</h1>
        <p>
          Conoce en minutos el valor de tu seguro y compara el plan que mejor se
          adapta a ti.
        </p>
      </div>
    </div>
  );
}
