import "../components/Info.css";
import trade from "../assets/trade.png";

function Info() {
  return (
    <>
      <div className="signup">
        <div className="container">
          <div className="left">
            <img src={trade} alt="trade" />
          </div>
          <div className="right">
            <h2>Earn passive income with crypto.</h2>
            <p>
              Earn up to 12% annual rewards on 30+ digital assets. Simply hold
              your assets in the app to automatically earn rewards at the end of
              each month with no lockups and no limits.
            </p>
            <p>
              We take pride in our ability to create user experiences that are
              simple no matter the complexity of the underlying technology.
            </p>

            <p>If You’ve Got The Time, We’ve Got The Exchange.</p>

            <p>
              Pioneered by Bitcoin, cryptocurrency transfer apps are exploding
              in popularity right now. Blockchain is especially popular in
              finance for the money and time it can save financial companies of
              all sizes.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Info;
