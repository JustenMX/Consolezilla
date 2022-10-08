import React from "react";
import Footer from "../components/Footer";

function LandingPage() {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <a href="/home">
            <img
              src="../LogoV1.png"
              loading="lazy"
              className="max-w-xs hover:animate-spin px-4"
              alt="logo"
            />
          </a>
          <div>
            <h1 className="text-6xl text-emerald-800 dark:text-emerald-600 font-extrabold py-6">
              WELCOME TO{" "}
              <span className="text-indigo-700 hover:text-amber-500 hover:animate-pulse">
                GAMEX
              </span>
            </h1>
          </div>
        </div>
      </div>
      {/* Footer.jsx inserted here */}
      <Footer />
    </div>
  );
}

export default LandingPage;
