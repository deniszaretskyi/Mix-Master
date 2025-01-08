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
    strIngredient1: ing1,
    strIngredient2: ing2,
    strIngredient3: ing3,
    strIngredient4: ing4,
    strIngredient5: ing5,
    strIngredient6: ing6,
    strIngredient7: ing7,
    strIngredient8: ing8,
    strIngredient9: ing9,
    strIngredient10: ing10,
    strMeasure1: measure1,
    strMeasure2: measure2,
    strMeasure3: measure3,
    strMeasure4: measure4,
    strMeasure5: measure5,
    strMeasure6: measure6,
    strMeasure7: measure7,
    strMeasure8: measure8,
    strMeasure9: measure9,
    strMeasure10: measure10,
  } = data;

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
            {measure1 && <p>{measure1}</p>}
            {measure2 && <p>{measure2}</p>}
            {measure3 && <p>{measure3}</p>}
            {measure4 && <p>{measure4}</p>}
            {measure5 && <p>{measure5}</p>}
            {measure6 && <p>{measure6}</p>}
            {measure7 && <p>{measure7}</p>}
            {measure8 && <p>{measure8}</p>}
            {measure9 && <p>{measure9}</p>}
            {measure10 && <p>{measure10}</p>}
          </div>
          <div className="ingredients">
            {ing1 && <p>{ing1}</p>}
            {ing2 && <p>{ing2}</p>}
            {ing3 && <p>{ing3}</p>}
            {ing4 && <p>{ing4}</p>}
            {ing5 && <p>{ing5}</p>}
            {ing6 && <p>{ing6}</p>}
            {ing7 && <p>{ing7}</p>}
            {ing8 && <p>{ing8}</p>}
            {ing9 && <p>{ing9}</p>}
            {ing10 && <p>{ing10}</p>}
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
