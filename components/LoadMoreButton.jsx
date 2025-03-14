import React from "react";

const LoadMoreButton = React.memo(({ onClick }) => {
  return (
    <section className="row">
      <div className="col-12 hlp-text-center hlp-margintop-40">
        <button
          className="--btn --secondary"
          onClick={onClick}
          aria-label=" MÁS NOTAS DE ACUMULADO GRILLA"
          role="loadMoreButton"
        >
          MÁS NOTAS DE ACUMULADO GRILLA
        </button>
      </div>
    </section>
  );
});

export default LoadMoreButton;
