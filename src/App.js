import { Routes, Route, useLocation } from "react-router-dom";
import Landing from "./pages/Landing";
import About from "./pages/main/About";
import DataEngineering from "./pages/main/DataEngineering";
import DataAnalytics from "./pages/main/DataAnalytics";
import { CSSTransition } from "react-transition-group";

const routes = [
  { path: "/", name: "Landing", element: <Landing /> },
  { path: "/about", name: "Main", element: <About /> },
  { path: "/de", name: "Data Engineer", element: <DataEngineering /> },
  { path: "/da", name: "Data Analytics", element: <DataAnalytics /> },
];

function App() {
  const location = useLocation();
  console.log("location", location);
  return (
    <CSSTransition key={location.key} timeout={2000}>
      <div className="w-full h-full">
        <Routes>
          {routes.map(({ path, element }) => (
            <Route key="name" path={path} element={element}></Route>
          ))}
          {/* <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/de" element={<DataEngineering />} />
        <Route path="/da" element={<DataAnalytics />} /> */}
        </Routes>
      </div>
    </CSSTransition>
  );
}

export default App;
