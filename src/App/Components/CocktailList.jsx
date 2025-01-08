import Wrapper from "../../assets/wrappers/CocktailList";
import CocktailCard from "./CocktailCard";

const CocktailList = ({ drinks }) => {
  if (!drinks) return <h2>No matching cocktails were found...</h2>;
  return (
    <Wrapper>
      {drinks.map((item) => {
        const {
          idDrink,
          strDrink,
          strCategory,
          strInstructions,
          strDrinkThumb,
        } = item;
        return <CocktailCard key={idDrink} {...item} />;
      })}
    </Wrapper>
  );
};

export default CocktailList;
