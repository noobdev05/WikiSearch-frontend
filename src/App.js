import "./App.css";
import Home from "./Home";
import "./App.css";
import Result from "./Result";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("No results");
  useEffect(() => {
    console.log(results);
  }, [results]);
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/results">
            <Result results={results} query={query} />
          </Route>
          <Route path="/">
            <Home setResults={setResults} setQuery={setQuery} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
