import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import AdviceProvider from "./contexts/advice";
import ThemeProvider from "./contexts/theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <AdviceProvider>
        <App />
      </AdviceProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
