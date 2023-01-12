import { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
export default function Navbar() {
	const [isNavExpanded, setIsNavExpanded] = useState(false);

	return (
<<<<<<< HEAD
		<nav className="navigation">
			<Link to="/">
				<img src="Images/Header/Logo-nike.png"></img>
			</Link>
			<button
				className="hamburger"
				onClick={() => {
					setIsNavExpanded(!isNavExpanded);
				}}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-5 w-5"
					viewBox="0 0 20 20"
					fill="white"
				>
					<path
						fillRule="evenodd"
						d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
						clipRule="evenodd"
					/>
				</svg>
			</button>
			<div
				className={
					isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
				}
			>
				<ul>
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
						<Link to="/products" className="sale-item">
							Sale
							<span className="badge">20%</span>
						</Link>
					</li>
					<li>
						<Link to="/products">
							Shipping
						</Link>
					</li>
				</ul>
			</div>
			<div className="cart">
				<img src="./Images/Header/bag-icon.png"></img>
			</div>
		</nav>
=======
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
				<Link to="/cart">
				<div className="cart">
					<img src="./Images/Header/bag-icon.png"></img>
				</div>
				</Link>
			</nav>
		</>
>>>>>>> 27ba2c7e51bdbcb4e67b055644ee28ae21931860
	);
}
