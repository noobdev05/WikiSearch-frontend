import React from "react";
import "./Result.css";
function Result({ results, query }) {
  return (
    <div className="result">
      <h1>Search Results : {query}</h1>
      <hr />
      <br />
      <div className="container">
        {results.map((link) => (
          <div className="display">
            <a href={link}>{link}</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Result;
