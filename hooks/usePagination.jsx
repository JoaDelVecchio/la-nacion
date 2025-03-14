"use client";
import { useCallback, useState } from "react";

const usePagination = (items, perPage = 8) => {
  const [visibleCount, setVisibleCount] = useState(perPage);
  const visibleItems = items.slice(0, visibleCount);
  const hasMore = visibleCount < items.length;

  const loadMore = useCallback(() => {
    setVisibleCount((prevCount) => prevCount + perPage);
  }, []);

  return { visibleItems, hasMore, loadMore };
};

export default usePagination;
