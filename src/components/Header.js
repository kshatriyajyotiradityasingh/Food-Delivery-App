import { LOGO_LINK } from "../utils/Constants";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { useContext } from "react";
import { useSelector } from "react-redux";
const Header = () => {
  const isOnline = useOnline();

  const { loggedInUser } = useContext(UserContext);

  const cart = useSelector((store) => store.cart.items);
  return (
    <div className="header">
      <Link to={"/"}>
        {" "}
        <img className="logo" src={LOGO_LINK} />
      </Link>

      <div className="nav-links">
        <ul>
          <li>Online Status:{isOnline ? "🟢" : "🔴"}</li>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About us</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li>
            <Link to={"/grocery"}>Grocery</Link>
          </li>

          <li>
            <Link to={"/cart"}>Cart - {cart.length}</Link>
          </li>
          <li>{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
