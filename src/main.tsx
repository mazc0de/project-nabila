import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.css";
import { Layout } from "./components";
import {
  GenericStructure,
  LanguageFeatures,
  MainMenu,
  Material,
  MyLovelyCat,
  PrambananTemple,
  WelcomePage,
} from "./pages";

import store, { persistor } from "./redux/store";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<WelcomePage />} />
              <Route path="/main-menu" element={<MainMenu />} />
              <Route path="/material-definition" element={<Material />} />
              <Route
                path="/material-definition/generic-structure"
                element={<GenericStructure />}
              />
              <Route
                path="/material-definition/language-features"
                element={<LanguageFeatures />}
              />
              <Route
                path="/material-definition/prambanan-temple"
                element={<PrambananTemple />}
              />
              <Route
                path="/material-definition/my-lovely-cat"
                element={<MyLovelyCat />}
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>,
);
