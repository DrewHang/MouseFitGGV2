import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/pages/LandingPage.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/pages/Login.jsx";
import SignUp from "./components/pages/SignUp.jsx";
import { AuthProvider } from "./components/contexts/AuthContext";
import PrivateRoute from "./components/routers/PrivateRoute";
import PublicRoute from "./components/routers/PublicRoute";
import Dashboard from "./components/pages/Dashboard.jsx";

function App() {
  return (
    <>
      <ToastContainer position="top-right" />
      <AuthProvider>
        <Routes>
          <Route path="/" element={<PublicRoute component={LandingPage} />} />
          <Route path="/login" element={<PublicRoute component={Login} />} />
          <Route path="/signup" element={<PublicRoute component={SignUp} />} />
          <Route
            path="/dashboard"
            element={<PrivateRoute component={Dashboard} />}
          />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
