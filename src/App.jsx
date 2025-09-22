import ".././node_modules/bootstrap/dist/css/bootstrap.css";
import ".././node_modules/bootstrap/dist/js/bootstrap.js";
import Header from "./components/Header.jsx";
import Section from "./components/Section.jsx";
import Add from "./components/Add.jsx";
import Fav from "./components/Fav.jsx";

import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { SignedIn, SignedOut, SignUp, SignInButton } from "@clerk/clerk-react";
import Deed from "./images.png";
import Wat from "./wt.webp";

function App() {
  const [mode, setmode] = useState("dark");
  function Yeed() {
    window.scroll({
      top: 0,
    });
  }

  return (
    <>
      <img
        onClick={Yeed}
        width={80}
        className="Feey"
        src={Deed}
        alt="welcome"
      />
      <a href="https://api.whatsapp.com/qr/PAXQFN5UE6OAE1?autoload=1&app_absent=0">
        {" "}
        <img className="Root" src={Wat} width={40} />
      </a>
      <Router>
        <Header mode={mode} setmode={setmode} />
        <Routes>
          <Route path="/" element={<Section mode={mode} setmode={setmode} />} />
          <Route path="/add" element={<Add />} />
          <Route path="/fav" element={<Fav />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
