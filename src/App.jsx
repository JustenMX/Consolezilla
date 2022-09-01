import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import GamePage from "./pages/GamesPage";
import GenresPage from "./pages/GenresPage";
import ConsolePage from "./pages/ConsolePage";
import FavPage from "./pages/FavPage";
import AboutPage from "./pages/AboutPage";
import ErrorPage from "./pages/ErrorPage";
import GenresImagePage from "./pages/GenresImagePage";
import ConsoleImagePage from "./pages/ConsoleImagePage";
import "./main.css";

function App() {
  return (
    <>
      {/* <NavBar /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/games" element={<GamePage />} />
          <Route path="/games/:id" element={<GamePage />} />
          <Route path="/genres" element={<GenresPage />} />
          <Route path="/genres/:slug" element={<GenresImagePage />} />
          <Route path="/consoles" element={<ConsolePage />} />
          <Route path="/consoles/:id" element={<ConsoleImagePage />} />
          <Route path="/favs" element={<FavPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
    </>
  );
}

export default App;
