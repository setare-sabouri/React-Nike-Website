import "./NavbarStyles.css";
function Navbar() {
  return (
    <>
      <nav>
        <div className="left-nav">
          <ul id="navbar">
            <li>
              <a href="index.html">
                <img src="Images/Header/Logo-nike.png"></img>
              </a>
            </li>
            <li>
              <a href="index.html">
                Men
              </a>
            </li>

            <li>
              <a href="index.html">
                Women
              </a>
            </li>

            <li>
              <a href="index.html">
                Kids
              </a>
            </li>

            <li>
              <a href="index.html">
                Customize
              </a>
            </li>

            <li>
              <a href="index.html">
                Sale
              </a>
            </li>

            <li>
              <a href="index.html">
                Shipping
              </a>
            </li>
          </ul>
        </div>

        <div className="right-nav">
          <a href="index.html">
            <img src="Images/Header/search-icon.png"></img>
          </a>
          <a href="index.html">
            <a href="index.html">
              <img src="./Images/Header/bag-icon.png"></img>
            </a>
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
