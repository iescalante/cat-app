import "./App.css";
import axios from "axios";
import React, { useState } from "react";

function App() {
  const API_KEY = process.env.REACT_APP_CAT_API_KEY;
  const [imageURL, setImageURL] = useState("");

  const getRandomCat = async (e) => {
    e.preventDefault();
    axios.defaults.headers.common["x-api-key"] = API_KEY;
    const res = await axios.get("https://api.thecatapi.com/v1/images/search", {
      params: { limit: 1, size: "full" },
    });
    const url = res.data[0].url;
    setImageURL(`${url}`);
  };
  return (
    <>
      <h1>Welcome to the Cat App</h1>
      <button className="get-random" onClick={getRandomCat}>
        Get Random Cat
      </button>
      <div className="random-cat">
        <img src={imageURL} />
      </div>
    </>
  );
}

export default App;
