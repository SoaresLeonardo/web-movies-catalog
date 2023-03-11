import React from "react";
import Header from "./components/Header";
import Details from "./pages/Details";
import Home from "./pages/Home";

import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
