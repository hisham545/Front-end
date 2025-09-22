import { useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-react";
function Fav() {
  let { isSignedIn } = useUser();
  let [fav, setfav] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/fav")
      .then((resizeBy) => resizeBy.json())
      .then((data) => setfav(data));
  }, []);
  function del(id) {
    fetch(`http://localhost:5000/fav/${id}`, {
      method: "delete",
    })
      .then((res) => res.json())
      .then((ded) => console.log(ded));
  }
  return (
    <div>
      <div className="foop">
        {" "}
        <h1 className="t1">{!fav.length > 0 && "No favourit recipes"}</h1>
      </div>
      <div className="fav">
        {fav?.map((food, index) => {
          return (
            <div className="fa" key={index}>
              <h2>{food.title1}</h2>
              <img src={food.image1} />
              <div className="desc2">{food.desc1}</div>
              <button
                onClick={() => {
                  isSignedIn
                    ? del(food._id)
                    : window.alert("Please sign in first");
                }}
                className="btn b1 btn-outline-success"
              >
                delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Fav;
