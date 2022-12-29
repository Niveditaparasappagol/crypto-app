import "./App.css";
import Featured from "./components/Featured";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Info from "./components/Info";
import Coins from "./components/Coins";
import Singlecoin from "./components/Singlecoin";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Featured />
      <Info />
      <Coins />
      <Singlecoin />
    </>
  );
}

export default App;
