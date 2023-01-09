import "./Coins.css";

import { useState, useEffect, useRef } from "react";
import { fetchUrl } from "../constant/api";
import axios from "axios";
import Pagination from "./Pagination";
// import Banner from "./Banner";
import { useNavigate } from "react-router-dom";
import { CryptoState } from "../Context";

function Coins() {
  const navigation = useNavigate();
  const { currency, symbol } = CryptoState();

  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);

  const fetchCoins = async () => {
    setLoading(true);
    try {
      const res = await axios
        .get(fetchUrl(currency))
        .then((res) => {
          setCoins(res.data);

          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (err) {}
    setLoading(false);
  };

  useEffect(() => {
    fetchCoins();
  }, [currency]);

  const lastPostIndex = currentPage * postPerPage;
  const firstPOstIndex = lastPostIndex - postPerPage;
  const currentPost = coins.slice(firstPOstIndex, lastPostIndex);

  const tableref = useRef(null);

  return (
    <>
      {/* <Banner /> */}
      <div className="search-coins">
        {/* <h1 className="prices">Cryptocurrency prices</h1> */}

        <div>
          <input
            className="search-input"
            type="text"
            placeholder="Search Your Favourite Coin...."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div>
          <table border="1" className="table">
            <thead>
              <tr className="t-head">
                <th>Coin</th>
                <th>Price</th>
                <th>24h Change</th>
                <th>Market Cap</th>
              </tr>
            </thead>
            <tbody ref={tableref}>
              {currentPost
                .filter((obj) => {
                  return (
                    obj.name.toLowerCase().includes(search) ||
                    obj.symbol.toLowerCase().includes(search)
                  );
                })
                .map((obj, index) => {
                  console.log(obj);

                  return (
                    <tr
                      key={index}
                      onClick={() => {
                        navigation(`${obj.id}`);
                      }}
                    >
                      <td>
                        <img
                          src={obj.image}
                          alt={obj.name}
                          className="one-image"
                        />
                        <div className="row">
                          <span>{obj.symbol.toUpperCase()}</span>
                          <span>{obj.name}</span>
                        </div>
                      </td>
                      <td>
                        {symbol} {""}
                        {obj.current_price.toLocaleString()}
                      </td>
                      <td>{obj.price_change_percentage_24h.toFixed(2)}%</td>
                      <td>
                        {" "}
                        {symbol} {""}
                        {obj.market_cap.toLocaleString().slice(0, 8)}M
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
        <Pagination
          postPerPage={postPerPage}
          totalPost={coins.length}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          refTable={tableref}
        />
      </div>
    </>
  );
}

export default Coins;
