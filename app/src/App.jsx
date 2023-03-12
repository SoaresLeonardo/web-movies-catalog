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
import NotFoundPage404 from "./pages/404notFound";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id?" element={<Details />} />
          <Route path="/search/:query?" element={<Search />} />
          <Route path="*" element={<NotFoundPage404 />} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
