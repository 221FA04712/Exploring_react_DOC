import React from "react";
import { createRoot } from "react-dom/client";

import App1 from "./Exploring_Quick_Start/App1";
import App2 from "./Exploring_Adding Interactivity/Responding_to_Events/App2";

const root = createRoot(document.getElementById("root"));
// Exploring the Quick Start documentation.
//root.render(<App1 />);
//Exploring the Adding Interactivity documentation.
//Responding to Events documentation.
root.render(<App2 />);