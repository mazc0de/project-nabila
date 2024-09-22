import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.css";
import { Layout } from "./components";
import { StarterApp } from "./pages";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<StarterApp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
