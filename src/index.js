import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "material-icons/css/material-icons.css";
import "./index.css";

const root = createRoot(document.getElementById("root"));
root.render(<App />);
registerServiceWorker();
