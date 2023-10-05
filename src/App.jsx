//App.jsx
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Cars from "./pages/Cars";
import NotFound from "./pages/NotFound";
import PageLayout from "./components/PageLayout";
import { CarsProvider } from "./contexts/cars.context";

function App() {
  return (
    <>
      <Router>
        <CarsProvider>
          <Routes>
            <Route path="/" element={<PageLayout />}>
              <Route index element={<Cars />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </CarsProvider>
      </Router>
    </>
  );
}

export default App;
