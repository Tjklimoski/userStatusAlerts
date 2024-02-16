import { useState } from "react";
import Dashboard from "./components/Dashboard";
import LoginForm from "./components/LoginForm";
import Navbar from "./components/navigation/Navbar";

export default function App() {
  const [auth, setAuth] = useState({});

  return (
    <>
      <Navbar auth={auth} setAuth={setAuth} />
      {auth.user ? <Dashboard /> : <LoginForm setAuth={setAuth} />}
    </>
  );
}
