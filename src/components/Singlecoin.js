import "./Singlecoin.css";

import { useState, useEffect } from "react";
import { singleCoins } from "../constant/api";
import axios from "axios";
import { useParams } from "react-router-dom";
import { CryptoState } from "../Context";

function Singlecoin() {
  const { id } = useParams();
  console.log(useParams());
  const { currency, symbol } = CryptoState();
  const [singlecoin, setSinglecoin] = useState([]);

  // const { currency } = CryptoState();
  console.log(currency);
  const fetchSinglecoin = async () => {
    console.log(id);
    try {
      const result = await axios
        .get(singleCoins(id))
        .then((result) => {
          setSinglecoin([result.data]);
          console.log(result.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (err) {}
  };

  console.log(singlecoin);
  useEffect(() => {
    fetchSinglecoin();
  }, []);
  return (
    <div className="single-container">
      <div>
        {singlecoin &&
          singlecoin.map((single, id) => {
            return (
              <div key={id}>
                <div className="coin-container">
                  <div className="content">
                    <h1 className="coin-name">{single.name}</h1>
                  </div>
                  <div className="content">
                    <div className="rank">
                      <span className="rank-btn">
                        Rank # {single.market_cap_rank}
                      </span>
                    </div>
                    <div className="info">
                      <div className="coin-heading">
                        <img src={single.image.large} alt=" " />
                        <p>{single.name}</p>
                        <p>{single.symbol.toUpperCase()}</p>
                      </div>
                      <div className="coin-price">
                        <h1>
                          {symbol}
                          {""}
                          {single.market_data.current_price[
                            currency.toLowerCase()
                          ].toLocaleString()}
                        </h1>
                      </div>
                      </div>
                      </div>
                      <div className="content">
                        <table>
                          <thead>
                            <tr>
                              <th>1h</th>
                              <th>24h</th>
                              <th>7d</th>
                              <th>14d</th>
                              <th>30d</th>
                              <th>1yr</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                             
                                  {single.market_data.price_change_percentage_1h_in_currency[
                                    currency.toLowerCase()
                                  ].toFixed(1)}
                                  %
                              
                              </td>
                              <td>
                               
                                  {single.market_data.price_change_percentage_24h_in_currency[
                                    currency.toLowerCase()
                                  ].toFixed(1)}
                                  %
                              
                              </td>
                              <td>
                              
                                  {single.market_data.price_change_percentage_7d_in_currency[
                                    currency.toLowerCase()
                                  ].toFixed(1)}
                                  %
                              
                              </td>
                              <td>
                            
                                  {single.market_data.price_change_percentage_14d_in_currency[
                                    currency.toLowerCase()
                                  ].toFixed(1)}
                            
                              </td>
                              <td>
                            
                                  {single.market_data.price_change_percentage_30d_in_currency[
                                    currency.toLowerCase()
                                  ].toFixed(1)}
                                  %
                            </td>
                              <td>
                               
                                  {single.market_data.price_change_percentage_1y_in_currency[
                                    currency.toLowerCase()
                                  ].toFixed(1)}
                                  %
                              
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="content">
                        <div className="status">
                          <div className="info-left">
                            <div className="info-row">
                              <h4>24 Hour Low</h4>
                              <p>
                                {symbol}
                                {""}
                                {single.market_data.low_24h[
                                  currency.toLowerCase()
                                ].toLocaleString()}
                              </p>
                            </div>
                            <div className="info-row">
                              <h4>24 Hour High</h4>
                              <p>
                                {symbol}
                                {""}
                                {single.market_data.high_24h[
                                  currency.toLowerCase()
                                ].toLocaleString()}
                              </p>
                            </div>
                          </div>
                          <div className="info-right">
                            <div className="info-row">
                              <h4>Market Cap</h4>
                              <p>
                                {symbol}
                                {""}
                                {single.market_data.market_cap[
                                  currency.toLowerCase()
                                ].toLocaleString().slice(0,9)}
                              </p>
                            </div>
                            <div className="info-row">
                              <h4>Circulating Supply</h4>
                              <p>{single.market_data.circulating_supply}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content">
                        <div className="about">
                          <h3>About</h3>
                          <p
                            dangerouslySetInnerHTML={{
                              __html: single.description.en,
                            }}
                          ></p>
                        </div>
                      </div>
                   
               
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Singlecoin;

{
  /* <span
                  dangerouslySetInnerHTML={{ __html: single.description.en }}
                /> */
}
