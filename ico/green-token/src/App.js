import React, { Component } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Team from "./components/Team";
import Footer from "./components/Footer";
import Main from "./components/Main";
import "./App.css";
import Feature from "./components/Feature";
import Roadmap from "./components/Roadmap";

const App = () => {
    return(
      <div className="app">
        <Nav />
        <Hero/>
        <Main/>
        <Feature/>
        {/* <Roadmap /> */}
        <Team />
        <Footer />
      </div>
    )
}

export default App;