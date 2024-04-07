import React from "react";
import ReactDOM from "react-dom/client";
import ControlApp from "./App";
import UnControllApp from "./App_PostwithUncontrol";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <ControlApp />
    {/* <UnControllApp /> */}
  </>
);
