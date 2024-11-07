import PageArticles from "./component/PageArticles";
import ArticleMap from "./component/articleMap";
import "./Home.css";
import PagePartenaires from "./component/partenaires";

function Home() {
  return (
    <div style={{paddingTop: "100px"}}>
      <PageArticles />
      <ArticleMap />
      <PagePartenaires />
    </div>
  );
}

export default Home;