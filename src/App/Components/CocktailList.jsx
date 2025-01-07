import Wrapper from "../../assets/wrappers/CocktailList";
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
        return (
          <div className="drink" key={idDrink}>
            <img width={150} src={strDrinkThumb} alt="image" />
            <div className="drinkText">
              <h3>{strDrink}</h3>
              <p>{strCategory}</p>
            </div>
          </div>
        );
      })}
    </Wrapper>
  );
};

export default CocktailList;
