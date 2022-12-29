import "./Navbar.css";
// import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="container">
          <div className="nav-menu">
            <ul>
              <li>
                <a>CryptoMedia</a>
              </li>
              <li>
                <a>Coins</a>
              </li>
            </ul>
            <select>
              <option>INR</option>
              <option>USD</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
