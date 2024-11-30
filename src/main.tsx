import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Tooltip } from "react-tooltip";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Tooltip id="tooltip" className={"!bg-[#494444] z-50 font-CoconNext !text-[rgba(255,_255,_255,_0.88)] max-w-[500px] !px-[16px] !py-[4px]"} />
    <App />
  </StrictMode>
);
