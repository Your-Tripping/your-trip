import { Routes, Route } from "react-router-dom";
import { AddTrippingModal } from "../components/AddTrip";
import { Dashboard } from "../pages/Dashboard";
import LandingPage from "../pages/Home";
import { ProtectedRoutes } from "./ProtectedRoutes";

export const RoutePages = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="addTripping" element={<AddTrippingModal />} />
      </Route>
    </Routes>
  );
};
