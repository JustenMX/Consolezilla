import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { useState, useEffect } from "react";

function HomePage() {
  return (
    <>
      <NavBar />
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <h1>Homepage</h1>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
