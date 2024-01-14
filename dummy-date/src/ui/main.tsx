import React from "react";
import ReactDOM from "react-dom/client";
import { UINetwork } from "./UINetwork";

async function bootstrap() {
  window.onmessage = UINetwork.onMessage;

  const App = (await import("./app")).default;

  const rootElement = document.getElementById("root") as HTMLElement;
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

bootstrap();
