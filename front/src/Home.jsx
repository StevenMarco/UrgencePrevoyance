import PageArticles from "./component/PageArticles";
import ArticleMap from "./component/articleMap";
import PageAccueil from "./component/PageAccueil";
import "./Home.css";
import PagePartenaires from "./component/partenaires";

function Home() {
  return (
    <div style={{paddingTop: "100px"}}>
      <PageAccueil />
      <PageArticles />
      <ArticleMap />
      <PagePartenaires />
    </div>
  );
}

export default Home;