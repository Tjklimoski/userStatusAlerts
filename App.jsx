import { useState } from "react";
import Dashboard from "./components/Dashboard";
import LoginForm from "./components/LoginForm";
import NavItems from "./components/NavItems";

export default function App() {
  const [auth, setAuth] = useState({});

  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand">Site Logo</a>
          {auth.user && <NavItems />}
        </div>
      </nav>
      {auth.user ? <Dashboard /> : <LoginForm setAuth={setAuth} />}
    </>
  );
}
