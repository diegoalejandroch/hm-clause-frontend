import { BrowserRouter, Route, Routes } from "react-router";

import ComprobatedLogin from "./ComprobatedLogin";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import ProtectedRoute from "./ProtectedRoute";
import Signup from "../pages/Signup";

export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ComprobatedLogin />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
