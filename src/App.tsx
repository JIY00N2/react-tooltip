import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import TooltipPage from "./pages/Tooltip";
import NotFoundPage from "./pages/NotFound";
import LayoutPage from "./pages/Layout";

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<LayoutPage />}
      >
        <Route
          index
          element={<HomePage />}
        />
        <Route
          path="/tooltip"
          element={<TooltipPage />}
        />
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Route>
    </Routes>
  );
}
