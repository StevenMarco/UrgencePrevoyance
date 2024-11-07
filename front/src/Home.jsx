import PageArticles from "./component/PageArticles";
import ArticleMap from "./component/articleMap";
import "./Home.css";

function Home() {
  return (
    <div style={{paddingTop: "100px"}}>
      <PageArticles />
      <ArticleMap />
    </div>
  );
}

export default Home;