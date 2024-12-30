import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Menubar from "./Layouts/Menubar";
import AuthProvider from "../contexts/AuthContext";
import PersonalizeDashboard from "./PersonalizeDashboard";
import PublicRoutes from "./PublicRoutes";

function App() {
  return (
    <div className="main">
      <AuthProvider>
        <Menubar />
        <Routes>
          <Route path="/*" element={<PublicRoutes />}>
            <Route path="" element={<Home />} />
            <Route path="personalize" element={<PersonalizeDashboard />} />
          </Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
