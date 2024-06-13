import { LOGO_LINK } from "../utils/Constants";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
const Header = () => {
  const isOnline = useOnline();
  return (
    <div className="header">
      <img className="logo" src={LOGO_LINK} />

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

          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
