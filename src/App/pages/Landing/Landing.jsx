import { useLoaderData } from "react-router-dom";
import { useGlobalContext } from "../../utils/Context";
import axios from "axios";
export const loader = async () => {
  const cocktailSearchUrl =
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
  const { inputVal, setIsLoading } = useGlobalContext();

  const resp = await axios.get(`${cocktailSearchUrl}${inputVal}`);
  setIsLoading(false);
  return { drinks: resp?.data?.drinks };
};

const Landing = () => {
  const { drinks } = useLoaderData();
  const { setInputVal, isLoading } = useGlobalContext();
  console.log(drinks);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setInputVal(e.target.elements.search.value);
          e.target.elements.search.value = "";
        }}
      >
        <input type="text" name="search" />
        <button>Search</button>
      </form>
      <section>
        {drinks.map((item) => {
          const {
            idDrink,
            strDrink,
            strGlass,
            strInstructions,
            strDrinkThumb,
          } = item;
          return (
            <div key={idDrink}>
              <img width={150} src={strDrinkThumb} alt="image" />
              <h3>{strDrink}</h3>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Landing;
