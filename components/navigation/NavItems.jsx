import { useAuth } from "../../context/AuthProvider";

export default function NavItems() {
  const { logout } = useAuth();

  return (
    <ul className="nav">
      <li className="nav-item">
        <a className="nav-link" aria-current="page" href="#">
          Dashboard
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Profile
        </a>
      </li>
      {/* add ms-2 to button li to maintain visual spacing */}
      <li className="nav-item ms-2">
        <button className="btn btn-primary" onClick={logout}>
          Logout
        </button>
      </li>
    </ul>
  );
}
