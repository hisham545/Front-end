import { Link } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import Geed from "../rest.jpg";
import { useLocation } from "react-router-dom";

function Header({ mode, setmode }) {
  let home = useLocation().pathname.includes("/");
  let home1 = useLocation().pathname.includes("/add");
  let home2 = useLocation().pathname.includes("/fav");
  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top bg-${mode}`}
      data-bs-theme={mode}
    >
      <div className="container-fluid">
        <span className="navbar-brand ms-3">Food Recipes</span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Food Recipes
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>

          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
              <li className="nav-item">
                <Link className="nav-link rt active" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link rt active" href="/add">
                  Add Recipes
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link rt active" href="/fav">
                  Favourites
                </a>
              </li>
              <li className="nav-item">
                <a
                  href={home && !home1 && !home2 && "#re"}
                  className="nav-link"
                >
                  recipes
                </a>
              </li>
            </ul>

            <button
              onClick={() => setmode(mode === "dark" ? "light" : "dark")}
              className="rounded-5"
            >
              {mode === "dark" ? "🌙" : "☀️"}
            </button>

            <img className="rest" src={Geed} />

            <header className="head">
              <SignedOut>
                <SignInButton className="btn btn-outline-success" />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </header>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
