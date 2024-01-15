import "./app.css";
import { RouteLayout } from "@ui/layout";
import { AboutPage, ChangeDatePage } from "@ui/pages";

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
