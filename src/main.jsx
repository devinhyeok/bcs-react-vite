import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "././practice/component";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
