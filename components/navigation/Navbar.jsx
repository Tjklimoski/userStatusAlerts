import { useAuth } from "../../context/AuthProvider";
import NavItems from "./NavItems";

export default function Navbar() {
  const { auth } = useAuth();

  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-xxl">
        <a className="navbar-brand">Site Logo</a>
        {auth.user && <NavItems />}
      </div>
    </nav>
  );
}
