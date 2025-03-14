export default function NotFound() {
  return (
    <div className="row">
      <div className="col-12 hlp-text-center hlp-margintop-40">
        <h2 className="com-title-section-xl hlp-marginBottom-15">
          Página no encontrada
        </h2>
        <p className="hlp-marginBottom-20">
          Lo sentimos, la página que buscas no existe.
        </p>
        <a href="/" className="--btn --secondary">
          Volver al inicio
        </a>
      </div>
    </div>
  );
}
