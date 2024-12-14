import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <section className="navbar">
      <h1 className="navbarText">mix master</h1>
      <ul>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/newsletter"}>Newsletter</Link>
      </ul>
    </section>
  );
};

export default Navbar;
