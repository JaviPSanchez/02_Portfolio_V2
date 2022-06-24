import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import About from "./pages/main/About";
import DataEngineering from "./pages/main/DataEngineering";
import DataAnalytics from "./pages/main/DataAnalytics";

// const routes = [
//   { path: "/", name: "Landing", element: <Landing /> },
//   { path: "/main", name: "Main", element: <Main /> },
//   { path: "main/de", name: "Data Engineer", element: <DataEngineering /> },
//   { path: "/main/da", name: "Data Analytics", element: <DataAnalytics /> },
// ];

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="about" element={<About />} />
      <Route path="de" element={<DataEngineering />} />
      <Route path="da" element={<DataAnalytics />} />
    </Routes>
  );
}

export default App;
