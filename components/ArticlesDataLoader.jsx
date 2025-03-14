import { fetchArticles } from "../services/articleService";
import ArticlesAndTagsContainer from "./ArticlesAndTagsContainer";

const ArticlesDataLoader = async () => {
  const { articles } = await fetchArticles();

  return <ArticlesAndTagsContainer articles={articles} />;
};
export default ArticlesDataLoader;
