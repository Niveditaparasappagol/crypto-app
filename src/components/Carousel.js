import axios from "axios";
import AliceCarousel from "react-alice-carousel";
import { trendingCoins } from "../constant/api";
import { useState, useEffect } from "react";
import "react-alice-carousel/lib/alice-carousel.css";

function Carousel() {
  const [trending, setTrending] = useState([]);

  const fetchTrendingCoins = async () => {
    const data = await axios
      .get(trendingCoins)
      .then((data) => {
        setTrending(data.data.coins);
        console.log(data.data.coins);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchTrendingCoins();
  }, []);
  console.log(trending);

  const handleDragStart = (e) => e.preventDefault();
  const items = trending.map((trend) => {
    console.log(trend.item.large);
    return (
      <img
        src={trend.item.large}
        alt={trend.item.name}
        onDragStart={handleDragStart}
        role="presentation"
      />
    );
  });
  console.log("items", items);

  return (
    <>
      <AliceCarousel items={items} />
    </>
  );
}

export default Carousel;
