import axios from "axios";
import AliceCarousel from "react-alice-carousel";
import { trendingCoins } from "../constant/api";
import { useState, useEffect } from "react";
import { CryptoState } from "../Context";

function Carousel() {
  const [trending, setTrending] = useState([]);
  const { currency } = CryptoState();
  const fetchTrendingCoins = () => {
    try {
      axios
        .get(trendingCoins(currency))
        .then((data) => {
          setTrending(data.data.coins);
          console.log(data.data.coins);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {}
  };

  useEffect(() => {
    fetchTrendingCoins();
  }, [currency]);
  console.log(trending);

  const myStyle = {
    height: "80px",
    marginBottom: "10px",
  };

  const handleDragStart = (e) => e.preventDefault();

  const items = trending.map((trend) => {
    console.log(trend.item.large);
    return (
      <img
        src={trend.item.large}
        alt={trend.item.name}
        onDragStart={handleDragStart}
        role="presentation"
        style={myStyle}
      />
    );
  });
  console.log("items", items);

  return (
    <>
      <AliceCarousel
        items={items}
        infinite={true}
        autoPlay={true}
        autoPlayInterval={1000}
        // mouseTracking={true}
        animationDuration={1500}
        // disableDotsControls={true}
      />
    </>
  );
}

export default Carousel;
