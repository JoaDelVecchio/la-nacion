import { Suspense } from "react";
import Loading from "@/app/loading";
import GridTitle from "./GridTitle";
import ArticlesDataLoader from "./ArticlesDataLoader";
const MainContent = () => {
  return (
    <div className="sidebar__main">
      <GridTitle />
      <Suspense fallback={<Loading />}>
        <ArticlesDataLoader />
      </Suspense>
    </div>
  );
};

export default MainContent;
