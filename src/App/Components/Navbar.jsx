import { NavLink } from "react-router-dom";
import Nav from "../../assets/wrappers/Navbar";

const Navbar = () => {
  return (
    <Nav>
      <div className="navCenter">
        <h1 className="navText">
          mix <span>master</span>
        </h1>
        <ul className="navLinks">
          <NavLink className="link" to={"/"} end>
            Home
          </NavLink>
          <NavLink className="link" to={"/about"} end>
            About
          </NavLink>
          <NavLink className="link" to={"/newsletter"} end>
            Newsletter
          </NavLink>
        </ul>
      </div>
    </Nav>
  );
};

export default Navbar;
