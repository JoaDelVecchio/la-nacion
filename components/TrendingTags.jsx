import Link from "next/link";
import React from "react";

const TrendingTags = React.memo(({ topTags }) => {
  return topTags.length > 0 ? (
    <div className="row">
      <div id="" className="cont_tags com-secondary-tag hlp-marginBottom-20">
        {topTags.map((tag) => (
          <Link key={tag.slug} href={`/tema/${tag.slug}`} aria-label={tag.text}>
            {tag.text}
          </Link>
        ))}
      </div>
    </div>
  ) : (
    <div className="row text-red-500 hlp-marginBottom-20">
      No pudimos cargar los tags mas populares en este momento. Estamos
      trabajando para solucionarlo.
    </div>
  );
});

export default TrendingTags;
