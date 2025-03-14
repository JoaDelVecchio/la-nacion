"use client";

import React, { useMemo } from "react";
import ArticlesGrid from "./ArticlesGrid";
import TrendingTags from "./TrendingTags";
import LoadMoreButton from "./LoadMoreButton";
import { getTopTags } from "../utils/utils";
import NoArticlesFound from "./NoArticlesFound";
import usePagination from "../hooks/usePagination";

const ArticlesAndTagsContainer = ({ articles }) => {
  if (!articles || articles.length === 0) return <NoArticlesFound />;

  const {
    visibleItems: visibleArticles,
    hasMore,
    loadMore,
  } = usePagination(articles);

  const topTags = useMemo(() => getTopTags(articles), [articles]);

  return (
    <>
      <TrendingTags topTags={topTags} />
      <ArticlesGrid articles={visibleArticles} />
      {hasMore && <LoadMoreButton onClick={loadMore} />}
    </>
  );
};

export default ArticlesAndTagsContainer;
