import "./Coins.css";

import { useState, useEffect, useRef } from "react";
import { fetchUrl } from "../constant/api";
import axios from "axios";
import Pagination from "./Pagination";
import Banner from "./Banner";
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

  const profit = currentPost.price_change_percentage_24h;

  return (
    <>
      <div className="search-coins">
        <Banner />

        <div className="search-coin">
          <h1 className="prices">Cryptocurrency Prices by Market cap</h1>
          {/* <div className="search-box"> */}
          <input
            className="search-input"
            type="text"
            placeholder="Search Your Favourite Coin...."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {/* </div> */}

          <div className="coin-table">
            <table border="1" className="table">
              <thead>
                <tr className="t-head">
                  <th>Coin</th>
                  <th>Price</th>
                  <th>24h Change</th>
                  <th>Market Cap</th>
                </tr>
              </thead>
              <tbody className="table-body" ref={tableref}>
                {currentPost
                  .filter((obj) => {
                    return (
                      obj.name.toLowerCase().includes(search) ||
                      obj.symbol.toLowerCase().includes(search)
                    );
                  })
                  .map((obj, index) => {
                    console.log(obj);
                    const profit = obj.price_change_percentage_24h;
                    return (
                      <tr
                        key={index}
                        onClick={() => {
                          navigation(`${obj.id}`);
                        }}
                      >
                        <td className="obj-img">
                          <img
                            className="one-image"
                            src={obj.image}
                            alt={obj.name}
                          />
                          <div className="row">
                            <span>{obj.symbol.toUpperCase()}</span>
                            <span className="obj-name">{obj.name}</span>
                          </div>
                        </td>
                        <td>
                          {symbol} {""}
                          {obj.current_price.toLocaleString()}
                        </td>
                        <td style={{ color: profit > 0 ? "green" : "red" }}>
                          {obj.price_change_percentage_24h.toFixed(2)}%
                        </td>
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

// const promise1 = new Promise((resolve, reject) => {
//   const timer1 = setTimeout(() => {
//     resolve('success')
//   }, 1000)
// })
// const promise2 = promise1.then(() => {
//   throw new Error('error!!!')
// })
// console.log('promise1', promise1)
// console.log('promise2', promise2)
// const timer2 = setTimeout(() => {
//   console.log('promise1', promise1);
//   console.log('promise2', promise2);
// }, 2000)
// promise.all vs promise.allSettled
// polyfill for promise.all

// convert this to class
// let IdeaService = (function() {
//     let ideas = [];

//     async function find() {
//         return ideas;
//     }

//     async function create(data) {
//         const idea = {
//             id: ideas.length,
//             text: data.text,
//             tech: data.tech,
//             viewer: data.viewer
//         };

//         idea.time = moment().format('h:mm:ss a');
//         ideas.push(idea);
//         return idea;
//     }

//     return {
//         find,
//         create
//     }
// })();
