import { useLoaderData } from "react-router-dom";
import "./SinglePage.scss";

export default function SinglePage() {
    const data = useLoaderData();
    console.log(data);

    return (
        <div className="singlepage">
            <div className="container">
                <div className="content">
                    <figure className="figurecontainer">
                        <img src={`${data.image}`} alt="Dish" />
                    </figure>
                    <div className="contentcontainer">
                        <div className="productheading">
                            <div className="producttitle">
                                <h2 className="titlefont">{data.name}</h2>
                                <div className="category">
                                    {data.mealType.map(item => (<span key={item.id} className="categoryfont" >{item}</span>))}
                                </div>
                            </div>
                        </div>
                        <div className="instructions">
                            <h2 className="subtitlefont">Ingredients: </h2>
                            <p className="infofont">
                                {data.ingredients.map((item) => (<li key={item.id}>{item}</li>))}
                            </p>
                        </div>
                        <div className="instructions">
                            <h2 className="subtitlefont">Cooking Instructions: </h2>
                            <p className="infofont">
                                {data.instructions.map(item => <li key={item.id}>{item}</li>)}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
