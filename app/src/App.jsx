import React from "react";
import Header from "./components/Header";
import Details from "./pages/Details";
import Home from "./pages/Home";

import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import Search from "./pages/Search";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id?" element={<Details />} />
          <Route path="/search/:query?" element={<Search />} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
