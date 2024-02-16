import NavItems from "./NavItems";

export default function Navbar({ auth, setAuth }) {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-xxl">
        <a className="navbar-brand">Site Logo</a>
        {auth.user && <NavItems setAuth={setAuth} />}
      </div>
    </nav>
  );
}
