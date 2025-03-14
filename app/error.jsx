"use client";
import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error("Error capturado en error.jsx:", error);
  }, [error]);

  return (
    <div className="row">
      <div className="col-12 hlp-text-center hlp-margintop-40">
        <h2 className="com-title-section-xl hlp-marginBottom-15">
          Ocurrió un error
        </h2>
        <p className="hlp-marginBottom-20">
          No pudimos obtener la información en este momento. Por favor, intenta
          nuevamente.
        </p>
        <button className="--btn --secondary" onClick={() => reset()}>
          Intentar de nuevo
        </button>
      </div>
    </div>
  );
}
