import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { CryptoState } from "../Context";
function Navbar() {
  const { currency, setCurrency } = CryptoState();
  console.log(currency);

  // const changeCurrency = (e) => {
  //   setCurrency(e.target.value);
  // };
  return (
    <>
      <div className="navbar">
        <div className="container">
          <div className="nav-menu">
            <ul>
              <li>
                <a>CryptoMedia</a>
                {/* <NavLink to="">CryptoMedia</NavLink> */}
              </li>
              <li>
                <a>Coins</a>
                {/* <NavLink to="coins">Coins</NavLink> */}
              </li>
            </ul>
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
            <div>Login</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
