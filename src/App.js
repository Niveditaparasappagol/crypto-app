import "./App.css";

import Navbar from "./components/Navbar";

import Coins from "./components/Coins";
import Singlecoin from "./components/Singlecoin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";



function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="" element={<Homepage />} />
        <Route path="coins" element={<Coins />} />
        <Route path="coins/:id" element={<Singlecoin />} />
      </Routes>

      {/* <Singlecoin /> */}
    </BrowserRouter>
  );
}

export default App;
