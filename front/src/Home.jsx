import PageArticles from "./component/PageArticles";
import ArticleMap from "./component/articleMap";
import PageAccueil from "./component/PageAccueil";
import "./Home.css";

function Home() {
  return (
    <div style={{paddingTop: "100px"}}>
      <PageAccueil />
      <PageArticles />
      <ArticleMap />
    </div>
  );
}

export default Home;