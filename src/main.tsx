import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.tsx";
import AppRouter from "./router.tsx";

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <AppRouter />
    </StrictMode>
  );
} else {
  console.error("Root element not found");
}
