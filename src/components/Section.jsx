import { useEffect, useRef, useState } from "react";
import imge from "../hum.png";
import Footer from "./Footer";
import { HashLink } from "react-router-hash-link";
import Vid from "./0918.mp4";
import FR from "../svg.png";
import { useUser } from "@clerk/clerk-react";
function Section({ mode }) {
  let [recipe, setRecipe] = useState([]);
  let feer = useRef(null);
  let { user, isSignedIn } = useUser();
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
  }, []);

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
        <video autoPlay ref={feer} loop muted width="600">
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

        <img className="d8" src={FR} />
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
                    href={isSignedIn && "/fav"}
                    onClick={() => {
                      isSignedIn
                        ? add1(food)
                        : window.alert("Please sign in first");
                    }}
                    className="rounded-3 feed1 btn btn-outline-danger"
                  >
                    Add favorite
                  </a>
                  <button
                    onClick={() => {
                      isSignedIn
                        ? delete1(food._id)
                        : window.alert("Please sign in first");
                    }}
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
