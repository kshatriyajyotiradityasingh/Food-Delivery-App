import { LOGO_LINK } from "../utils/Constants";
const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={LOGO_LINK} />

      <div className="nav-links">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
