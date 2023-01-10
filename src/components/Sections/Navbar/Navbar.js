import "./NavbarStyles.css";
import { Link } from "react-router-dom";
import AllProducts from "../../Pages/ProductPage/AllProducts";
function Navbar() {
	return (
		<>
			<nav>
				<div className="left-nav">
					<ul id="navbar">
						<li>
							<Link to="/">
								<img src="Images/Header/Logo-nike.png"></img>
							</Link>
						</li>
						<li>
							<Link to="/products">
								Men
							</Link>
						</li>

						<li>
							<Link to="/products">
								Women
							</Link>
						</li>

						<li>
							<Link to="/products">
								Kids
							</Link>
						</li>

						<li>
							<Link to="/products">
								Customize
							</Link>
						</li>

						<li>
							<Link to="/products">
								Sale
							</Link>
						</li>

						<li>
							<Link to="/products">
								Shipping
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
