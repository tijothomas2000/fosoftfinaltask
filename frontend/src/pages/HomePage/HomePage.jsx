import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import "./HomePage.scss";
import axios from "axios";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [categories, setCategories] = useState([]);
  const [trendingDishes, setTrendingDishes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchCategory() {
      setIsLoading(true);
      try {
        await axios.get("http://www.themealdb.com/api/json/v1/1/categories.php").then(res => {
          setCategories(res.data.categories);
          console.log(res.data.categories);
        })
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setError(err.message + ": Could'nt Fetch Data");
      }
    }
    async function fetchTrendingDishes() {
      setIsLoading(true)
      try {
        await axios.get("http://dummyjson.com/recipes").then(res => {
          console.log(res.data.recipes);
          setTrendingDishes(res.data.recipes);
        });
        setIsLoading(false);
      } catch (err) {
        setError(err.message + ": Could'nt Fetch Data");
        console.log(err.message);
      }
    }
    fetchTrendingDishes();
    fetchCategory();
  }, []);

  return (
    <div className="homepage">
      <section className="topsection">
        <div className="topsectioncontainer">
          <div className="siteinfo">
            <div className="title">
              <h2>Welcome to Gourmet Heaven Hotel</h2>
            </div>
            <div className="siteinfocontent">
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, autem. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis quae tempore aspernatur! At, exercitationem illo.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="trending">
        <div className="container">
          <div className="sectiontitle">
            <h2 className="titlefont">Trending Dishes</h2>
          </div>
          <div className="dishes">
            {isLoading &&
              <div className="loader">
                <div className="loadermain">
                </div>
              </div>}
            {trendingDishes.map((item) => (
              <Link to={`${item.id}`} key={item.id}><Card name={item.name} image={item.image} /></Link>
            ))}
          </div>
        </div>
      </section>
      <section className="trending">
        <div className="container">
          <div className="sectiontitle">
            <h2 className="titlefont">Menu By Category</h2>
          </div>
          <div className="dishes">
            {isLoading && <div className="loader"><div className="loadermain"></div></div>}
            {error && <p style={{ color: `red`, fontSize: `20px`, paddingLeft: `10px` }}>{error}</p>}
            {categories.map((item) => (
              <Card key={item.id} loading={isLoading} name={item.strCategory} image={item.strCategoryThumb} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
