import { useEffect, useRef, useState } from "react";
import imge from "../hum.png";
import Footer from "./Footer";
import { HashLink } from "react-router-hash-link";
import Vid from "./0918.mp4";
function Section({ mode }) {
  let [recipe, setRecipe] = useState([]);
  let feer = useRef(null);

  // تشغيل الفيديو بعد ما الكومبوننت يركب
  useEffect(() => {
    if (feer.current) {
      feer.current.play().catch((err) => {
        console.log("المتصفح مانع التشغيل التلقائي:", err);
      });
      fetch("http://localhost:5000")
        .then((res) => res.json())
        .then((data) => setRecipe(data));
    }

    fetch("/food")
      .then((res) => res.json())
      .then((data) => setRecipe(data));
  });

  function add1(food) {
    fetch("http://localhost:5000", {
      headers: { "content-type": "application/json" },
      method: "POST",
      body: JSON.stringify({
        title1: food.title,
        desc1: food.desc,
        image1: food.image,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log("Added to favorites:", data))
      .catch((err) => console.error("Error:", err));
  }

  function delete1(id) {
    fetch(`http://localhost:5000/${id}`, { method: "DELETE" })
      .then((res) => res.json())
      .then((door) => console.log(door));
  }

  return (
    <div data-bs-theme={mode} className={`reed1 bg-dark`}>
      <div className="main">
        <video ref={feer} loop muted width="600">
          <source src={Vid} type="video/mp4" />
          المتصفح بتاعك لا يدعم تشغيل الفيديو
        </video>

        <div className="food">
          <article>
            <h1 className="text-light">Food Recipes</h1>
            <p className="text-light">
              the best place in the world to learn new recipes
            </p>
            <HashLink
              className="rounded-3 rt1 btn btn-outline-success"
              smooth
              to="#re"
            >
              see my recipes
            </HashLink>
          </article>
          <img className="d7" width={400} src={imge} alt="cover" />
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ff5500"
            fillOpacity="1"
            d="M0,256L48,245.3C96,235,192,213,288,218.7C384,224,480,256,576,256C672,256,768,224,864,213.3C960,203,1056,213,1152,229.3C1248,245,1344,267,1392,277.3L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <main className={`re bg-${mode}`}>
        <h1 id="re" className="h1">
          الوصفات
        </h1>
        <div className="geed">
          <div className="rood">
            {recipe?.map((food, index) => (
              <div className="deed" key={index}>
                <div style={{ "--reed": `${index * 0.5}s` }} className="rec">
                  <h3 className="text-center goor">{food.title}</h3>
                  <img
                    className="rounded-2"
                    width="200px"
                    height="200px"
                    src={food.image}
                    alt={food.title}
                  />
                  <div className="desc1 goor ">{food.desc}</div>
                  <a
                    href="/fav"
                    onClick={() => add1(food)}
                    className="rounded-3 feed1 btn btn-outline-danger"
                  >
                    Add favorite
                  </a>
                  <button
                    onClick={() => delete1(food._id)}
                    className="btn btn-outline-success mt-1"
                  >
                    delete the recipe
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer mode={mode} />
    </div>
  );
}

export default Section;
