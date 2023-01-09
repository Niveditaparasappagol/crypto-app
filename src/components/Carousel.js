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
          setTrending(data.data);
          console.log(data.data);
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
    whiteSpace: "30px",
    autoWidth: "false",
    innerWidth: "30px",

    // margin: "0px 10px",
    // marginLeft: "10px",
    // marginRight: "10px",
  };

  const itemss = {
    0: {
      items: 1,
    },
    1024: {
      items: 3,
      itemsFit: "contain",
    },
  };

  const handleDragStart = (e) => e.preventDefault();

  const items = trending.map((trend) => {
    console.log(trend.item);
    return (
      <img
        src={trend.image}
        alt={trend.name}
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
        autoWidth={true}
        innerWidth={30}
        space={itemss}
      />
    </>
  );
}

export default Carousel;
