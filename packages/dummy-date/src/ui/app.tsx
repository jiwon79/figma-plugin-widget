import { RouteLayout } from "./layout";
import { AboutPage, ChangeDatePage } from "./pages";
import "./app.css";

function App() {
  return (
    <RouteLayout
      routes={["Dummy Date", "About"] as const}
      defaultRoute={"Dummy Date"}
      pages={{
        "Dummy Date": <ChangeDatePage />,
        About: <AboutPage />,
      }}
    />
  );
}

export default App;
