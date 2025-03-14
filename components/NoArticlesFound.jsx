import React from "react";
const NoArticlesFound = () => {
  return (
    <div className="row">
      <div className="col-12 hlp-text-center hlp-margintop-40">
        <h2 className="com-title-section-xl hlp-marginBottom-15">
          No se encontraron noticias
        </h2>
        <p className="hlp-marginBottom-20">
          Por favor, intenta nuevamente más tarde.
        </p>
      </div>
    </div>
  );
};
export default NoArticlesFound;
