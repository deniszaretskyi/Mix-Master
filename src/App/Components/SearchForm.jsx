import Wrapper from "../../assets/wrappers/SearchForm";
import { BsSearch } from "react-icons/bs";
const SearchFrom = () => {
  return (
    <Wrapper
      onSubmit={(e) => {
        e.preventDefault();
        e.target.elements.search.value = "";
      }}
    >
      <input type="text" name="search" />
      <button>
        <BsSearch />
      </button>
    </Wrapper>
  );
};

export default SearchFrom;
