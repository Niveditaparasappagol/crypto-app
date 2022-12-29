import "./Singlecoin.css";
import CoinInfo from "./CoinInfo";
import { useState, useEffect } from "react";
import { singleCoins } from "../constant/api";
import axios from "axios";

function Singlecoin() {
  const [singlecoin, setSinglecoin] = useState([]);

  const fetchSinglecoin = async () => {
    try {
      const result = await axios
        .get(singleCoins)
        .then((result) => {
          setSinglecoin(result.data);
          console.log(result.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (err) {}
  };

  useEffect(() => {
    fetchSinglecoin();
  }, []);
  return (
    <>
      <div className="single-coin">
        <div className="sidebar">
          {singlecoin.map((single, id) => {
            return (
              <div key={id}>
                <img
                  src={single.image.large}
                  alt={single.name}
                  className="single-coin"
                />
                <h3 className="coin-name">{single.name}</h3>
              </div>
            );
          })}
        </div>
        <CoinInfo />
      </div>
    </>
  );
}

export default Singlecoin;
