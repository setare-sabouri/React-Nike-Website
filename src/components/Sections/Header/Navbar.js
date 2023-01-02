import "./navbar.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
    return (
        <nav className="component">
            <img
                className="logo"
                src='./Nike-logo.png'
                title="Nike logo"
                alt="Nike Logo"
            />
            <NavLink to="/">
                Men
            </NavLink>

            <NavLink to="/">
                Women
            </NavLink>
            <NavLink to="/">
                Kids
            </NavLink>
            <NavLink to="/">
                Customise
            </NavLink>
            <NavLink to="/">
                Sale
            </NavLink>
            <NavLink to="/">
                Shipping
            </NavLink>
        </nav >
    );
};

export default Navbar;
