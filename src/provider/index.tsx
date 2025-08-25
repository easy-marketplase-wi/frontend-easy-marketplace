import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "../App";
import { GlobalProvider } from "./global/global";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </StrictMode>
);
