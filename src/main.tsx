import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Agentation } from "agentation";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {import.meta.env.MODE === "development" && <Agentation />}
    <App />
  </StrictMode>,
);
