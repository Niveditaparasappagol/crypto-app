import "./Coins.css";

import { useState, useEffect, useRef } from "react";
import { fetchUrl } from "../constant/api";
import axios from "axios";
import Pagination from "./Pagination";
import Banner from "./Banner";

function Coins() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);

  const fetchCoins = async () => {
    setLoading(true);
    try {
      const res = await axios
        .get(fetchUrl)
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
  }, []);

  const lastPostIndex = currentPage * postPerPage;
  const firstPOstIndex = lastPostIndex - postPerPage;
  const currentPost = coins.slice(firstPOstIndex, lastPostIndex);

  // const ref = useRef(null);

  return (
    <>
      <Banner />
      <div className="search-coins">
        <h1 className="prices">Cryptocurrency prices</h1>

        <div>
          <input
            className="search-input"
            type="text"
            placeholder="Search Your Favourite Coin"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div>
          <table border="1" className="table">
            <thead>
              <tr>
                <th>Coin</th>
                <th>Price</th>
                <th>24h Change</th>
                <th>Market Cap</th>
              </tr>
            </thead>
            <tbody>
              {currentPost.map((obj, index) => {
                return (
                  <tr key={index}>
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
                    <td>{obj.current_price}</td>
                    <td>{obj.price_change_percentage_24h.toFixed(2)}%</td>
                    <td>{obj.market_cap.toString().slice(0, 6)}M</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <Pagination
        postPerPage={postPerPage}
        totalPost={coins.length}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        // ref={ref}
      />
    </>
  );
}

export default Coins;
