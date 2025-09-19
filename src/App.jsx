import ".././node_modules/bootstrap/dist/css/bootstrap.css";
import ".././node_modules/bootstrap/dist/js/bootstrap.js";
import Header from "./components/Header.jsx";
import Section from "./components/Section.jsx";
import Add from "./components/Add.jsx";
import Fav from "./components/Fav.jsx";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SignedIn, SignedOut, SignUp, SignInButton } from "@clerk/clerk-react";

function App() {
  const [mode, setmode] = useState("dark");

  return (
    <>
      <SignedOut>
        <div className="Fr">
          <SignUp></SignUp>
        </div>
      </SignedOut>
      <SignedIn>
        <Router>
          <Header mode={mode} setmode={setmode} />
          <Routes>
            <Route
              path="/"
              element={<Section mode={mode} setmode={setmode} />}
            />
            <Route path="/add" element={<Add />} />
            <Route path="/fav" element={<Fav />} />
          </Routes>
        </Router>
      </SignedIn>
    </>
  );
}

export default App;
