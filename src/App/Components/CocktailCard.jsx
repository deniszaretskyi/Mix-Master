import { Link } from "react-router-dom";
const CocktailCard = ({
  idDrink,
  strDrink,
  strCategory,
  strInstructions,
  strDrinkThumb,
}) => {
  return (
    <Link to={`/cocktail/${idDrink}`} className="drink" key={idDrink}>
      <img width={150} src={strDrinkThumb} alt="image" />
      <div className="drinkText">
        <h3>{strDrink}</h3>
        <p>{strCategory}</p>
      </div>
    </Link>
  );
};

export default CocktailCard;
