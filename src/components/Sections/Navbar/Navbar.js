import "./NavbarStyles.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <nav>
        <div className="left-nav">
          <ul id="navbar">
            <li>
              <Link to="/">
                <img alt="nike" src="Images/Header/Logo-nike.png" />
              </Link>
            </li>
            <li>
              <Link to="/products">Men</Link>
            </li>

            <li>
              <Link to="/products">Women</Link>
            </li>

            <li>
              <Link to="/products">Kids</Link>
            </li>

            <li>
              <Link to="/products">Customize</Link>
            </li>

            <li>
              <Link to="/products">Sale</Link>
            </li>

            <li>
              <Link to="/products">Shipping</Link>
            </li>
          </ul>
        </div>
        <Link to="/cart">
          <div className="cart">
            <img alt="icon" src="./Images/Header/bag-icon.png" />
          </div>
        </Link>
      </nav>
    </>
  );
}

export default Navbar;
