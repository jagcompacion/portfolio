import React from "react";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "respectre/layout";
import { Navbar, NavbarSection, Divider } from "respectre/components";

import "spectre.css/dist/spectre.css";
import "spectre.css/dist/spectre-icons.css";
import "spectre.css/dist/spectre-exp.css";

import "./index.css";
import Home from "./pages/Home";
import About from "./pages/About";

const App = () => (
  <Router>
    <Container size="sm">
      <Navbar className="p-2">
        <NavbarSection />
        <NavbarSection>
          <Link to="/" className="p-2">
            Home
          </Link>
          <Link to="/about" className="p-2">
            About
          </Link>
        </NavbarSection>
      </Navbar>
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Divider />
      <div className="p-2 text-center">
        <small>
          © Copyright 2019 <a href="/">Jess Compacion</a>
        </small>
      </div>
    </Container>
  </Router>
);

export default App;
