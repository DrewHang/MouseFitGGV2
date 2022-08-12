import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import LandingPage from "./components/pages/LandingPage.jsx";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/pages/Login.jsx";
import SignUp from "./components/pages/SignUp.jsx";
import { AuthProvider } from "./components/contexts/AuthContext";
import PrivateRoute from "./components/routers/PrivateRoute";
import PublicRoute from "./components/routers/PublicRoute";
import Dashboard from "./components/pages/Dashboard.jsx";
import configureStore from "./store/configureStore";

const store = configureStore();

function App() {
  return (
    <>
      <Provider store={store}>
        <ToastContainer position="top-right" />
        <AuthProvider>
          <Routes>
            <Route path="/" element={<PublicRoute component={LandingPage} />} />
            <Route path="/login" element={<PublicRoute component={Login} />} />
            <Route
              path="/signup"
              element={<PublicRoute component={SignUp} />}
            />
            <Route
              path="/dashboard"
              element={<PrivateRoute component={Dashboard} />}
            />
          </Routes>
        </AuthProvider>
      </Provider>
    </>
  );
}

export default App;
