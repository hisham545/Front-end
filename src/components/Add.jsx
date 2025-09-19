import { useState } from "react";
function Add() {
  let [file, setfile] = useState(null);
  let [desc, setdesc] = useState(null);
  let [title, settitle] = useState(null);
  function add() {
    const formdata = new FormData();
    formdata.append("title", title);
    formdata.append("desc", desc);
    formdata.append("image", file);
    fetch("http://localhost:5000/add", {
      method: "post",
      body: formdata,
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }
  return (
    <div className="add">
      <div className="add1">
        <h2 className="text-center h2">اضف وصفتك</h2>
        <input
          placeholder="Enter you recipe name"
          type="text"
          onChange={(e) => settitle(e.target.value)}
        />
        <textarea
          placeholder="Enter your recipe details"
          onChange={(e) => setdesc(e.target.value)}
        ></textarea>
        <input
          className="file"
          type="file"
          onChange={(e) => setfile(e.target.files[0])}
        />
        <a
          className="btn btn-outline-info"
          onClick={add}
          href={title && desc && file && "/"}
        >
          add
        </a>
      </div>
    </div>
  );
}
export default Add;
