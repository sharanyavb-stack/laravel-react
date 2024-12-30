import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./Home";
import Menubar from "./Layouts/Menubar";
import AuthProvider from "../contexts/AuthContext";
import PersonalizeDashboard from "./PersonalizeDashboard";

function App() {
  return (
    <div className="main">
      <AuthProvider>
        <Menubar />
        <Routes>
          <Route path="/*" element={<Outlet />}>
            <Route path="" element={<Home />} />
            <Route path="personalize" element={<PersonalizeDashboard />} />
          </Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
