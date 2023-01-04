import "./App.css";
import Featured from "./components/Featured";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Info from "./components/Info";
import Coins from "./components/Coins";
import Singlecoin from "./components/Singlecoin";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Featured />
      <Info />
      <Coins />
      <Singlecoin />

      {/* <BrowserRouter>
        <Navbar />

        <Routes>
          <Hero />
          <Route path="" element={<Hero />} />
          <Route path="coins" element={<Coins />} />
        </Routes>
        <Featured />
        <Info />

        <Singlecoin />
      </BrowserRouter> */}
    </>
  );
}

export default App;
