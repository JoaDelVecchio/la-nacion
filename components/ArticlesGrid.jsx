import React from "react";
import dynamic from "next/dynamic";
import ArticleCard from "./ArticleCard";
import Loading from "../app/loading";

const LazyArticleCard = dynamic(() => import("./ArticleCard"), {
  ssr: true,
  loading: () => <Loading />,
});

const ArticlesGrid = ({ articles }) => {
  return (
    <section className="row-gap-tablet-2 row-gap-deskxl-3 hlp-degrade">
      {articles.map((article, index) =>
        index < 8 ? (
          <ArticleCard key={article._id} article={article} />
        ) : (
          <LazyArticleCard key={article._id} article={article} />
        )
      )}
    </section>
  );
};

export default ArticlesGrid;
