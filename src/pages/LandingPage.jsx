import React from "react";
import Footer from "../components/Footer";

function LandingPage() {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="../logo_gif/gifLogo-v1.gif"
            loading="lazy"
            className="max-w-sm rounded-lg shadow-2xl hover:shadow-lg"
            alt="logo"
          />
          <div>
            <h1 className="text-5xl font-bold">WORK IN PROGRESS</h1>
            <p className="py-6">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim
            </p>
            {/* <button className="btn btn-primary">Get Started</button> */}
          </div>
        </div>
      </div>
      {/* Footer.jsx inserted here */}
      <Footer />
    </div>
  );
}

export default LandingPage;
