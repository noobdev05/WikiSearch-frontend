import React, { useState } from "react";
import "./Home.css";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
function Home({ setResults, setQuery }) {
  const [text, setText] = useState(null);
  useEffect(() => {
    console.log(text);
    if (text !== "") {
      setQuery(text);
      axios.get("http://localhost:9000?query=" + text).then(({ data }) => {
        const object = JSON.parse(JSON.stringify(data));
        const array = [];
        for (const [key, value] of Object.entries(object)) {
          array.push(value);
        }
        setResults(array);
      });
    }
  }, [text]);
  return (
    <div className="home">
      <img
        src="https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Wikipedia-logo-v2.svg/1200px-Wikipedia-logo-v2.svg.png"
        alt=""
      />
      <h1>Wiki Search</h1>
      <input
        type="text"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setText(text);
        }}
      >
        <Link to="/results">Search</Link>
      </button>
    </div>
  );
}

export default Home;
