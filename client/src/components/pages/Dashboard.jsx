import React from "react";
import { useAuth } from "../contexts/AuthContext.js";

function Dashboard() {
  const { logout } = useAuth();

  return (
    <>
      <div className="text-white">Dashboard</div>
      <button className="bg-white p-2" onClick={logout}>
        Logout
      </button>
    </>
  );
}

export default Dashboard;
