import React from "react";
import ArticleCard from "./ArticleCard";

const ArticlesGrid = ({ articles }) => {
  return (
    <section className="row-gap-tablet-2 row-gap-deskxl-3 hlp-degrade">
      {articles.map((article, index) => (
        <ArticleCard key={article._id} article={article} />
      ))}
    </section>
  );
};

export default ArticlesGrid;
