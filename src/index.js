// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import PostPage from "./pages/PostPage";
import PasswordGeneratorEmbedded from "./components/PasswordGeneratorEmbedded"; // Adicione esta linha
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/post/:id" element={<PostPage />} />
        <Route path="/senha-forte" element={<PasswordGeneratorEmbedded />} /> {/* Adicione esta linha */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);