import "./Banner.css";
import image7 from "../assets/image7.jpg";
// import Carousel from "./Carousel";

function Banner() {
  return (
    <>
      <div className="banner">
        <div className="image-tag">
          <img src={image7} alt="crypto" className="image" />

          <h2 className="h-tag"><b>Crypto Media</b></h2>
          <p className="p-tag">
            Get All The Info Regarding Your Favourite Crypto currency
          </p>

          {/* <div className="carousel"><Carousel /></div> */}
        </div>
      </div>
    </>
  );
}

export default Banner;
