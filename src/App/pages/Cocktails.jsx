import axios from "axios";
import { useLoaderData } from "react-router-dom";
import Wrapper from "../../assets/wrappers/CocktailPage";
export const loader = async ({ params }) => {
  const singleCocktailURL =
    "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
  const { id } = params;
  const resp = await axios.get(`${singleCocktailURL}${id}`);
  const drink = resp.data.drinks;

  return drink;
};
const Cocktails = () => {
  const drink = useLoaderData();
  const data = drink[0];
  const {
    strDrink: name,
    strGlass: glass,
    strInstructions: instructions,
    strDrinkThumb: img,
  } = data;

  const validIngredients = Object.keys(data)
    .filter((key) => key.startsWith("strIngredient") && data[key] !== null)
    .map((key) => data[key]);

  const validMeasures = Object.keys(data)
    .filter((key) => key.startsWith("strMeasure") && data[key] !== null)
    .map((key) => data[key]);

  return (
    <Wrapper>
      <div className="cocktailImgTitle">
        <div className="cocktailTitleInfo">
          <h2>{name}</h2>
          <p>{glass}</p>
        </div>
        <img src={img} alt={`image of ${name}`} />
      </div>
      <div className="wrapper">
        <h4>Ingredients:</h4>
        <div className="measuresAndIngredients">
          <div className="measures">
            {validMeasures.map((item, index) => {
              return <p key={index}>{item}</p>;
            })}
          </div>
          <div className="ingredients">
            {validIngredients.map((item, index) => {
              return <p key={index}>{item}</p>;
            })}
          </div>
        </div>
      </div>
      <div className="instructions">
        <h4>Instructions:</h4>
        <p>{instructions}</p>
      </div>
    </Wrapper>
  );
};

export default Cocktails;
