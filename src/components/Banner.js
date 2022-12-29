import "./Banner.css";
import crypto from "../assets/crypto.jpg";
import Carousel from "./Carousel";

function Banner() {
  return (
    <>
      <div className="banner">
        <div className="image-tag">
          <img src={crypto} alt="crypto" className="image" />

          <h2 className="h-tag">Crypto Hunter</h2>
          <p className="p-tag">
            Get All The Info Regarding Your Favourite Crypto currency
          </p>

          <div className="carousel">
            <Carousel />
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
