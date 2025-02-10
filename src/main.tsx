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
  MultipleChoice,
  QuizMenu,
  TrueOrFalse,
  TrueOrFalseQuiz,
  WelcomePage,
  MultipleChoiceResult,
  TrueOrFalseResult,
  Setting,
  Profile,
  Instruction,
  Source,
  MaterialText,
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
              <Route path="/setting" element={<Setting />}>
                <Route path="/setting/profile" element={<Profile />} />
                <Route path="/setting/instruction" element={<Instruction />} />
                <Route path="/setting/source" element={<Source />} />
              </Route>
              <Route path="/material-definition" element={<Material />} />
              <Route
                path="/material-definition/generic-structure"
                element={<GenericStructure />}
              />
              <Route
                path="/material-definition/language-features"
                element={<LanguageFeatures />}
              />
              <Route path="/material">
                <Route path="/material/:id" element={<MaterialText />} />
              </Route>
              <Route path="/quiz-menu" element={<QuizMenu />} />
              <Route
                path="/quiz/multiple-choice/:id"
                element={<MultipleChoice />}
              />
              <Route
                path="/quiz/multiple-choice/result"
                element={<MultipleChoiceResult />}
              />
            </Route>

            <Route path="/quiz/true-or-false" element={<TrueOrFalse />} />
            <Route
              path="/quiz/true-or-false/:id"
              element={<TrueOrFalseQuiz />}
            />
            <Route
              path="/quiz/true-or-false/result"
              element={<TrueOrFalseResult />}
            />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>,
);
