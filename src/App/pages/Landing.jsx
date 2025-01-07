import SearchForm from "../Components/SearchForm";
import CocktailList from "../Components/CocktailList";
import axios from "axios";
import { useLoaderData } from "react-router-dom";
export const loader = async () => {
  const cocktailSearchUrl =
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
  const inputVal = "s";

  const resp = await axios.get(`${cocktailSearchUrl}${inputVal}`);
  console.log(resp);

  return { drinks: resp?.data?.drinks };
};

const Landing = () => {
  const { drinks } = useLoaderData();
  return (
    <>
      <SearchForm />
      <CocktailList drinks={drinks} />
    </>
  );
};

export default Landing;
