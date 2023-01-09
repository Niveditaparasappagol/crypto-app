import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { CryptoState } from "../Context";
import { FaCoins } from "react-icons/fa";
function Navbar() {
  const { currency, setCurrency } = CryptoState();
  console.log(currency);

  // const changeCurrency = (e) => {
  //   setCurrency(e.target.value);
  // };
  return (
    <div className="navbar">
      <div className="nav-menu">
        <NavLink to="">
          <h1>
            Crypto<span className="crypto-media">Media</span>
          </h1>
        </NavLink>
      </div>
      <div className="nav-link">
        <div className="coin-link">
          <NavLink to="coins">
            Coins <FaCoins className="fa-coin"></FaCoins>
          </NavLink>
        </div>

        <div>
          <select
            className="select"
            value={currency}
            onChange={(e) => {
              setCurrency(e.target.value);
            }}
          >
            <option value={"INR"}>INR</option>
            <option value={"USD"}>USD</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
