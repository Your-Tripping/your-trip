import { Routes, Route } from "react-router-dom";
import { AddTrippingModal } from "../components/AddTrippingModal";
import { Dashboard } from "../pages/Dashboard";
import LandingPage from "../pages/Home";
import SearchPage from "../pages/SearchResults";
import { NotFoundPage } from "./NotFoundPages";
import { ProtectedRoutes } from "./ProtectedRoutes";
export const RoutePages = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="search" element={<SearchPage />} />
      </Route>
      <Route path="addTripping" element={<AddTrippingModal />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
