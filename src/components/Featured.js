import "./Featured.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { FiArrowUpRight, FiArrowDown } from "react-icons/fi";
import { trendingCoins } from "../constant/api";
import { useNavigate } from "react-router-dom";
import { CryptoState } from "../Context";
import Coins from "./Coins";

function Featured() {
  const navigation = useNavigate();
  const { currency, symbol } = CryptoState();

  const onClickHandler = () => {
    // alert("see more coins");
    navigation("/coins");
  };
  const [data, setData] = useState(null);

  const oneCoin = async () => {
    try {
      const response = await axios
        .get(trendingCoins(currency))
        .then((response) => {
          setData(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (err) {}
  };

  useEffect(() => {
    oneCoin();
  }, [currency]);
  console.log(data);
  if (!data) return null;
  return (
    <>
      <div className="featured">
        <div className="container">
          <div className="left">
            <h2>Explore top Crypto's Like Bitcoin, Ethereum, and Dogecoin</h2>
            <p>See all available assets: Cryptocurrencies and NFT's</p>
            <button onClick={onClickHandler} className="btn">
              See More Coins
            </button>
          </div>
          <div   className="right">
            <div className="card">
              <div className="top">
                <img src={data[0].image} alt="" />
              </div>
              <div onClick={ ()=>{navigation(`${data.id}`)}} className="name-color">
                <h5>{data[0].name}</h5>
                <p>
                  {symbol}
                  {""}
                  {data[0].current_price.toLocaleString()}
                </p>
              </div>

              {data[0].price_change_percentage_24h < 0 ? (
                <span className="red">
                  <FiArrowDown className="icon" />
                  {data[0].price_change_percentage_24h.toFixed(2)}%
                </span>
              ) : (
                <span className="green">
                  <FiArrowUpRight className="icon" />
                  {data[0].price_change_percentage_24h.toFixed(2)}%
                </span>
              )}
            </div>
            <div className="card">
              <div className="top">
                <img src={data[1].image} alt="" />
              </div>
              <div className="name-color">
                <h5>{data[1].name}</h5>
                <p>
                  {symbol}
                  {""}
                  {data[1].current_price.toLocaleString()}
                </p>
              </div>

              {data[1].price_change_percentage_24h < 0 ? (
                <span className="red">
                  <FiArrowDown className="icon" />
                  {data[1].price_change_percentage_24h.toFixed(2)}%
                </span>
              ) : (
                <span className="green">
                  <FiArrowUpRight className="icon" />
                  {data[1].price_change_percentage_24h.toFixed(2)}%
                </span>
              )}
            </div>
            <div className="card">
              <div className="top">
                <img src={data[2].image} alt="" />
              </div>
              <div className="name-color">
                <h5>{data[2].name}</h5>
                <p>
                  {symbol}
                  {""}
                  {data[2].current_price.toLocaleString()}
                </p>
              </div>

              {data[2].price_change_percentage_24h < 0 ? (
                <span className="red">
                  <FiArrowDown className="icon" />
                  {data[2].price_change_percentage_24h.toFixed(2)}%
                </span>
              ) : (
                <span className="green">
                  <FiArrowUpRight className="icon" />
                  {data[2].price_change_percentage_24h.toFixed(2)}%
                </span>
              )}
            </div>
            <div className="card">
              <div className="top">
                <img src={data[3].image} alt="" />
              </div>
              <div className="name-color">
                <h5>{data[3].name}</h5>
                <p>
                  {symbol}
                  {""}
                  {data[3].current_price.toLocaleString()}
                </p>
              </div>

              {data[3].price_change_percentage_24h < 0 ? (
                <span className="red">
                  <FiArrowDown className="icon" />
                  {data[3].price_change_percentage_24h.toFixed(2)}%
                </span>
              ) : (
                <span className="green">
                  <FiArrowUpRight className="icon" />
                  {data[3].price_change_percentage_24h.toFixed(2)}%
                </span>
              )}
            </div>
            <div className="card">
              <div className="top">
                <img src={data[4].image} alt="" />
              </div>
              <div className="name-color">
                <h5>{data[4].name}</h5>
                <p>
                  {symbol}
                  {""}
                  {data[4].current_price.toLocaleString()}
                </p>
              </div>

              {data[0].price_change_percentage_24h < 0 ? (
                <span className="red">
                  <FiArrowDown className="icon" />
                  {data[4].price_change_percentage_24h.toFixed(2)}%
                </span>
              ) : (
                <span className="green">
                  <FiArrowUpRight className="icon" />
                  {data[4].price_change_percentage_24h.toFixed(2)}%
                </span>
              )}
            </div>
            <div className="card">
              <div className="top">
                <img src={data[5].image} alt="" />
              </div>
              <div className="name-color">
                <h5>{data[5].name}</h5>
                <p>
                  {symbol}
                  {""}
                  {data[5].current_price.toLocaleString()}
                </p>
              </div>

              {data[5].price_change_percentage_24h < 0 ? (
                <span className="red">
                  <FiArrowDown className="icon" />
                  {data[5].price_change_percentage_24h.toFixed(2)}%
                </span>
              ) : (
                <span className="green">
                  <FiArrowUpRight className="icon" />
                  {data[5].price_change_percentage_24h.toFixed(2)}%
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Featured;
