import Wrapper from "../../assets/wrappers/ErrorPage";
import img from "../../assets/not-found.svg";
import { Link, useRouteError } from "react-router-dom";
const Error = () => {
  const error = useRouteError();
  console.log(error);
  if (error.status === 404) {
    return (
      <Wrapper>
        <img src={img} alt="Not Found Image" />
        <h2>Ohhh!</h2>
        <p>We can't seem to find page you are looking for</p>
        <Link to={"/"} style={{ fontSize: "1.5rem" }} className="link">
          <span style={{ textDecoration: "underline" }}>Home Page</span>
        </Link>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <div>
        <h2>Something went Wrong</h2>
      </div>
    </Wrapper>
  );
};

export default Error;
